import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background: "#F6F4EF",
          borderRadius: 12,
        }}
      >
        <svg width="42" height="52" viewBox="0 0 90 110" fill="none">
          <path d="M85 5 L20 55 L45 55 L85 25 Z" fill="#1E3A2E" />
          <path d="M85 45 L15 75 L40 75 L85 50 Z" fill="#5E7A68" />
          <path d="M85 68 L20 100 L45 100 L85 73 Z" fill="#9AAD9C" />
        </svg>
      </div>
    ),
    size
  );
}
