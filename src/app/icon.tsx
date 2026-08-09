import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Placeholder mark — no approved logo exists yet (PRD v2 §12). Swap for the real
// SVG mark as soon as the owner signs off a direction.
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
          background: "#10171C",
          borderRadius: 14,
          color: "#B4462A",
          fontSize: 30,
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
