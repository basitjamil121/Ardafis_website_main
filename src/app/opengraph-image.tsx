import { ImageResponse } from "next/og";

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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#F6F4EF",
          padding: "80px",
        }}
      >
        <svg width="84" height="103" viewBox="0 0 90 110" fill="none">
          <path d="M85 5 L20 55 L45 55 L85 25 Z" fill="#1E3A2E" />
          <path d="M85 45 L15 75 L40 75 L85 50 Z" fill="#5E7A68" />
          <path d="M85 68 L20 100 L45 100 L85 73 Z" fill="#9AAD9C" />
        </svg>
        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            fontWeight: 700,
            color: "#1E3A2E",
            letterSpacing: "-0.02em",
          }}
        >
          Ardafis Partners
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#23281F", opacity: 0.75 }}>
          Your Outsourced Accounts &amp; Finance Team, Built on Precision
        </div>
      </div>
    ),
    size
  );
}
