export function MfDotGrid({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,${opacity}) 1.5px, transparent 1.5px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }}
    />
  );
}
