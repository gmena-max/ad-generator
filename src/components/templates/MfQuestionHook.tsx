import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfPillarBadge } from "./mf/MfPillarBadge";
import { MfPhotoBackground } from "./mf/MfPhotoBackground";

export function MfQuestionHook({
  brand,
  copy,
  image,
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
        {image && (
          <MfPhotoBackground
            image={image}
            gradient="linear-gradient(to bottom, rgba(11,12,16,0.15) 0%, rgba(11,12,16,0.4) 35%, rgba(11,12,16,0.88) 60%, rgba(11,12,16,0.98) 80%)"
          />
        )}
        <MfDotGrid opacity={0.02} />

        {/* Pillar badge top-right */}
        {pillarName && (
          <div style={{ position: "absolute", top: 48, right: 48 }}>
            <MfPillarBadge pillar={pillarName} />
          </div>
        )}

        {/* Content in lower portion — stadium breathes above */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "40%",
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 24,
          }}
        >
          {/* Question — the scroll-stopper */}
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            {copy.hook}
          </div>

          {/* Credential pill */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 50,
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(91,224,255,0.2)",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, fontWeight: 600 }}>
              JEAUSTIN CAMPOS
            </span>
            <span style={{ color: "#5BE0FF", fontSize: 18, fontWeight: 600 }}>
              8x Campeón
            </span>
          </div>

          {/* Answer tease — glass card */}
          {copy.body && (
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(16px)",
                borderRadius: 16,
                borderTop: "3px solid #5BE0FF",
                padding: "32px 40px",
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.45,
                }}
              >
                {copy.body}
              </div>

              <div
                style={{
                  marginTop: 20,
                  fontSize: 22,
                  color: "#5BE0FF",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {copy.cta} →
              </div>
            </div>
          )}
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
          overflow: "hidden",
        }}
      >
        {image ? (
          <MfPhotoBackground
            image={image}
            gradient="linear-gradient(to bottom, rgba(11,12,16,0.1) 0%, rgba(11,12,16,0.35) 30%, rgba(11,12,16,0.85) 55%, rgba(11,12,16,0.98) 75%)"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, #040447 0%, #0B0C10 100%)",
            }}
          />
        )}

        <MfDotGrid opacity={0.02} />

        {/* Subtle cyan top-edge glow — picks up stadium lights */}
        {image && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 300,
              background: "linear-gradient(to bottom, rgba(91,224,255,0.05) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Glow halo behind text */}
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,224,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Content in lower portion — stadium breathes above */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "38%",
            bottom: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 72px",
            gap: 32,
          }}
        >
          {/* Question — bold and centered */}
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              textShadow: image
                ? "0 2px 16px rgba(0,0,0,0.6)"
                : "0 0 40px rgba(91,224,255,0.15)",
            }}
          >
            {copy.hook}
          </div>

          {/* Credential pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 50,
              backgroundColor: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(91,224,255,0.2)",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, fontWeight: 600 }}>
              JEAUSTIN CAMPOS
            </span>
            <span style={{ color: "#5BE0FF", fontSize: 18, fontWeight: 600 }}>
              8x Campeón
            </span>
          </div>

          {/* Pillar badge */}
          {pillarName && <MfPillarBadge pillar={pillarName} />}
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): "?" watermark, question centered in lower half, glass card, CTA pill
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
          gradient="linear-gradient(to bottom, rgba(11,12,16,0.1) 0%, rgba(11,12,16,0.25) 30%, rgba(11,12,16,0.55) 50%, rgba(11,12,16,0.7) 65%, rgba(11,12,16,0.8) 85%, rgba(11,12,16,0.95) 100%)"
          objectPosition="center 30%"
        />
      )}
      <MfDotGrid opacity={image ? 0.015 : 0.03} />

      {/* Content in lower portion — stadium breathes above */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "30%",
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          padding: "0 64px",
          paddingBottom: 48,
          gap: 32,
        }}
      >
        {/* Hook — the scroll-stopper */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          {copy.hook}
        </div>

        {/* Answer tease */}
        {copy.body && (
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.45,
              maxWidth: 700,
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            {copy.body}
          </div>
        )}

        {/* CTA pill */}
        <div
          style={{
            marginTop: 8,
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
