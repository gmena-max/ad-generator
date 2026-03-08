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

  // Variant A (default): Pillar badge top-center, hook centered, glass bullet cards, CTA pill
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
          gradient="linear-gradient(to bottom, rgba(11,12,16,0.25) 0%, rgba(11,12,16,0.45) 25%, rgba(11,12,16,0.72) 50%, rgba(11,12,16,0.88) 75%, rgba(11,12,16,0.95) 100%)"
          objectPosition="center 30%"
        />
      )}
      <MfDotGrid opacity={image ? 0.015 : 0.03} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 64px 0",
          gap: 36,
        }}
      >
        <MfPillarBadge pillar={pillarName} />

        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.18,
            textAlign: "center",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          {copy.hook}
        </div>

        {/* Cyan divider */}
        <div
          style={{
            width: 64,
            height: 2,
            backgroundColor: "rgba(91,224,255,0.25)",
            borderRadius: 2,
            marginTop: -8,
          }}
        />

        {/* Glass bullet cards with cyan left-border */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: "100%",
            marginTop: 4,
          }}
        >
          {bullets.map((line, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "22px 30px",
                backgroundColor: image ? "rgba(4,4,71,0.38)" : "rgba(4,4,71,0.5)",
                backdropFilter: image ? "blur(14px)" : undefined,
                borderRadius: 18,
                borderLeft: "4px solid #5BE0FF",
                borderTop: image ? "1px solid rgba(91,224,255,0.07)" : undefined,
                borderRight: image ? "1px solid rgba(91,224,255,0.04)" : undefined,
                borderBottom: image ? "1px solid rgba(91,224,255,0.04)" : undefined,
                boxShadow: image
                  ? "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)"
                  : undefined,
              }}
            >
              <span
                style={{
                  color: image ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.65)",
                  fontSize: 26,
                  lineHeight: 1.4,
                  textShadow: image ? "0 1px 8px rgba(0,0,0,0.5)" : undefined,
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
            marginBottom: 20,
            padding: "18px 44px",
            borderRadius: 50,
            backgroundColor: "#2076FF",
            boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700, letterSpacing: "0.3px" }}>
            {copy.cta}
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
