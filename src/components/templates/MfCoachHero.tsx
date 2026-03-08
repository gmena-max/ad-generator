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
          display: "flex",
          position: "relative",
          backgroundColor: "#0B0C10",
        }}
      >
        {/* Photo left 60% */}
        <div style={{ width: "60%", height: "100%", position: "relative" }}>
          {image ? (
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#040447",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 24 }}>
                Foto de Jeaustin
              </span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, transparent 50%, #0B0C10 100%)",
            }}
          />
        </div>

        {/* Dark panel right 40% */}
        <div
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 40px",
            gap: 28,
            position: "relative",
          }}
        >
          <MfDotGrid opacity={0.04} />
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              position: "relative",
              zIndex: 1,
            }}
          >
            {copy.hook}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              position: "relative",
              zIndex: 1,
            }}
          >
            {copy.body}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              position: "relative",
              zIndex: 1,
            }}
          >
            {copy.stat && <MfCredentialBadge text={copy.stat} />}
            <MfCredentialBadge text="30+ años de experiencia" />
          </div>
        </div>

        {/* Logo top-right */}
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
              backgroundColor: "#040447",
            }}
          />
        )}

        {/* Heavy vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 20%, #0B0C10 75%)",
          }}
        />

        {/* Centered text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {copy.hook}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            {copy.body}
          </div>
        </div>

        {/* Large logo watermark center-bottom */}
        <img
          src={brand.logoWhite}
          alt=""
          style={{
            position: "absolute",
            bottom: 160,
            left: "50%",
            transform: "translateX(-50%)",
            height: 50,
            objectFit: "contain",
            opacity: 0.4,
          }}
        />

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
      {/* Full-bleed photo (top 65%) */}
      {image ? (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "65%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "65%",
            backgroundColor: "#040447",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 28 }}>
            Foto de Jeaustin
          </span>
        </div>
      )}

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
          background:
            "linear-gradient(to bottom, transparent 30%, #0B0C10 100%)",
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
        <MfDotGrid />
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
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}
        >
          {copy.hook}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
            maxWidth: 750,
          }}
        >
          {copy.body}
        </div>

        {/* Credential badges row */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          {copy.stat && <MfCredentialBadge text={copy.stat} />}
          <MfCredentialBadge text="30+ años" />
          <MfCredentialBadge text="Keylor · Celso · Jewison" />
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            padding: "16px 36px",
            borderRadius: 50,
            backgroundColor: "#2076FF",
            marginTop: 8,
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
