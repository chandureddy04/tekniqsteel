import { Layout } from '@/components/layout/Layout';
import { SEOHead, getServiceSchema } from '@/components/seo/SEOHead';
import { CTASection } from '@/components/sections/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Box, Link as LinkIcon, FileText, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceCategories = [
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: 'Steel Detailing',
    description: 'Comprehensive fabrication and erection drawings with rigorous quality control',
  },
  {
    icon: <Box className="w-10 h-10 text-primary" />,
    title: '3D Modeling',
    description: 'Advanced BIM coordination with seamless file compatibility',
  },
  {
    icon: <LinkIcon className="w-10 h-10 text-primary" />,
    title: 'Connection Detailing',
    description: 'Connection detailing based on EOR and fabricator parameters',
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: 'Shop Drawings',
    description: 'Production-ready drawings with rigorous quality control',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Model Development',
    description: 'Create detailed 3D models from architectural drawings and specifications',
  },
  {
    step: 2,
    title: 'Connection Detailing',
    description: 'Prepare practical connection details per EOR criteria and fabricator standards',
  },
  {
    step: 3,
    title: 'Drawing Production',
    description: 'Generate comprehensive fabrication and erection drawings',
  },
  {
    step: 4,
    title: 'Quality Control',
    description: 'Multi-stage review and coordination checks',
  },
];

const ServicesPage = () => {
  const jsonLd = getServiceSchema(
    'Structural Steel Detailing Services',
    'Comprehensive steel detailing services including 3D modeling, BIM coordination, connection detailing, and shop drawing production using SDS/2.'
  );

  return (
    <Layout>
      <SEOHead
        title="Services Overview - Tekniq Steel | Comprehensive Steel Detailing Solutions"
        description="Explore Tekniq Steel's Structural & Miscellaneous Steel Detailing services including 3D modeling, BIM coordination, connection detailing, and shop drawing production using SDS/2."
        canonicalUrl="https://tekniqsteel.com/services"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="gradient-hero section-padding" aria-labelledby="services-hero">
        <div className="container-max">
          <header className="text-center max-w-4xl mx-auto">
            <h1 
              id="services-hero"
              className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6"
            >
              Structural Steel <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              From model development to fabrication drawings, our SDS/2-based workflow helps streamline
              coordination and deliver clear, constructible details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-foreground">
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#service-details">
                  Compare Services
                </a>
              </Button>
            </div>
          </header>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-card" aria-labelledby="categories-heading">
        <div className="container-max">
          <header className="text-center mb-16">
            <h2 
              id="categories-heading"
              className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4"
            >
              Our Service Categories
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Specialized expertise in Structural & Miscellaneous Steel Detailing, 3D modeling, and coordination
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((service, index) => (
              <article key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Structural Steel Detailing Section */}
      <section id="service-details" className="section-padding bg-surface" aria-labelledby="detailing-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Core Service
                </span>
                <h2 
                  id="detailing-heading"
                  className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6"
                >
                  Structural & Miscellaneous Steel Detailing
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Our detailing services transform architectural and structural intent into clear,
                  constructible deliverables. Using SDS/2, we produce coordinated fabrication and erection
                  drawings with a focus on buildability.
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-4">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Callout */}
              <div className="bg-primary-50 border-l-4 border-accent p-6 rounded-r-lg">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-accent mr-2" aria-hidden="true" />
                  <h4 className="font-semibold text-primary">SDS/2 Technology Integration</h4>
                </div>
                <p className="text-secondary-600">
                  Our SDS/2 expertise streamlines coordination and delivery. Automated clash checks and
                  material information support efficient fabrication.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-card rounded-xl shadow-custom-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
                  alt="Structural steel detailing work in progress"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Modeling Section */}
      <section className="section-padding bg-card" aria-labelledby="modeling-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-surface rounded-xl shadow-custom-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop"
                  alt="3D BIM modeling and coordination"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Advanced Technology
                </span>
                <h2 
                  id="modeling-heading"
                  className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6"
                >
                  3D Modeling & BIM Coordination
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Our advanced 3D modeling services ensure seamless integration with architectural and MEP systems.
                  We utilize SDS/2 for accurate model development and coordination.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Accurate 3D model development from design documents',
                  'Clash detection and coordination with other trades',
                  'IFC/DWG export for BIM integration',
                  'Material takeoffs and quantity reporting',
                  'Visualization and project communication',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-secondary-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
