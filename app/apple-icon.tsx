import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
                    background:
                        "linear-gradient(135deg, #0284C7 0%, #0f172a 100%)",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    fontSize: 100,
                    letterSpacing: -4,
                }}
            >
                L
            </div>
        ),
        { ...size }
    );
}
