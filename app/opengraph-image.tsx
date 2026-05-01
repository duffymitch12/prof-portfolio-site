import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 1200,
                    height: 630,
                    background: "#fefffe",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px 100px",
                    position: "relative",
                    fontFamily: "monospace",
                }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 8,
                        height: "100%",
                        background: "#18181b",
                    }}
                />

                <div
                    style={{
                        fontSize: 18,
                        color: "#71717a",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 24,
                    }}
                >
                    Full Stack Engineer
                </div>

                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 800,
                        color: "#18181b",
                        lineHeight: 1.05,
                        letterSpacing: "-2px",
                    }}
                >
                    Mitch Duffy
                </div>

                <div
                    style={{
                        marginTop: 32,
                        fontSize: 22,
                        color: "#52525b",
                        maxWidth: 700,
                        lineHeight: 1.5,
                    }}
                >
                    Building fast, thoughtful web products. React · Next.js · TypeScript · AI/LLM.
                </div>

                {/* Bottom label */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 60,
                        left: 100,
                        fontSize: 16,
                        color: "#a1a1aa",
                        letterSpacing: "0.1em",
                    }}
                >
                    mitchduffy.dev
                </div>
            </div>
        ),
        { ...size }
    );
}