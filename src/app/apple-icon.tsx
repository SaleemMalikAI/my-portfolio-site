import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS adds its own rounded corners, so this one is a full square
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%)",
          color: "#05060b",
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -5,
        }}
      >
        SM
      </div>
    ),
    size,
  );
}
