export function MfPillarBadge({ pillar }: { pillar: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 24px",
        borderRadius: 50,
        border: "2.5px solid rgba(91,224,255,0.4)",
        backgroundColor: "rgba(4,4,71,0.5)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 0 20px rgba(91,224,255,0.15)",
      }}
    >
      <span
        style={{
          color: "#5BE0FF",
          fontSize: 16,
          lineHeight: 1,
        }}
      >
        ◆
      </span>
      <span
        style={{
          color: "#5BE0FF",
          fontSize: 22,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        {pillar}
      </span>
    </div>
  );
}
