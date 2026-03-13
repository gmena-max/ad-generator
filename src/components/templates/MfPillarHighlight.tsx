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
        <MfDotGrid opacity={image ? 0.03 : 0.06} />

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
            gap: 20,
          }}
        >
          {/* Hook question */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.12,
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            {copy.hook}
          </div>

          {/* Numbered bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                    fontSize: 20,
                    fontWeight: 700,
                    minWidth: 32,
                    opacity: 1.0,
                    textShadow: image ? "0 1px 8px rgba(0,0,0,0.5)" : undefined,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 22,
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
              padding: "16px 36px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700 }}>
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
        <MfDotGrid opacity={0.04} />

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
              fontSize: 52,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.12,
              textShadow: image ? "0 2px 12px rgba(0,0,0,0.7)" : undefined,
            }}
          >
            {copy.hook}
          </div>
        </div>

        {/* Bottom half — bullets with cyan left-accent lines */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 24,
          }}
        >
          {/* Cyan divider */}
          <div
            style={{
              width: 56,
              height: 3,
              backgroundColor: "rgba(91,224,255,0.4)",
              borderRadius: 2,
            }}
          />

          {bullets.map((line, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                paddingLeft: 20,
                borderLeft: "3px solid rgba(91,224,255,0.35)",
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 26,
                  lineHeight: 1.4,
                  textShadow: image ? "0 1px 8px rgba(0,0,0,0.5)" : undefined,
                }}
              >
                {line}
              </span>
            </div>
          ))}

          {/* CTA pill */}
          <div
            style={{
              marginTop: 12,
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "16px 36px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700 }}>
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
          gradient="linear-gradient(to bottom, rgba(11,12,16,0.1) 0%, rgba(11,12,16,0.3) 25%, rgba(11,12,16,0.55) 50%, rgba(11,12,16,0.78) 70%, rgba(11,12,16,0.92) 100%)"
          objectPosition="center 30%"
        />
      )}
      <MfDotGrid opacity={image ? 0.03 : 0.06} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 64px 0",
          gap: 28,
        }}
      >
        <MfPillarBadge pillar={pillarName} />

        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.12,
            textAlign: "center",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          {copy.hook}
        </div>

        {/* Cyan divider */}
        <div
          style={{
            width: 72,
            height: 3,
            backgroundColor: "rgba(91,224,255,0.4)",
            borderRadius: 2,
            marginTop: -4,
          }}
        />

        {/* Glass bullet cards with cyan left-border */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
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
                padding: "20px 28px",
                backgroundColor: image ? "rgba(4,4,71,0.55)" : "rgba(4,4,71,0.55)",
                backdropFilter: image ? "blur(14px)" : undefined,
                borderRadius: 16,
                borderLeft: "5px solid #5BE0FF",
                borderTop: "1px solid rgba(91,224,255,0.08)",
                borderRight: "1px solid rgba(91,224,255,0.05)",
                borderBottom: "1px solid rgba(91,224,255,0.05)",
                boxShadow: image
                  ? "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 0 20px rgba(91,224,255,0.04)"
                  : "0 2px 12px rgba(0,0,0,0.2), inset 0 0 16px rgba(91,224,255,0.03)",
              }}
            >
              <span
                style={{
                  color: image ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)",
                  fontSize: 23,
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
          <span style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700, letterSpacing: "0.3px" }}>
            {copy.cta}
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
