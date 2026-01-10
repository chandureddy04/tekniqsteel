import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const PrivacyPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy - Tekniq Steel | How We Handle Your Data"
        description="Tekniq Steel privacy policy: what we collect, how we use it, data sharing, retention, security, cookies, and your rights. Contact sales@tekniqsteel.com."
        canonicalUrl="https://tekniqsteel.com/privacy"
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16" aria-labelledby="privacy-hero">
        <div className="container-max">
          <header className="text-center max-w-4xl mx-auto">
            <h1 
              id="privacy-hero"
              className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            >
              Privacy Policy
            </h1>
            <p className="text-xl text-secondary-600">
              Last updated: January 2025
            </p>
          </header>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="card space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-secondary-600 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information (company name, role/title)</li>
                  <li>Project details (project type, location, specifications)</li>
                  <li>Communications you send to us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-secondary-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Respond to your inquiries and provide quotes</li>
                  <li>Communicate with you about our services</li>
                  <li>Fulfill project requirements and deliverables</li>
                  <li>Improve our services and website</li>
                  <li>Send you relevant updates about our services (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. Information Sharing</h2>
                <p className="text-secondary-600 mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors when required</li>
                  <li>Law enforcement when legally required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Data Retention</h2>
                <p className="text-secondary-600">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law. Project-related 
                  data may be retained for professional liability and record-keeping purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Security</h2>
                <p className="text-secondary-600">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. This 
                  includes encryption, secure file transfer protocols, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Cookies</h2>
                <p className="text-secondary-600">
                  Our website may use cookies and similar technologies to enhance your experience, 
                  analyze website traffic, and understand user preferences. You can control cookie 
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Your Rights</h2>
                <p className="text-secondary-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Contact Us</h2>
                <p className="text-secondary-600">
                  If you have any questions about this Privacy Policy or our practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-surface rounded-lg">
                  <p className="text-secondary-700 font-semibold">Tekniq Steel</p>
                  <p className="text-secondary-600">
                    Email: <a href="mailto:sales@tekniqsteel.com" className="text-accent hover:underline">sales@tekniqsteel.com</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">9. Updates to This Policy</h2>
                <p className="text-secondary-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
