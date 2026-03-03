import { ClientBrand } from "@/data/clients";
import { Phone } from "lucide-react";

export function BrandBar({
  brand,
  variant = "dark",
}: {
  brand: ClientBrand;
  variant?: "dark" | "light";
}) {
  const bg = variant === "dark" ? brand.colors.primary : brand.colors.background;
  const text = variant === "dark" ? "#FFFFFF" : brand.colors.primary;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
      }}
    >
      <img
        src={variant === "dark" ? brand.logoWhite : brand.logo}
        alt={brand.name}
        style={{ height: 50, objectFit: "contain" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Phone size={24} color={text} />
        <span style={{ color: text, fontSize: 28, fontWeight: 600 }}>
          {brand.phone}
        </span>
      </div>
    </div>
  );
}
