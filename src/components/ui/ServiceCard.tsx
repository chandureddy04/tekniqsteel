import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export const ServiceCard = ({ icon, title, description, href = '/services' }: ServiceCardProps) => {
  return (
    <article className="card group hover:shadow-custom-lg transition-all duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-bold text-primary mb-4">{title}</h3>
        <p className="text-secondary-600 mb-6">{description}</p>
        <Link
          to={href}
          className="inline-flex items-center text-accent font-semibold hover:text-accent-600 transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};
