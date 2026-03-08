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
        <MfDotGrid opacity={0.02} />

        {/* Vertical cyan accent line left edge */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 100,
            bottom: 250,
            width: 4,
            backgroundColor: "#5BE0FF",
            borderRadius: 2,
            opacity: 0.6,
          }}
        />

        {/* Quote left-aligned */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 80,
            right: 80,
            bottom: 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.25,
              fontStyle: "italic",
            }}
          >
            &ldquo;{copy.body}&rdquo;
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 2,
                backgroundColor: "#5BE0FF",
                borderRadius: 1,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              {attribution}
            </span>
          </div>
        </div>

        {/* Circular Jeaustin headshot bottom-right */}
        {image && (
          <div
            style={{
              position: "absolute",
              bottom: 160,
              right: 64,
              width: 140,
              height: 140,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(91,224,255,0.3)",
              boxShadow: "0 0 30px rgba(91,224,255,0.15)",
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
        <MfDotGrid opacity={0.015} />

        {/* Deep navy card centered (card-in-card) */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 56,
            right: 56,
            bottom: 240,
            backgroundColor: "#040447",
            borderRadius: 32,
            border: "1px solid rgba(91,224,255,0.15)",
            boxShadow: "0 0 60px rgba(91,224,255,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "56px 64px",
            gap: 28,
            textAlign: "center",
          }}
        >
          {/* Cyan quote mark inside card */}
          <span
            style={{
              fontSize: 100,
              color: "#5BE0FF",
              opacity: 0.2,
              lineHeight: 0.6,
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </span>

          <div
            style={{
              fontSize: 46,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.25,
              fontStyle: "italic",
            }}
          >
            {copy.body}
          </div>
        </div>

        {/* Attribution outside card below */}
        <div
          style={{
            position: "absolute",
            bottom: 160,
            left: 0,
            right: 0,
            textAlign: "center",
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
                width: 32,
                height: 2,
                backgroundColor: "#5BE0FF",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              {attribution}
            </span>
            <div
              style={{
                width: 32,
                height: 2,
                backgroundColor: "#5BE0FF",
                opacity: 0.5,
              }}
            />
          </div>
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): Large cyan quote mark, centered quote, attribution below, horizontal logo bottom
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

      {/* Large cyan quotation mark top-left */}
      <span
        style={{
          position: "absolute",
          top: 80,
          left: 64,
          fontSize: 300,
          color: "#5BE0FF",
          opacity: 0.12,
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
          padding: "0 80px",
          gap: 40,
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.25,
            fontStyle: "italic",
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
            gap: 8,
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              backgroundColor: "#5BE0FF",
              borderRadius: 1,
              marginBottom: 8,
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {attribution}
          </span>
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            8x Campeón Nacional
          </span>
        </div>
      </div>

      {/* Horizontal logo bottom */}
      <img
        src={brand.logoWhite}
        alt=""
        style={{
          position: "absolute",
          bottom: 140,
          left: "50%",
          transform: "translateX(-50%)",
          height: 36,
          objectFit: "contain",
          opacity: 0.4,
        }}
      />

      <MfBrandBar brand={brand} />
    </div>
  );
}
