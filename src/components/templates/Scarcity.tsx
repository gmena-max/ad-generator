import { TemplateProps } from "./types";
import { BrandBar } from "./BrandBar";
import { Phone } from "lucide-react";

export function Scarcity({ brand, copy, image, colors }: TemplateProps) {
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
      {/* Urgency badge */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          backgroundColor: colors.cta,
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: 800,
          padding: "12px 28px",
          borderRadius: 8,
          textTransform: "uppercase",
          letterSpacing: 1,
          zIndex: 10,
        }}
      >
        {copy.hook}
      </div>

      {/* Image area */}
      <div
        style={{
          height: 600,
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image ? (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <div
              style={{ color: "rgba(255,255,255,0.4)", fontSize: 24 }}
            >
              Foto del doctor o clinica
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px 72px",
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: colors.primary,
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          {brand.headline}
        </div>
        <div
          style={{
            fontSize: 28,
            color: colors.text,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          {copy.body}
        </div>

        {/* WhatsApp CTA */}
        <div
          style={{
            backgroundColor: colors.cta,
            color: "#FFFFFF",
            fontSize: 32,
            fontWeight: 700,
            padding: "24px 48px",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Phone size={28} color="#FFFFFF" />
          {copy.cta}
        </div>
      </div>

      <BrandBar brand={brand} variant="light" />
    </div>
  );
}
