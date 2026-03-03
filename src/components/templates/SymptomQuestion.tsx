import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function SymptomQuestion({ brand, copy, colors }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Accent bar top */}
      <div style={{ height: 12, backgroundColor: colors.accent }} />

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 72px",
        }}
      >
        {/* Hook question */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: colors.primary,
            lineHeight: 1.15,
            marginBottom: 48,
          }}
        >
          {copy.hook}
        </div>

        {/* Body / bullets */}
        <div
          style={{
            fontSize: 32,
            color: colors.text,
            lineHeight: 1.5,
            marginBottom: 60,
          }}
        >
          {copy.body.split("\n").map((line, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              {line}
            </div>
          ))}
        </div>

        {/* Doctor credential */}
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
              backgroundColor: colors.accent,
              borderRadius: 4,
            }}
          />
          <div>
            <div
              style={{ fontSize: 28, fontWeight: 700, color: colors.primary }}
            >
              {brand.headline}
            </div>
            <div style={{ fontSize: 22, color: colors.accent }}>
              {brand.subheadline}
            </div>
          </div>
        </div>

        {/* CTA */}
        <CtaButton text={copy.cta} ctaColor={colors.cta} />
      </div>

      <BrandBar brand={brand} />
    </div>
  );
}
