import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#173E36",
          color: "#FFFDFC",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 36,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        V
      </div>
    ),
    size,
  );
}
