import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfPillarBadge } from "./mf/MfPillarBadge";

export function MfQuestionHook({
  brand,
  copy,
  variant = "a",
}: MfTemplateProps) {
  const pillarName = copy.stat;

  if (variant === "b") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#0B0C10",
        }}
      >
        <MfDotGrid opacity={0.025} />

        {/* Pillar badge top-right */}
        {pillarName && (
          <div style={{ position: "absolute", top: 48, right: 48 }}>
            <MfPillarBadge pillar={pillarName} />
          </div>
        )}

        {/* Question top-left large */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 64,
            right: 64,
            maxWidth: 800,
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
            }}
          >
            {copy.hook}
          </div>
        </div>

        {/* Answer tease as card on dark navy bg bottom-right */}
        {copy.body && (
          <div
            style={{
              position: "absolute",
              bottom: 160,
              right: 48,
              left: 120,
              backgroundColor: "#040447",
              borderRadius: 24,
              padding: "36px 44px",
              borderLeft: "4px solid #5BE0FF",
            }}
          >
            <div
              style={{
                fontSize: 26,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.5,
              }}
            >
              {copy.body}
            </div>

            <div
              style={{
                marginTop: 20,
                fontSize: 22,
                color: "#5BE0FF",
                fontWeight: 600,
              }}
            >
              {copy.cta}
            </div>
          </div>
        )}

        {/* Logo bottom-left */}
        <img
          src={brand.logoWhite}
          alt=""
          style={{
            position: "absolute",
            bottom: 140,
            left: 48,
            height: 36,
            objectFit: "contain",
            opacity: 0.5,
          }}
        />

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
          overflow: "hidden",
        }}
      >
        {/* Diagonal gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #040447 0%, #0B0C10 100%)",
          }}
        />

        <MfDotGrid opacity={0.03} />

        {/* Glow halo behind text */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,224,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Question centered — minimal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 72px",
            gap: 40,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
              textShadow: "0 0 40px rgba(91,224,255,0.15)",
            }}
          >
            {copy.hook}
          </div>
        </div>

        {/* mentefutbol.com at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 148,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            mentefutbol.com
          </span>
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): Decorative "?" top, question centered, answer tease below, CTA + brand bar
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#0B0C10",
      }}
    >
      <MfDotGrid />

      {/* Decorative "?" top */}
      <span
        style={{
          position: "absolute",
          top: 40,
          right: 60,
          fontSize: 320,
          color: "#5BE0FF",
          opacity: 0.06,
          fontWeight: 900,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        ?
      </span>

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 72px",
          gap: 36,
        }}
      >
        {/* Question */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          {copy.hook}
        </div>

        {/* Answer tease */}
        {copy.body && (
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            {copy.body}
          </div>
        )}

        {/* CTA text */}
        <div
          style={{
            marginTop: 20,
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
