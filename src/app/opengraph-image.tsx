import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Placeholder OG card — swap for a real photo/screenshot-led image once available.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#10171C",
          color: "#F2F1ED",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#B4462A", letterSpacing: 4, textTransform: "uppercase" }}>
          Newport &middot; South Wales
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 24, maxWidth: 900 }}>
          Websites &amp; Automation for Independent Businesses
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#C9B79C" }}>gwentdigital.co.uk</div>
      </div>
    ),
    { ...size },
  );
}
