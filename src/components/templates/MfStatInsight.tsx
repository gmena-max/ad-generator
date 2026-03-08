import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfCredentialBadge } from "./mf/MfCredentialBadge";

export function MfStatInsight({
  brand,
  copy,
  variant = "a",
}: MfTemplateProps) {
  const stat = copy.stat || "8";

  if (variant === "b") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#0B0C10",
          overflow: "hidden",
        }}
      >
        <MfDotGrid opacity={0.025} />

        {/* Stat top-right (giant, cropped) */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -20,
            fontSize: 360,
            fontWeight: 900,
            color: "#5BE0FF",
            opacity: 0.08,
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          {stat}
        </div>

        {/* Content left-aligned center */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 28,
          }}
        >
          {/* Visible stat */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#5BE0FF",
              lineHeight: 1,
              textShadow: "0 0 40px rgba(91,224,255,0.3)",
            }}
          >
            {stat}
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: 700,
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 650,
            }}
          >
            {copy.body}
          </div>

          {/* CTA text */}
          <div
            style={{
              marginTop: 12,
              fontSize: 24,
              color: "#5BE0FF",
              fontWeight: 600,
            }}
          >
            {copy.cta}
          </div>
        </div>

        {/* Horizontal logo bottom-left */}
        <img
          src={brand.logoWhite}
          alt=""
          style={{
            position: "absolute",
            bottom: 140,
            left: 64,
            height: 36,
            objectFit: "contain",
            opacity: 0.5,
          }}
        />

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  if (variant === "c") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#0B0C10",
        }}
      >
        <MfDotGrid opacity={0.04} />

        {/* Stat inside glowing circle center */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
          }}
        >
          {/* Glowing circle */}
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "2px solid rgba(91,224,255,0.3)",
              boxShadow:
                "0 0 60px rgba(91,224,255,0.2), inset 0 0 40px rgba(91,224,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 140,
                fontWeight: 900,
                color: "#5BE0FF",
                textShadow: "0 0 40px rgba(91,224,255,0.4)",
              }}
            >
              {stat}
            </span>
          </div>

          {/* Hook text below circle */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              textAlign: "center",
              maxWidth: 700,
              padding: "0 40px",
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 600,
              padding: "0 40px",
            }}
          >
            {copy.body}
          </div>
        </div>

        {/* CTA text bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 150,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            {copy.cta}
          </span>
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): "DATO" badge top, massive stat centered with glow, credential bar bottom
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#0B0C10",
      }}
    >
      <MfDotGrid />

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 64px",
          gap: 24,
        }}
      >
        {/* DATO badge */}
        <div
          style={{
            padding: "8px 24px",
            borderRadius: 50,
            border: "1.5px solid rgba(91,224,255,0.3)",
            backgroundColor: "rgba(4,4,71,0.4)",
          }}
        >
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            DATO
          </span>
        </div>

        {/* Massive stat */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: "#5BE0FF",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(91,224,255,0.35)",
          }}
        >
          {stat}
        </div>

        {/* Hook */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 750,
          }}
        >
          {copy.hook}
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
            maxWidth: 650,
          }}
        >
          {copy.body}
        </div>

        {/* Credential bar */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <MfCredentialBadge text="8x Campeón" />
          <MfCredentialBadge text="30+ años" />
        </div>

        {/* CTA pill */}
        <div
          style={{
            marginTop: 12,
            padding: "16px 36px",
            borderRadius: 50,
            backgroundColor: "#2076FF",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 700 }}>
            {copy.cta}
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
