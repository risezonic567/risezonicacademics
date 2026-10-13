import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export function generateMetadataHelper({
  title,
  description = siteConfig.tagline,
  path = "",
  image = images.og.src,
}) {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Advanced Digital Marketing Academy`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.socials),
  };
}
