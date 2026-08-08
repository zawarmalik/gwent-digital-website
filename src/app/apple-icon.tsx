import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Placeholder mark — see src/app/icon.tsx.
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
          background: "#10171C",
          color: "#B4462A",
          fontSize: 84,
          fontWeight: 800,
          fontFamily: "Georgia, serif",
        }}
      >
        GD
      </div>
    ),
    { ...size },
  );
}
