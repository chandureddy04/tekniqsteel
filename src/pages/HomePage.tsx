import { Layout } from '@/components/layout/Layout';
import { SEOHead, getOrganizationSchema } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CTASection } from '@/components/sections/CTASection';

const HomePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      {
        '@type': 'WebPage',
        '@id': 'https://tekniqsteel.com/',
        url: 'https://tekniqsteel.com/',
        name: 'Tekniq Steel – Structural & Miscellaneous Steel Detailing Services',
        description: 'Tekniq Steel provides Structural & Miscellaneous Steel Detailing, 3D modeling, and BIM coordination for fabricators and contractors, backed by 15+ years of experience.',
        isPartOf: { '@id': 'https://tekniqsteel.com/#website' },
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Tekniq Steel – Structural & Miscellaneous Steel Detailing Services"
        description="Tekniq Steel provides Structural & Miscellaneous Steel Detailing, 3D modeling, and BIM coordination for fabricators and contractors, backed by 15+ years of experience."
        canonicalUrl="https://tekniqsteel.com/"
        jsonLd={jsonLd}
      />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
