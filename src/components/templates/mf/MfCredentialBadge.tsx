export function MfCredentialBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 24px",
        borderRadius: 50,
        border: "1.5px solid rgba(91,224,255,0.4)",
        backgroundColor: "rgba(4,4,71,0.6)",
        boxShadow: "0 0 20px rgba(91,224,255,0.15)",
      }}
    >
      <span
        style={{
          color: "#5BE0FF",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "0.3px",
        }}
      >
        {text}
      </span>
    </div>
  );
}
