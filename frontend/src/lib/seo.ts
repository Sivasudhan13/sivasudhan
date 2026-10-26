import { profileData } from '../data/profile';
import type { ProjectItem } from '../types/project';

export const SITE_URL = 'https://sivasudhan.dev';

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": profileData.fullName,
    "givenName": profileData.preferredName,
    "jobTitle": profileData.headline,
    "description": profileData.heroTagline,
    "url": SITE_URL,
    "email": `mailto:${profileData.socials.email}`,
    "telephone": profileData.socials.phone,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": profileData.education.institution,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "sameAs": [
      profileData.socials.linkedin,
      profileData.socials.github
    ]
  };
}

export function getProjectJsonLd(project: ProjectItem) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.shortSummary,
    "applicationCategory": project.category,
    "operatingSystem": "Web, Cross-platform",
    "author": {
      "@type": "Person",
      "name": profileData.fullName,
      "url": SITE_URL
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": `${SITE_URL}/project/${project.id}`
  };
}
