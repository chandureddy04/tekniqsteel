import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object;
}

export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://tekniqsteel.com/og-image.jpg',
  ogType = 'website',
  jsonLd,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('robots', 'index, follow');

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    if (canonicalUrl) {
      updateMeta('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);

  return null;
};

// Organization JSON-LD schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tekniq Steel',
  description: 'Structural & Miscellaneous Steel Detailing Services',
  url: 'https://tekniqsteel.com',
  logo: 'https://tekniqsteel.com/logo.png',
  foundingDate: '2025',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@tekniqsteel.com',
    contactType: 'sales',
  },
  sameAs: [],
});

// Service JSON-LD schema
export const getServiceSchema = (serviceName: string, serviceDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'Organization',
    name: 'Tekniq Steel',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
});

// FAQ JSON-LD schema
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
