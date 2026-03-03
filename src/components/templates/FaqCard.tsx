import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function FaqCard({ brand, copy, colors }: TemplateProps) {
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
      {/* Header */}
      <div
        style={{
          backgroundColor: colors.primary,
          padding: "48px 64px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          Preguntas Frecuentes
        </div>
      </div>

      {/* Q&A Card */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "48px 72px",
        }}
      >
        {/* Question */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: colors.primary,
            lineHeight: 1.2,
            marginBottom: 40,
            paddingLeft: 28,
            borderLeft: `8px solid ${colors.cta}`,
          }}
        >
          {copy.question || copy.hook}
        </div>

        {/* Answer */}
        <div
          style={{
            fontSize: 30,
            color: colors.text,
            lineHeight: 1.6,
            marginBottom: 60,
          }}
        >
          {copy.answer || copy.body}
        </div>

        {/* Doctor badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 48,
            padding: "24px 32px",
            backgroundColor: `${colors.accent}15`,
            borderRadius: 16,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              backgroundColor: colors.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {brand.headline
              .split(" ")
              .filter((w) => w[0] !== w[0]?.toLowerCase())
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700, color: colors.primary }}>
              {brand.headline}
            </div>
            <div style={{ fontSize: 20, color: colors.accent }}>
              {brand.tagline}
            </div>
          </div>
        </div>

        <CtaButton text={copy.cta} ctaColor={colors.cta} />
      </div>

      <BrandBar brand={brand} />
    </div>
  );
}
