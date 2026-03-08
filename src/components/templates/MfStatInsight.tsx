import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfCredentialBadge } from "./mf/MfCredentialBadge";

/** Full-bleed background image with dark gradient overlay */
function PhotoBackground({ image }: { image: string }) {
  return (
    <>
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 20%",
        }}
      />
      {/* Heavy gradient overlay — dark at bottom for text, lighter at top to show face */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(11,12,16,0.45) 0%, rgba(11,12,16,0.7) 40%, rgba(11,12,16,0.92) 70%, rgba(11,12,16,0.98) 100%)",
        }}
      />
    </>
  );
}

export function MfStatInsight({
  brand,
  copy,
  image,
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
        {image && <PhotoBackground image={image} />}
        <MfDotGrid opacity={0.025} />

        {/* Stat top-right (giant, cropped) — hidden when image present */}
        {!image && (
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
        )}

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
            justifyContent: image ? "flex-end" : "center",
            padding: image ? "0 64px 60px" : "0 64px",
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
              textShadow: image
                ? "0 0 60px rgba(91,224,255,0.5), 0 2px 20px rgba(0,0,0,0.8)"
                : "0 0 40px rgba(91,224,255,0.3)",
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
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 26,
              color: image ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 650,
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
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
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
            }}
          >
            {copy.cta}
          </div>
        </div>

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
        {image && <PhotoBackground image={image} />}
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
              boxShadow: image
                ? "0 0 80px rgba(91,224,255,0.3), inset 0 0 50px rgba(91,224,255,0.08)"
                : "0 0 60px rgba(91,224,255,0.2), inset 0 0 40px rgba(91,224,255,0.05)",
              backgroundColor: image ? "rgba(11,12,16,0.6)" : undefined,
              backdropFilter: image ? "blur(8px)" : undefined,
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
                textShadow: image
                  ? "0 0 50px rgba(91,224,255,0.5), 0 2px 20px rgba(0,0,0,0.8)"
                  : "0 0 40px rgba(91,224,255,0.4)",
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
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 26,
              color: image ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.5)",
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 600,
              padding: "0 40px",
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
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
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
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
      {image && <PhotoBackground image={image} />}
      <MfDotGrid />

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: image ? "flex-end" : "center",
          textAlign: "center",
          padding: image ? "0 64px 40px" : "0 64px",
          gap: 24,
        }}
      >
        {/* DATO badge */}
        <div
          style={{
            padding: "8px 24px",
            borderRadius: 50,
            border: "1.5px solid rgba(91,224,255,0.3)",
            backgroundColor: image ? "rgba(11,12,16,0.5)" : "rgba(4,4,71,0.4)",
            backdropFilter: image ? "blur(4px)" : undefined,
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
            textShadow: image
              ? "0 0 80px rgba(91,224,255,0.5), 0 4px 24px rgba(0,0,0,0.8)"
              : "0 0 60px rgba(91,224,255,0.35)",
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
            textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
          }}
        >
          {copy.hook}
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: 26,
            color: image ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
            maxWidth: 650,
            textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
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
