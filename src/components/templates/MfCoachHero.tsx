import { MfTemplateProps } from "./mf/types";
import { MfDotGrid } from "./mf/MfDotGrid";
import { MfBrandBar } from "./mf/MfBrandBar";
import { MfCredentialBadge } from "./mf/MfCredentialBadge";

export function MfCoachHero({
  brand,
  copy,
  image,
  variant = "a",
}: MfTemplateProps) {
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
        {/* Full-bleed photo — visible in top-right triangle */}
        {image ? (
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #040447 0%, #0B0C10 100%)",
            }}
          >
            <MfDotGrid opacity={0.08} />
            {/* Subtle radial cyan glow for no-image */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                right: "20%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(91,224,255,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          </div>
        )}

        {/* Steep diagonal gradient — darkens lower-left 55%+ */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top right, #0B0C10 55%, transparent 100%)",
          }}
        />

        {image && <MfDotGrid opacity={0.05} />}

        {/* Logo top-right (in bright photo zone) */}
        <img
          src={brand.logoWhite}
          alt=""
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            height: 36,
            objectFit: "contain",
            opacity: 0.8,
            zIndex: 2,
          }}
        />

        {/* Content — left-aligned in dark diagonal zone */}
        <div
          style={{
            position: "absolute",
            bottom: 140,
            left: 64,
            right: 64,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 1,
          }}
        >
          {/* Glass backdrop behind content */}
          <div
            style={{
              position: "absolute",
              top: -32,
              left: -32,
              right: 100,
              bottom: -32,
              borderRadius: 24,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(8px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.08,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {copy.hook}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: 650,
            }}
          >
            {copy.body}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {copy.stat && <MfCredentialBadge text={copy.stat} />}
            <MfCredentialBadge text="30+ años de experiencia" />
          </div>

          {/* CTA pill */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "16px 36px",
              borderRadius: 50,
              backgroundColor: "#2076FF",
              boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
              marginTop: 4,
            }}
          >
            <span style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
              {copy.cta}
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
        {/* Full photo with heavy vignette */}
        {image ? (
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #040447 0%, #0B0C10 100%)",
            }}
          >
            <MfDotGrid opacity={0.08} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(91,224,255,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          </div>
        )}

        {/* Heavy vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 15%, #0B0C10 70%)",
          }}
        />

        <MfDotGrid opacity={0.04} />

        {/* Centered text */}
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
            gap: 24,
          }}
        >
          {/* Glass backdrop behind centered content */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: 48,
              right: 48,
              bottom: 0,
              borderRadius: 24,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(8px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {copy.hook}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            {copy.body}
          </div>

          {/* Credential badges */}
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            {copy.stat && <MfCredentialBadge text={copy.stat} />}
            <MfCredentialBadge text="30+ años" />
          </div>

          {/* CTA text */}
          <span
            style={{
              color: "#5BE0FF",
              fontSize: 28,
              fontWeight: 700,
              marginTop: 8,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {copy.cta} →
          </span>
        </div>

        <MfBrandBar brand={brand} />
      </div>
    );
  }

  // Variant A (default): Full-bleed photo, bottom gradient, badges row
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#0B0C10",
      }}
    >
      {/* Full-bleed photo (entire card) */}
      {image ? (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #040447 0%, #0B0C10 100%)",
          }}
        >
          <MfDotGrid opacity={0.08} />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(91,224,255,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* Top vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40%",
          background:
            "linear-gradient(to bottom, rgba(11,12,16,0.6) 0%, transparent 100%)",
        }}
      />

      {/* Bottom gradient for text readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "65%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(11,12,16,0.85) 45%, #0B0C10 100%)",
        }}
      />

      {/* Dot grid on bottom area */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          height: "50%",
        }}
      >
        <MfDotGrid opacity={0.05} />
      </div>

      {/* Content bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 0,
          right: 0,
          padding: "0 64px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Glass backdrop behind text block */}
        <div
          style={{
            position: "absolute",
            top: -24,
            left: 40,
            right: 40,
            bottom: -24,
            borderRadius: 24,
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(8px)",
            zIndex: -1,
          }}
        />

        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.08,
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {copy.hook}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
            maxWidth: 750,
          }}
        >
          {copy.body}
        </div>

        {/* Credential badges row */}
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 4 }}>
          {copy.stat && <MfCredentialBadge text={copy.stat} />}
          <MfCredentialBadge text="30+ años" />
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            padding: "18px 44px",
            borderRadius: 50,
            backgroundColor: "#2076FF",
            boxShadow: "0 4px 20px rgba(32,118,255,0.35)",
            marginTop: 4,
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
            {copy.cta}
          </span>
        </div>
      </div>

      <MfBrandBar brand={brand} />
    </div>
  );
}
