import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureBadge } from '@/components/ui/FeatureBadge';
import { StatBadge } from '@/components/ui/StatBadge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import detailingImage from '@/assets/detailing image.jpeg';
import fabricationImage from '@/assets/fabrication image.jpeg';

const heroCarouselImages = [
  { src: fabricationImage, alt: 'Steel fabrication workshop with welding sparks and industrial machinery' },
  { src: detailingImage, alt: 'Tekniq Steel structural steel detailing 3D CAD drawings' },
];

export const HeroSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

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

          {/* Hero Image Carousel */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-custom-lg overflow-hidden glow-border">
              <Carousel
                opts={{ loop: true }}
                plugins={[autoplayPlugin.current]}
                className="w-full"
              >
                <CarouselContent className="-ml-0">
                  {heroCarouselImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover aspect-video"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <StatBadge value="25+ Projects" label="" variant="accent" position="top-right" />
            <StatBadge value="15+ Years" label="" variant="success" position="bottom-left" />
          </div>
        </div>
      </div>
    </section>
  );
};
