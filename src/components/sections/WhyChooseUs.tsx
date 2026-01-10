import { Users, Clock, Shield, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    title: '15+ Years Experience',
    description: 'Our senior team brings decades of combined expertise in structural steel detailing.',
  },
  {
    icon: <Clock className="w-8 h-8" aria-hidden="true" />,
    title: 'Fast Turnaround',
    description: 'We typically respond within 1 business day and maintain efficient project timelines.',
  },
  {
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    title: 'AISC Standards',
    description: 'All work is performed with familiarity of AISC standards and best practices.',
  },
  {
    icon: <Zap className="w-8 h-8" aria-hidden="true" />,
    title: 'SDS/2 Technology',
    description: 'Cutting-edge software for 3D modeling, clash detection, and automated drawing production.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card" aria-labelledby="why-choose-heading">
      <div className="container-max">
        <header className="text-center mb-16">
          <h2 
            id="why-choose-heading"
            className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4"
          >
            Why Choose Tekniq Steel
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We combine industry expertise with modern technology to deliver exceptional steel detailing services.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <article 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-secondary-600">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
