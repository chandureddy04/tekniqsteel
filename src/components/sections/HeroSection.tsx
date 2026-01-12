import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureBadge } from '@/components/ui/FeatureBadge';
import { StatBadge } from '@/components/ui/StatBadge';
import heroImage from '@/assets/hero-steel-fabrication.jpg';

export const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden" aria-labelledby="hero-heading">
      {/* Decorative Forge Orbs */}
      <div className="forge-orb w-96 h-96 -top-48 -right-48" />
      <div className="forge-orb w-64 h-64 bottom-20 -left-32" />
      
      <div className="container-max py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-4xl lg:text-6xl font-heading font-bold text-primary leading-tight"
              >
                Precision You Can{' '}
                <span className="text-gradient">Build On</span>
              </h1>
              <p className="text-lg text-secondary-600 max-w-xl">
                Transform complex architectural visions into precise, constructible steel structures using
                cutting-edge SDS/2 technology and 15+ years of industry expertise.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              <FeatureBadge text="Clear shop & erection drawings" />
              <FeatureBadge text="SDS/2-based 3D modeling" />
              <FeatureBadge text="Familiar with AISC standards" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gradient">
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-custom-lg overflow-hidden glow-border">
              <img
                src={heroImage}
                alt="Steel fabrication workshop with welding sparks and industrial machinery"
                className="w-full h-auto object-cover aspect-video"
                loading="eager"
              />
            </div>
            <StatBadge value="25+ Projects" label="" variant="accent" position="top-right" />
            <StatBadge value="15+ Years" label="" variant="success" position="bottom-left" />
          </div>
        </div>
      </div>
    </section>
  );
};
