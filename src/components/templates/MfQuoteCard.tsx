import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";

export function MfQuoteCard({
  brand,
  copy,
  image,
  variant = "a",
}: MfTemplateProps) {
  const attribution = copy.hook || "Jeaustin Campos";

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
          <>
            <img
              src={image}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.3,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(11,12,16,0.85) 0%, rgba(11,12,16,0.5) 100%)",
              }}
            />
          </>
        )}
        <MfDotGrid opacity={0.04} />

        {/* Vertical cyan accent line left edge — stronger glow */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 80,
            bottom: 200,
            width: 5,
            backgroundColor: "#5BE0FF",
            borderRadius: 3,
            opacity: 0.9,
            boxShadow: "0 0 30px rgba(91,224,255,0.5), 0 0 60px rgba(91,224,255,0.2)",
          }}
        />

        {/* Quote left-aligned — reduced dead space */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 80,
            right: 80,
            bottom: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 36,
          }}
        >
          {/* Glass backdrop behind quote */}
          <div
            style={{
              position: "absolute",
              top: -16,
              left: -24,
              right: -24,
              bottom: -16,
              borderRadius: 24,
              backgroundColor: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              fontStyle: "italic",
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}
          >
            &ldquo;{copy.body}&rdquo;
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 3,
                  backgroundColor: "#5BE0FF",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 34,
                  fontWeight: 700,
                }}
              >
                {attribution}
              </span>
            </div>
            <span
              style={{
                color: "#5BE0FF",
                fontSize: 24,
                fontWeight: 600,
                marginLeft: 60,
              }}
            >
              7x Campeón Nacional
            </span>

            {/* Cyan text CTA */}
            <span
              style={{
                color: "#5BE0FF",
                fontSize: 24,
                fontWeight: 700,
                marginLeft: 60,
                marginTop: 8,
              }}
            >
              {copy.cta} →
            </span>
          </div>
        </div>

        {/* Circular Jeaustin headshot bottom-right — glass ring */}
        {image && (
          <div
            style={{
              position: "absolute",
              bottom: 140,
              right: 64,
              width: 180,
              height: 180,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(91,224,255,0.5)",
              boxShadow: "0 0 40px rgba(91,224,255,0.25), inset 0 0 20px rgba(91,224,255,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* Profile-pic logo top-left */}
        <img
          src="/clients/mf/profile-pic.png"
          alt=""
          style={{
            position: "absolute",
            top: 40,
            left: 48,
            height: 44,
            objectFit: "contain",
            opacity: 0.7,
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
        }}
      >
        {image && (
          <>
            <img
              src={image}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.25,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, rgba(11,12,16,0.3) 0%, rgba(11,12,16,0.9) 100%)",
              }}
            />
          </>
        )}
        <MfDotGrid opacity={0.03} />

        {/* Deep navy card centered (card-in-card) — reduced top, stronger glow */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 56,
            right: 56,
            bottom: 280,
            backgroundColor: "rgba(4,4,71,0.15)",
            borderRadius: 28,
            border: "2px solid rgba(91,224,255,0.35)",
            boxShadow: "0 0 40px rgba(91,224,255,0.15), inset 0 0 30px rgba(91,224,255,0.05)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "56px 64px",
            gap: 24,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              fontStyle: "italic",
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}
          >
            &ldquo;{copy.body}&rdquo;
          </div>
        </div>

        {/* Attribution outside card below */}
        <div
          style={{
            position: "absolute",
            bottom: 140,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 3,
                backgroundColor: "#5BE0FF",
                opacity: 0.6,
                borderRadius: 2,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              {attribution}
            </span>
            <div
              style={{
                width: 40,
                height: 3,
                backgroundColor: "#5BE0FF",
                opacity: 0.6,
                borderRadius: 2,
              }}
            />
          </div>
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            7x Campeón Nacional
          </span>

          {/* Small pill CTA */}
          <div
            style={{
              marginTop: 8,
              padding: "12px 28px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 16px rgba(32,118,255,0.35)",
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

  // Variant A (default): Centered quote, strong attribution, horizontal logo bottom
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#0B0C10",
      }}
    >
      {/* Background image */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(11,12,16,0.4) 0%, rgba(11,12,16,0.85) 100%)",
            }}
          />
        </>
      )}
      <MfDotGrid opacity={0.05} />

      {/* Small accent quote mark */}
      <span
        style={{
          position: "absolute",
          top: 160,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 80,
          color: "#5BE0FF",
          opacity: 0.2,
          lineHeight: 0.6,
          fontFamily: "Georgia, serif",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </span>

      {/* Centered quote */}
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
        {/* Glass backdrop behind quote area */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: 48,
            right: 48,
            bottom: 0,
            borderRadius: 24,
            backgroundColor: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(8px)",
            zIndex: -1,
          }}
        />

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            fontStyle: "italic",
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}
        >
          &ldquo;{copy.body}&rdquo;
        </div>

        {/* Attribution + credential */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 72,
              height: 3,
              backgroundColor: "#5BE0FF",
              borderRadius: 2,
              marginBottom: 6,
              opacity: 0.5,
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            {attribution}
          </span>
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            7x Campeón Nacional
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
