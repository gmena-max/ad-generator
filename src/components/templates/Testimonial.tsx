import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function Testimonial({ brand, copy, colors }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 72px",
        position: "relative",
      }}
    >
      {/* Stars */}
      <div style={{ fontSize: 64, marginBottom: 40, color: "#FFD700" }}>
        {"★".repeat(5)}
      </div>

      {/* Large quote */}
      <div
        style={{
          fontSize: 44,
          fontWeight: 300,
          fontStyle: "italic",
          color: "#FFFFFF",
          lineHeight: 1.5,
          maxWidth: 900,
          marginBottom: 48,
        }}
      >
        <span style={{ fontSize: 72, fontWeight: 700, color: colors.cta, lineHeight: 0 }}>
          &ldquo;
        </span>
        {copy.body}
        <span style={{ fontSize: 72, fontWeight: 700, color: colors.cta, lineHeight: 0 }}>
          &rdquo;
        </span>
      </div>

      {/* Patient name */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 40,
          letterSpacing: 1,
        }}
      >
        — {copy.hook}
      </div>

      {/* Review badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 12,
            padding: "12px 24px",
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {brand.reviewCount
            ? `${brand.reviewRating || "4.9"}★ · ${brand.reviewCount} reseñas en Google`
            : "Google Reviews"}
        </div>
      </div>

      {/* CTA */}
      <CtaButton text={copy.cta} ctaColor={colors.cta} />

      <BrandBar brand={brand} />
    </div>
  );
}
