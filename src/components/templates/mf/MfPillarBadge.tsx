const PILLAR_ICONS: Record<string, string> = {
  "Técnica": "⚽",
  "Táctica": "📋",
  "Físico": "💪",
  "Sicológico": "🧠",
};

export function MfPillarBadge({ pillar }: { pillar: string }) {
  const icon = PILLAR_ICONS[pillar] || "◆";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 20px",
        borderRadius: 50,
        border: "1.5px solid rgba(91,224,255,0.3)",
        backgroundColor: "rgba(4,4,71,0.4)",
      }}
    >
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span
        style={{
          color: "#5BE0FF",
          fontSize: 18,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {pillar}
      </span>
    </div>
  );
}
