export function MfCredentialBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "12px 28px",
        borderRadius: 50,
        border: "2.5px solid rgba(91,224,255,0.5)",
        backgroundColor: "rgba(4,4,71,0.65)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 0 30px rgba(91,224,255,0.25)",
      }}
    >
      <span
        style={{
          color: "#5BE0FF",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "0.3px",
        }}
      >
        {text}
      </span>
    </div>
  );
}
