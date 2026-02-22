import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="bg-primary text-primary-foreground section-padding" aria-labelledby="cta-heading">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl lg:text-4xl font-heading font-bold mb-6"
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Share your project details and drawings. We typically respond within 1 business day with a detailed quote.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-600 text-accent-foreground"
            >
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-primary-foreground/80">
            <a
              href="mailto:sales@tekniqsteel.com"
              className="flex items-center justify-center hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              sales@tekniqsteel.com
            </a>
            <a
              href="tel:813-544-1047"
              className="flex items-center justify-center hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              813-544-1047
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
