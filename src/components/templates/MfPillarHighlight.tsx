import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfPillarBadge } from "./mf/MfPillarBadge";
import { MfPhotoBackground } from "./mf/MfPhotoBackground";

export function MfPillarHighlight({
  brand,
  copy,
  image,
  variant = "a",
}: MfTemplateProps) {
  const bullets = copy.body.split("\n").filter(Boolean);
  const pillarName = copy.stat || "Sicológico";

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
        {image && (
          <MfPhotoBackground
            image={image}
            gradient="linear-gradient(to bottom, rgba(11,12,16,0.15) 0%, rgba(11,12,16,0.35) 30%, rgba(11,12,16,0.75) 55%, rgba(11,12,16,0.95) 75%, rgba(11,12,16,0.98) 100%)"
            objectPosition="center 30%"
          />
        )}
        <MfDotGrid opacity={image ? 0.015 : 0.03} />

        {/* Large translucent pillar icon — hidden when image present */}
        {!image && (
          <div
            style={{
              position: "absolute",
              right: -60,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 500,
              opacity: 0.04,
              color: "#5BE0FF",
              lineHeight: 1,
              pointerEvents: "none",
            }}
          >
            {pillarName === "Técnica"
              ? "⚽"
              : pillarName === "Táctica"
                ? "📋"
                : pillarName === "Físico"
                  ? "💪"
                  : "🧠"}
          </div>
        )}

        {/* Pillar badge — top-right, floats over image */}
        <div style={{ position: "absolute", top: 48, right: 48 }}>
          <MfPillarBadge pillar={pillarName} />
        </div>

        {/* Content — lower portion, image breathes above */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "42%",
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 24,
          }}
        >
          {/* Hook question */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            {copy.hook}
          </div>

          {/* Numbered bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {bullets.map((line, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    color: "#5BE0FF",
                    fontSize: 22,
                    fontWeight: 700,
                    minWidth: 32,
                    opacity: 0.7,
                    textShadow: image ? "0 1px 8px rgba(0,0,0,0.5)" : undefined,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 24,
                    lineHeight: 1.4,
                    textShadow: image ? "0 1px 8px rgba(0,0,0,0.5)" : undefined,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div
            style={{
              marginTop: 8,
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "14px 32px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700 }}>
              {copy.cta} →
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
        {image && (
          <MfPhotoBackground
            image={image}
            gradient="linear-gradient(to bottom, rgba(11,12,16,0.5) 0%, rgba(11,12,16,0.7) 45%, rgba(11,12,16,0.85) 100%)"
          />
        )}
        <MfDotGrid opacity={0.02} />

        {/* Top half — large hook on dark bg */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "48%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 20,
          }}
        >
          <MfPillarBadge pillar={pillarName} />
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>
        </div>

        {/* Bottom half — body on deep navy card */}
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 40,
            right: 40,
            top: "48%",
            backgroundColor: image ? "rgba(4,4,71,0.55)" : "#040447",
            backdropFilter: image ? "blur(12px)" : undefined,
            borderRadius: 32,
            padding: "48px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
            boxShadow: "0 0 40px rgba(91,224,255,0.08)",
          }}
        >
          {bullets.map((line, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <span
                style={{
                  color: "#5BE0FF",
                  fontSize: 18,
                  lineHeight: "30px",
                }}
              >
                ◆
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 26,
                  lineHeight: 1.45,
                }}
              >
                {line}
              </span>
            </div>
          ))}

          {/* CTA inside card */}
          <div
            style={{
              marginTop: 12,
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "14px 32px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700 }}>
              {copy.cta}
            </span>
          </div>
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): Pillar badge top-center, hook centered, bullet cards with cyan left-border
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
          gradient="radial-gradient(ellipse at center, rgba(11,12,16,0.55) 0%, rgba(11,12,16,0.9) 100%)"
        />
      )}
      <MfDotGrid />

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "72px 64px 0",
          gap: 36,
        }}
      >
        <MfPillarBadge pillar={pillarName} />

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            textAlign: "center",
            textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
          }}
        >
          {copy.hook}
        </div>

        {/* Bullet cards with cyan left-border */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: "100%",
            marginTop: 12,
          }}
        >
          {bullets.map((line, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px 28px",
                backgroundColor: image ? "rgba(4,4,71,0.45)" : "rgba(4,4,71,0.5)",
                backdropFilter: image ? "blur(8px)" : undefined,
                borderRadius: 16,
                borderLeft: "4px solid #5BE0FF",
              }}
            >
              <span
                style={{
                  color: image ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.65)",
                  fontSize: 26,
                  lineHeight: 1.4,
                  textShadow: image ? "0 1px 8px rgba(0,0,0,0.6)" : undefined,
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "auto",
            marginBottom: 24,
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
