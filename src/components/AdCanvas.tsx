"use client";

import { forwardRef } from "react";
import { ClientBrand } from "@/data/clients";
import { CopyContent, TemplateId } from "@/data/templates";
import { Phone } from "lucide-react";

type AdCanvasProps = {
  brand: ClientBrand;
  template: TemplateId;
  copy: CopyContent;
  image?: string;
};

const AD_WIDTH = 1080;
const AD_HEIGHT = 1350;

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas({ brand, template, copy, image }, ref) {
    const { colors } = brand;

    return (
      <div
        ref={ref}
        style={{
          width: AD_WIDTH,
          height: AD_HEIGHT,
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        {template === "stat-authority" && (
          <StatAuthority brand={brand} copy={copy} image={image} />
        )}
        {template === "symptom-question" && (
          <SymptomQuestion brand={brand} copy={copy} colors={colors} />
        )}
        {template === "social-proof" && (
          <SocialProof brand={brand} copy={copy} colors={colors} />
        )}
        {template === "faq-card" && (
          <FaqCard brand={brand} copy={copy} colors={colors} />
        )}
        {template === "educational" && (
          <Educational brand={brand} copy={copy} colors={colors} />
        )}
        {template === "scarcity" && (
          <Scarcity brand={brand} copy={copy} image={image} colors={colors} />
        )}
      </div>
    );
  }
);

type Colors = ClientBrand["colors"];

function BrandBar({ brand, variant = "dark" }: { brand: ClientBrand; variant?: "dark" | "light" }) {
  const bg = variant === "dark" ? brand.colors.primary : brand.colors.background;
  const text = variant === "dark" ? "#FFFFFF" : brand.colors.primary;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
      }}
    >
      <img
        src={variant === "dark" ? brand.logoWhite : brand.logo}
        alt={brand.name}
        style={{ height: 50, objectFit: "contain" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Phone size={24} color={text} />
        <span style={{ color: text, fontSize: 28, fontWeight: 600 }}>
          {brand.phone}
        </span>
      </div>
    </div>
  );
}

function CtaButton({
  text,
  ctaColor,
  style,
}: {
  text: string;
  ctaColor: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: ctaColor,
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: 700,
        padding: "20px 48px",
        borderRadius: 12,
        textAlign: "center",
        letterSpacing: 0.5,
        ...style,
      }}
    >
      {text}
    </div>
  );
}

// ─── Template: Stat Authority ───────────────────────────────────

function StatAuthority({
  brand,
  copy,
  image,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  image?: string;
}) {
  const { colors } = brand;
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
      {/* Top half: stat + text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 64px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: colors.cta,
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          {copy.stat || "23+"}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {copy.hook}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          {copy.body}
        </div>
      </div>

      {/* Bottom: image area or placeholder */}
      <div
        style={{
          height: 400,
          backgroundColor: colors.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {image ? (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            📷 Foto del doctor aquí
          </div>
        )}
      </div>

      {/* CTA bar */}
      <div
        style={{
          backgroundColor: colors.cta,
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Phone size={28} color="#FFFFFF" />
        <span style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700 }}>
          {copy.cta}
        </span>
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
          opacity: 0.8,
        }}
      />
    </div>
  );
}

// ─── Template: Symptom Question ─────────────────────────────────

function SymptomQuestion({
  brand,
  copy,
  colors,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  colors: Colors;
}) {
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
              {brand.doctor}
            </div>
            <div style={{ fontSize: 22, color: colors.accent }}>
              {brand.credential}
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

// ─── Template: Social Proof ─────────────────────────────────────

function SocialProof({
  brand,
  copy,
  colors,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  colors: Colors;
}) {
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
          Google Reviews
        </div>
      </div>

      <CtaButton text={copy.cta} ctaColor={colors.cta} />

      <BrandBar brand={brand} />
    </div>
  );
}

// ─── Template: FAQ Card ─────────────────────────────────────────

function FaqCard({
  brand,
  copy,
  colors,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  colors: Colors;
}) {
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
            DM
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700, color: colors.primary }}>
              {brand.doctor}
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

// ─── Template: Educational ──────────────────────────────────────

function Educational({
  brand,
  copy,
  colors,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  colors: Colors;
}) {
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
          Educación
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
              {brand.doctor}
            </div>
            <div style={{ fontSize: 20, color: colors.accent }}>
              {brand.credential}
            </div>
          </div>
        </div>

        <CtaButton text={copy.cta} ctaColor={colors.cta} />
      </div>

      <BrandBar brand={brand} />
    </div>
  );
}

// ─── Template: Scarcity ─────────────────────────────────────────

function Scarcity({
  brand,
  copy,
  image,
  colors,
}: {
  brand: ClientBrand;
  copy: CopyContent;
  image?: string;
  colors: Colors;
}) {
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
              📷 Foto del doctor o clínica
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
          {brand.doctor}
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
