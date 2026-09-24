import type { ServiceIconKey } from "@/lib/site-data";

const paths: Record<ServiceIconKey, React.ReactNode> = {
  book: (
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17ZM4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  ),
  exchange: (
    <>
      <path d="M4 7h13l-3-3M20 17H7l3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 8.5a3 3 0 1 1 3.5 2.96M21.5 20a5.5 5.5 0 0 0-4-5.3" />
    </>
  ),
  "file-text": (
    <>
      <path d="M6 2h9l5 5v15H6V2Z" />
      <path d="M14 2v5h5M9 13h6M9 17h6" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 2h12v20l-2.5-1.5L13 22l-2.5-1.5L8 22l-2-1.5V2Z" />
      <path d="M9 7h6M9 11h6" />
    </>
  ),
  "file-check": (
    <>
      <path d="M6 2h9l5 5v15H6V2Z" />
      <path d="M14 2v5h5M9.5 14.5 11 16l3.5-3.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 21h5v-9a1 1 0 0 0-1-1h-4" />
      <path d="M8 7h1M8 11h1M8 15h1M12 7h1M12 11h1M12 15h1" />
    </>
  ),
  "trending-up": (
    <>
      <path d="M3 17 9.5 10.5 14 15 21 7" />
      <path d="M15 7h6v6" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2.5l2.5 12.5h11L21 7H6" />
    </>
  ),
};

export default function ServiceIcon({ icon, className = "" }: { icon: ServiceIconKey; className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
