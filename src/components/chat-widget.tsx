"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { assistantQuestions, profile } from "@/data/profile";

const MAX_CHARS = 500;

// Renders **bold** and "- " bullets without injecting HTML
function Formatted({ text }: { text: string }) {
  const bold = (line: string) =>
    line.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
      chunk.startsWith("**") && chunk.endsWith("**") ? (
        <strong key={i} className="font-semibold text-fg">
          {chunk.slice(2, -2)}
        </strong>
      ) : (
        chunk
      ),
    );

  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];
  const flush = () => {
    if (bullets.length) {
      blocks.push(
        <ul key={blocks.length} className="my-1 list-disc space-y-1 pl-4">
          {bullets.map((b, i) => (
            <li key={i}>{bold(b)}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*[-*•]\s+(.*)/);
    if (m) bullets.push(m[1]);
    else {
      flush();
      if (line.trim()) blocks.push(<p key={blocks.length}>{bold(line)}</p>);
    }
  }
  flush();
  return <div className="space-y-2">{blocks}</div>;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error, stop, clearError } = useChat();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, status]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    if (error) clearError();
    sendMessage({ text: q.slice(0, MAX_CHARS) });
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="ai-chat"
        className={`fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet py-3 pr-5 pl-4 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_var(--violet)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6 ${
          open ? "max-sm:hidden" : ""
        }`}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-70" />
          <span className="relative inline-flex size-2.5 rounded-full bg-white" />
        </span>
        {open ? "Close chat" : "Ask my AI"}
      </button>

      {open && (
        <div
          id="ai-chat"
          role="dialog"
          aria-label={`Chat with Saleem's AI assistant`}
          className="theme-dark fixed inset-x-0 bottom-0 z-50 flex h-[85dvh] flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#080a12]/95 text-fg shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-22 sm:h-[560px] sm:max-h-[calc(100dvh-7rem)] sm:w-[400px] sm:rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Ask about Saleem</p>
              <p className="font-mono text-[11px] text-muted">AI assistant · answers from his resume</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid size-8 place-items-center rounded-lg text-muted hover:bg-white/5 hover:text-fg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-4">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm leading-relaxed" aria-live="polite">
            {messages.length === 0 && (
              <div>
                <p className="text-muted">
                  Hi! I can answer questions about Saleem&apos;s experience, projects and skills. Try one of these:
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {assistantQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => ask(q)}
                      className="rounded-lg border border-line px-3 py-2 text-left text-[13px] text-fg/90 transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => {
              const text = message.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              return message.role === "user" ? (
                <div key={message.id} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-cyan/90 to-violet/90 px-3.5 py-2 text-white [overflow-wrap:anywhere]">
                    {text}
                  </p>
                </div>
              ) : (
                <div key={message.id} className="flex gap-2.5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-cyan to-violet font-mono text-[9px] font-bold text-bg">
                    AI
                  </span>
                  <div className="min-w-0 text-fg/90 [overflow-wrap:anywhere]">
                    <Formatted text={text} />
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex gap-1.5 pl-9" aria-label="Thinking">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="size-1.5 animate-bounce rounded-full bg-cyan" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            )}

            {error && (
              <p className="rounded-lg border border-pink/30 bg-pink/10 px-3 py-2 text-[13px] text-pink">
                {error.message.includes("Too many")
                  ? "Too many questions. Please try again in a few minutes."
                  : (
                    <>
                      The assistant isn&apos;t available right now. You can{" "}
                      <a href={`mailto:${profile.email}`} className="underline">
                        email Saleem
                      </a>{" "}
                      directly instead.
                    </>
                  )}
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-white/5 p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={MAX_CHARS}
              placeholder="Ask about his experience…"
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-lg border border-line bg-white/[0.03] px-3 py-2.5 text-[16px] text-fg placeholder:text-muted focus:border-cyan/60 focus:outline-none sm:text-sm"
            />
            {busy ? (
              <button
                type="button"
                onClick={() => stop()}
                className="rounded-lg border border-line px-3 py-2.5 text-sm text-muted hover:text-fg"
              >
                Stop
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="rounded-lg bg-gradient-to-r from-cyan to-violet px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Send
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
