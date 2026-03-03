import React from "react";

export function CtaButton({
  text,
  ctaColor,
  style,
}: {
  text: string;
  ctaColor: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: ctaColor,
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: 700,
        padding: "20px 48px",
        borderRadius: 12,
        textAlign: "center",
        letterSpacing: 0.5,
        ...style,
      }}
    >
      {text}
    </div>
  );
}
