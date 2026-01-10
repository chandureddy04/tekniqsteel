import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="Page Not Found - Tekniq Steel"
        description="The page you're looking for doesn't exist. Return to Tekniq Steel homepage for structural steel detailing services."
      />
      <section className="section-padding bg-surface min-h-[60vh] flex items-center">
        <div className="container-max text-center">
          <h1 className="text-8xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold text-secondary-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-secondary-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-foreground">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
