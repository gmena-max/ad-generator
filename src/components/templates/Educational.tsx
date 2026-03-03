import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function Educational({ brand, copy, colors }: TemplateProps) {
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
      {/* Top accent */}
      <div style={{ height: 8, backgroundColor: colors.cta }} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 72px",
        }}
      >
        {/* Topic badge */}
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            backgroundColor: colors.accent,
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 600,
            padding: "10px 24px",
            borderRadius: 8,
            marginBottom: 40,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Educacion
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 40,
          }}
        >
          {copy.hook}
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: colors.cta,
            marginBottom: 40,
          }}
        />

        {/* Body */}
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            marginBottom: 60,
          }}
        >
          {copy.body}
        </div>

        {/* Doctor info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 8,
              height: 48,
              backgroundColor: colors.cta,
              borderRadius: 4,
            }}
          />
          <div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF" }}>
              {brand.headline}
            </div>
            <div style={{ fontSize: 20, color: colors.accent }}>
              {brand.subheadline}
            </div>
          </div>
        </div>

        <CtaButton text={copy.cta} ctaColor={colors.cta} />
      </div>

      <BrandBar brand={brand} />
    </div>
  );
}
