import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #05060b 0%, #0c0e17 60%, #1a1033 100%)",
          color: "#ededef",
        }}
      >
        <div style={{ fontSize: 28, color: "#22d3ee" }}>saleem-malik.vercel.app</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700 }}>{profile.name}</div>
          <div style={{ fontSize: 44, color: "#9b9ba6", marginTop: 12 }}>{profile.role}</div>
        </div>
        <div style={{ fontSize: 28, color: "#9b9ba6" }}>
          Next.js · TypeScript · FastAPI · LangChain · RAG
        </div>
      </div>
    ),
    size,
  );
}
