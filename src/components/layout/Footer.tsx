import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size="lg" />
              <div className="ml-3">
                <span className="text-xl font-heading font-bold">TEKNIQ STEEL</span>
                <p className="text-xs text-primary-foreground/70">Structural Excellence</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Precision Structural & Miscellaneous Steel Detailing services backed by 15+ years of industry experience.
              We transform complex architectural visions into constructible steel structures using SDS/2 technology.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sales@tekniqsteel.com"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail className="w-5 h-5 mr-3" aria-hidden="true" />
                sales@tekniqsteel.com
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Phone className="w-5 h-5 mr-3" aria-hidden="true" />
                +91-XXXXXXXXXX
              </a>
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="w-5 h-5 mr-3" aria-hidden="true" />
                Remote Services Worldwide
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#detailing" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Steel Detailing
                </Link>
              </li>
              <li>
                <Link to="/services#modeling" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  3D Modeling & BIM
                </Link>
              </li>
              <li>
                <Link to="/services#connections" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Connection Detailing
                </Link>
              </li>
              <li>
                <Link to="/services#drawings" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Shop Drawings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Tekniq Steel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/70 text-sm hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 text-sm hover:text-accent transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
