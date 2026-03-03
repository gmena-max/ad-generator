import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { CtaButton } from "./CtaButton";

export function SocialProof({ brand, copy, colors }: TemplateProps) {
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
        padding: "80px 64px",
        position: "relative",
      }}
    >
      {/* Stars */}
      <div style={{ fontSize: 80, marginBottom: 16 }}>
        {"★".repeat(5)}
      </div>
      <div
        style={{
          fontSize: 120,
          fontWeight: 900,
          color: colors.cta,
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {copy.stat || "4.9"}
      </div>
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: 48,
        }}
      >
        {copy.hook}
      </div>

      {/* Review cards area */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "40px 48px",
          marginBottom: 60,
          maxWidth: 800,
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          &ldquo;{copy.body}&rdquo;
        </div>
      </div>

      {/* Google badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 22,
            fontWeight: 600,
            color: colors.primary,
          }}
        >
          {brand.reviewCount
            ? `${brand.reviewRating || ""}★ · ${brand.reviewCount} reseñas en Google`
            : "Google Reviews"}
        </div>
      </div>

      <CtaButton text={copy.cta} ctaColor={colors.cta} />

      <BrandBar brand={brand} />
    </div>
  );
}
