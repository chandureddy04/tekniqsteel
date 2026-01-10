import { Package, Box, Link as LinkIcon } from 'lucide-react';
import { ServiceCard } from '@/components/ui/ServiceCard';

const services = [
  {
    icon: <Package className="w-8 h-8 text-primary" />,
    title: 'Structural & Miscellaneous Steel Detailing',
    description: 'Comprehensive detailing services using SDS/2 software for coordinated models, clear shop drawings, and constructible erection plans.',
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: '3D Modeling & BIM',
    description: 'Advanced 3D modeling and BIM coordination services ensuring seamless integration with architectural and MEP systems.',
  },
  {
    icon: <LinkIcon className="w-8 h-8 text-primary" />,
    title: 'Connection Detailing',
    description: 'Practical connection detailing based on design parameters from the engineer of record and fabricator standards; clear connection sketches and details for fabrication.',
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-surface" aria-labelledby="services-heading">
      <div className="container-max">
        <header className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4"
          >
            Comprehensive Steel Solutions
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            From initial concept to final fabrication drawings, we deliver precision-engineered solutions that
            streamline your construction process.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
