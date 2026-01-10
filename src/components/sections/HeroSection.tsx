import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureBadge } from '@/components/ui/FeatureBadge';
import { StatBadge } from '@/components/ui/StatBadge';

export const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden" aria-labelledby="hero-heading">
      <div className="container-max py-16 lg:py-24">
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
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-foreground">
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-custom-lg p-8 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
                  alt="3D steel structure model showcasing precision structural detailing"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">Interactive 3D Model</p>
                    <p className="text-xs opacity-90">Click to explore</p>
                  </div>
                </div>
              </div>
              <StatBadge value="25+ Projects" label="" variant="accent" position="top-right" />
              <StatBadge value="15+ Years" label="" variant="success" position="bottom-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
