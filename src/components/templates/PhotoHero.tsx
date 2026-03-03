import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function PhotoHero({ brand, copy, image, colors }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: colors.primary,
      }}
    >
      {/* Full-bleed image (top 70%) */}
      {image ? (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "70%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "70%",
            backgroundColor: colors.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 28 }}>
            Sube una foto para este template
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "75%",
          background: `linear-gradient(to bottom, transparent 30%, ${colors.primary} 100%)`,
        }}
      />

      {/* Content over gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 0,
          right: 0,
          padding: "0 72px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Hook */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          {copy.hook}
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          {copy.body}
        </div>

        {/* CTA */}
        <CtaButton
          text={copy.cta}
          ctaColor={colors.cta}
          style={{ alignSelf: "flex-start", marginTop: 12 }}
        />
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
          opacity: 0.9,
        }}
      />

      <BrandBar brand={brand} />
    </div>
  );
}
