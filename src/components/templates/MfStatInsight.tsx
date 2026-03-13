import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfCredentialBadge } from "./mf/MfCredentialBadge";
import { MfPhotoBackground } from "./mf/MfPhotoBackground";

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
        {image && <MfPhotoBackground image={image} />}
        <MfDotGrid opacity={0.04} />

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
              opacity: 0.12,
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
            padding: image ? "0 64px 48px" : "0 64px",
            gap: 20,
          }}
        >
          {/* Glass card wrap when image present */}
          {image && (
            <div
              style={{
                position: "absolute",
                left: 40,
                right: 40,
                bottom: 24,
                top: "auto",
                height: "55%",
                borderRadius: 24,
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
                zIndex: -1,
              }}
            />
          )}
          {/* DATO label */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "6px 18px",
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

          {/* Visible stat */}
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              color: "#5BE0FF",
              lineHeight: 1,
              textShadow: image
                ? "0 0 80px rgba(91,224,255,0.6), 0 0 40px rgba(91,224,255,0.4), 0 2px 20px rgba(0,0,0,0.8)"
                : "0 0 60px rgba(91,224,255,0.4), 0 0 30px rgba(91,224,255,0.2)",
            }}
          >
            {stat}
          </div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: 700,
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 22,
              color: image ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 650,
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
            }}
          >
            {copy.body}
          </div>

          {/* CTA pill */}
          <div
            style={{
              marginTop: 8,
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "16px 36px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700 }}>
              {copy.cta}
            </span>
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
        {image && <MfPhotoBackground image={image} />}
        <MfDotGrid opacity={0.05} />

        {/* Content centered */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          {/* DATO label */}
          <div
            style={{
              padding: "6px 18px",
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

          {/* Glowing circle */}
          <div
            style={{
              width: 340,
              height: 340,
              borderRadius: "50%",
              border: "3px solid rgba(91,224,255,0.4)",
              boxShadow: image
                ? "0 0 100px rgba(91,224,255,0.4), 0 0 40px rgba(91,224,255,0.2), inset 0 0 60px rgba(91,224,255,0.1)"
                : "0 0 80px rgba(91,224,255,0.3), 0 0 30px rgba(91,224,255,0.15), inset 0 0 50px rgba(91,224,255,0.08)",
              backgroundColor: image ? "rgba(11,12,16,0.6)" : undefined,
              backdropFilter: image ? "blur(10px)" : undefined,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 160,
                fontWeight: 900,
                color: "#5BE0FF",
                textShadow: image
                  ? "0 0 60px rgba(91,224,255,0.6), 0 2px 20px rgba(0,0,0,0.8)"
                  : "0 0 50px rgba(91,224,255,0.5)",
              }}
            >
              {stat}
            </span>
          </div>

          {/* Hook text below circle */}
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              textAlign: "center",
              maxWidth: 700,
              padding: "0 56px",
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>

          <div
            style={{
              fontSize: 22,
              color: image ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.5)",
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 600,
              padding: "0 56px",
              textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
            }}
          >
            {copy.body}
          </div>

          {/* CTA pill */}
          <div
            style={{
              padding: "16px 36px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700 }}>
              {copy.cta}
            </span>
          </div>
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
      {image && (
        <MfPhotoBackground
          image={image}
          gradient="linear-gradient(to bottom, rgba(11,12,16,0.15) 0%, rgba(11,12,16,0.35) 25%, rgba(11,12,16,0.65) 50%, rgba(11,12,16,0.88) 72%, rgba(11,12,16,0.97) 100%)"
          objectPosition="center 30%"
        />
      )}
      <MfDotGrid opacity={image ? 0.03 : 0.06} />

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
          gap: 20,
        }}
      >
        {/* DATO badge */}
        <div
          style={{
            padding: "8px 24px",
            borderRadius: 50,
            border: "2px solid rgba(91,224,255,0.4)",
            backgroundColor: image ? "rgba(11,12,16,0.5)" : "rgba(4,4,71,0.4)",
            backdropFilter: image ? "blur(4px)" : undefined,
          }}
        >
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 22,
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
              ? "0 0 120px rgba(91,224,255,0.5), 0 0 60px rgba(91,224,255,0.6), 0 4px 24px rgba(0,0,0,0.8)"
              : "0 0 160px rgba(91,224,255,0.5), 0 0 80px rgba(91,224,255,0.4), 0 0 40px rgba(91,224,255,0.3)",
          }}
        >
          {stat}
        </div>

        {/* Hook */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: 750,
            textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
          }}
        >
          {copy.hook}
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: 24,
            color: image ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.55)",
            lineHeight: 1.45,
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
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <MfCredentialBadge text="2–3 años de desarrollo perdidos" />
        </div>

        {/* CTA pill */}
        <div
          style={{
            marginTop: 8,
            padding: "18px 44px",
            borderRadius: 50,
            backgroundColor: "#2076FF",
            boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
            {copy.cta}
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
