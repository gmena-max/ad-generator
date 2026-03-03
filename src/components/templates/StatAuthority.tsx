import { TemplateProps } from "./types";
import { Phone } from "lucide-react";

export function StatAuthority({ brand, copy, image }: TemplateProps) {
  const { colors } = brand;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Top half: stat + text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 64px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: colors.cta,
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          {copy.stat || "23+"}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {copy.hook}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          {copy.body}
        </div>
      </div>

      {/* Bottom: image area or placeholder */}
      <div
        style={{
          height: 400,
          backgroundColor: colors.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {image ? (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            Foto del doctor aqui
          </div>
        )}
      </div>

      {/* CTA bar */}
      <div
        style={{
          backgroundColor: colors.cta,
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Phone size={28} color="#FFFFFF" />
        <span style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700 }}>
          {copy.cta}
        </span>
      </div>

      {/* Logo watermark */}
      <img
        src={brand.logoWhite}
        alt=""
        style={{
          position: "absolute",
          top: 32,
          right: 32,
          height: 44,
          objectFit: "contain",
          opacity: 0.8,
        }}
      />
    </div>
  );
}
