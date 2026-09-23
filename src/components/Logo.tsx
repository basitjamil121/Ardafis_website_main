type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const primary = isLight ? "#FFFFFF" : "#1E3A2E";
  const mid = isLight ? "#FFFFFFBF" : "#5E7A68";
  const soft = isLight ? "#FFFFFF73" : "#9AAD9C";
  const wordmarkColor = isLight ? "text-white" : "text-deep-green";
  const partnersColor = isLight ? "text-white/85" : "text-sage";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="30"
        height="37"
        viewBox="0 0 90 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M85 5 L20 55 L45 55 L85 25 Z" fill={primary} />
        <path d="M85 45 L15 75 L40 75 L85 50 Z" fill={mid} />
        <path d="M85 68 L20 100 L45 100 L85 73 Z" fill={soft} />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-wide ${wordmarkColor}`}>
          ARDAFIS
        </span>
        <span className={`text-[10px] font-medium tracking-[0.3em] ${partnersColor}`}>
          PARTNERS
        </span>
      </div>
    </div>
  );
}
