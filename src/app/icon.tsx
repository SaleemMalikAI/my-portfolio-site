import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "SM" monogram on the site's cyan → violet gradient
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%)",
          color: "#05060b",
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        SM
      </div>
    ),
    size,
  );
}
