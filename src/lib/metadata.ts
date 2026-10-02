import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ardafispartners.com";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

// Every page should call this instead of hand-writing its own metadata object,
// so OG/Twitter tags are always page-specific instead of silently inheriting
// the root layout's generic "Ardafis Partners" title/description.
export function pageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
