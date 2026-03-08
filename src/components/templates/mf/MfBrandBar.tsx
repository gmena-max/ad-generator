import { ClientBrand } from "@/data/clients";

export function MfBrandBar({ brand }: { brand: ClientBrand }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
      }}
    >
      <img
        src={brand.logoWhite}
        alt={brand.name}
        style={{ height: 40, objectFit: "contain" }}
      />
      <span
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}
      >
        {brand.phone}
      </span>
    </div>
  );
}
