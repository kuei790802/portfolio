import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "歸維邦 Josh Kuei｜PM / BA Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#0f766e",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex" }}>PM / BA Portfolio</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "96px",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "baseline",
              gap: "24px",
            }}
          >
            <span style={{ display: "flex" }}>歸維邦</span>
            <span style={{ display: "flex", color: "#0f766e" }}>Josh Kuei</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#475569",
              lineHeight: 1.4,
              maxWidth: "920px",
              display: "flex",
            }}
          >
            Operations-driven PM / BA · 9 年通路與跨部門協調經驗，搭配 AI 協作工作流交付數位專案。
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "#64748b",
            borderTop: "1px solid #cbd5e1",
            paddingTop: "32px",
          }}
        >
          <span style={{ display: "flex" }}>良野 7-Eleven · Insurance Bot · TOEIC Snack</span>
          <span style={{ display: "flex", fontWeight: 700, color: "#0f172a" }}>
            PMP · PSM I
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
