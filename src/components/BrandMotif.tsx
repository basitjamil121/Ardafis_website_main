type BrandMotifProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function BrandMotif({ variant = "dark", className = "" }: BrandMotifProps) {
  const colors =
    variant === "dark"
      ? ["#1E3A2E", "#5E7A68", "#9AAD9C"]
      : ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
  const opacities = variant === "dark" ? [0.06, 0.05, 0.04] : [0.14, 0.1, 0.07];

  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M580 40 L200 260 L340 260 L580 130 Z" fill={colors[0]} opacity={opacities[0]} />
      <path d="M580 220 L120 420 L280 420 L580 250 Z" fill={colors[1]} opacity={opacities[1]} />
      <path d="M580 370 L200 540 L340 540 L580 390 Z" fill={colors[2]} opacity={opacities[2]} />
    </svg>
  );
}
