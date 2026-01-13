import { Layout } from '@/components/layout/Layout';
import { SEOHead, getOrganizationSchema } from '@/components/seo/SEOHead';
import { CTASection } from '@/components/sections/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, CheckCircle, Target, Lightbulb, Handshake, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureBadge } from '@/components/ui/FeatureBadge';
import aboutHeroImage from '@/assets/about-hero-steel-team.jpg';
const coreValues = [
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: 'Precision',
    description: 'Every detail matters. We deliver accurate, constructible drawings that minimize RFIs and field issues.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: 'Innovation',
    description: 'We leverage SDS/2 and modern workflows to deliver efficient, technology-driven solutions.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: 'Collaboration',
    description: 'We work closely with fabricators, contractors, and engineers to ensure project success.',
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Quality',
    description: 'Multi-stage review processes ensure every deliverable meets the highest standards.',
  },
];

const AboutPage = () => {
  const jsonLd = getOrganizationSchema();

  return (
    <Layout>
      <SEOHead
        title="About Us - Tekniq Steel | Expert Team & Company Story"
        description="Learn about Tekniq Steel — newly founded in 2025 with 15+ years of team experience in Structural & Miscellaneous Steel Detailing, 3D modeling (SDS/2), and BIM coordination."
        canonicalUrl="https://tekniqsteel.com/about"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden" aria-labelledby="about-hero">
        <div className="container-max py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 
                  id="about-hero"
                  className="text-4xl lg:text-6xl font-heading font-bold text-primary leading-tight"
                >
                  Senior Team <span className="text-gradient">Focused on Detailing</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-xl">
                  Newly founded in 2025 and backed by 15+ years of Structural & Miscellaneous Steel Detailing
                  experience. We use SDS/2 for 3D modeling and collaborate remotely with fabricators and contractors.
                </p>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-4">
                <FeatureBadge text="Senior team" />
                <FeatureBadge text="15+ Years Experience" />
                <FeatureBadge text="Familiar with AISC standards" />
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-foreground">
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-custom-lg overflow-hidden glow-border">
                <img
                  src={aboutHeroImage}
                  alt="Tekniq Steel team working on 3D CAD structural steel drawings and SDS/2 modeling"
                  className="w-full h-auto object-cover aspect-video"
                  loading="eager"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg z-10">
                <p className="text-sm font-bold">Founded 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-surface" aria-labelledby="story-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 
                  id="story-heading"
                  className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6"
                >
                  Our Story
                </h2>
                <div className="space-y-6 text-secondary-600">
                  <p className="text-lg">
                    Founded in 2025, Tekniq Steel was created with a clear vision — to bridge the gap
                    between traditional steel detailing and the modern demands of construction. We saw the
                    need for precision-driven, technology-enabled structural steel solutions that combine
                    engineering expertise with the power of advanced software.
                  </p>
                  <p className="text-lg">
                    What began as a team of passionate engineers is built on a commitment to delivering
                    exceptional accuracy, innovative problem-solving, and reliable project execution. While
                    we embrace cutting-edge tools like SDS/2, we also value the proven methodologies that
                    ensure structural integrity and lasting quality.
                  </p>
                  <p className="text-lg">
                    At Tekniq Steel, we aim to be more than just a service provider — we're your partner in
                    bringing complex structural designs to life with efficiency, collaboration, and
                    unmatched precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-card rounded-xl p-8 shadow-custom space-y-8">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Core Values</h3>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                      <p className="text-secondary-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-card" aria-labelledby="expertise-heading">
        <div className="container-max">
          <header className="text-center mb-16">
            <h2 
              id="expertise-heading"
              className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4"
            >
              Our Expertise
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We bring specialized knowledge across various project types and steel detailing disciplines.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Commercial Buildings',
              'Industrial Facilities',
              'Manufacturing Plants',
              'Healthcare Facilities',
              'Educational Buildings',
              'Mixed-Use Developments',
            ].map((expertise, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-surface rounded-lg border border-border/50"
              >
                <CheckCircle className="w-6 h-6 text-success mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium text-primary">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutPage;
