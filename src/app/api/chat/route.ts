import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { assistantInstructions } from "@/lib/assistant";

export const maxDuration = 30;

const MAX_MESSAGES = 12;
const MAX_CHARS = 500;
const RATE_LIMIT = 20; // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Best-effort limit per server instance; add a Vercel Firewall rate-limit rule for a hard cap.
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function textLength(message: UIMessage) {
  return message.parts.reduce((n, part) => n + (part.type === "text" ? part.text.length : 0), 0);
}

export async function POST(req: Request) {
  if (process.env.NEXT_PUBLIC_ASSISTANT_ENABLED !== "true") {
    return Response.json({ error: "The assistant is not enabled." }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "Too many questions. Please try again in a few minutes." }, { status: 429 });
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES ||
    messages.some((m) => m.role !== "user" && m.role !== "assistant") ||
    messages.some((m) => m.role === "user" && textLength(m) > MAX_CHARS)
  ) {
    return Response.json(
      { error: `Please keep questions under ${MAX_CHARS} characters and the chat under ${MAX_MESSAGES} messages.` },
      { status: 400 },
    );
  }

  const result = streamText({
    model: "anthropic/claude-haiku-4.5",
    instructions: assistantInstructions,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 400,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
