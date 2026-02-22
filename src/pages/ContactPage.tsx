import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'sales@tekniqsteel.com',
    href: 'mailto:sales@tekniqsteel.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    value: '813-544-1047',
    href: 'tel:813-544-1047',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    value: 'Remote Services Worldwide',
    href: null,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Response Time',
    value: 'Within 1 Business Day',
    href: null,
  },
];

const roles = [
  { value: 'general-contractor', label: 'General Contractor' },
  { value: 'steel-fabricator', label: 'Steel Fabricator' },
  { value: 'structural-engineer', label: 'Structural Engineer' },
  { value: 'architect', label: 'Architect' },
  { value: 'project-manager', label: 'Project Manager' },
  { value: 'other', label: 'Other' },
];

const projectTypes = [
  { value: 'commercial-office', label: 'Commercial Office' },
  { value: 'industrial-warehouse', label: 'Industrial Warehouse' },
  { value: 'retail-shopping', label: 'Retail/Shopping Center' },
  { value: 'healthcare-facility', label: 'Healthcare Facility' },
  { value: 'educational-building', label: 'Educational Building' },
  { value: 'mixed-use', label: 'Mixed-Use Development' },
  { value: 'manufacturing-plant', label: 'Manufacturing Plant' },
  { value: 'other', label: 'Other' },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectType: '',
    projectLocation: '',
    projectDescription: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Quote Request Submitted!',
      description: 'We will review your project details and respond within 1 business day.',
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      projectType: '',
      projectLocation: '',
      projectDescription: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact & Quote Request - Tekniq Steel | Get Your Steel Detailing Quote"
        description="Request a quote for Structural & Miscellaneous Steel Detailing. We typically respond within 1 business day after reviewing your drawings."
        canonicalUrl="https://tekniqsteel.com/contact"
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16" aria-labelledby="contact-hero">
        <div className="container-max">
          <header className="text-center max-w-4xl mx-auto">
            <h1
              id="contact-hero"
              className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            >
              Get Your Steel Project <span className="text-gradient">Quote Today</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Share your project details and drawings. We typically respond within 1 business day with a quote
              after reviewing your information.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              {['24-Hour Response', 'Free Consultation', 'Accurate Estimates'].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-card px-4 py-3 rounded-lg shadow-sm border border-border/50"
                >
                  <CheckCircle className="w-6 h-6 text-success mr-3" aria-hidden="true" />
                  <span className="font-semibold text-secondary-700">{benefit}</span>
                </div>
              ))}
            </div>
          </header>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-card" aria-labelledby="form-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="mb-8">
                  <h2
                    id="form-heading"
                    className="text-2xl font-heading font-bold text-primary mb-4"
                  >
                    Project Quote Request
                  </h2>
                  <p className="text-secondary-600">
                    Fill out the form below and we'll provide you with a detailed quote within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.smith@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="813-544-1047"
                        required
                      />
                    </div>
                  </div>

                  {/* Company and Role */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="ABC Construction"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) => handleSelectChange('role', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Building Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => handleSelectChange('projectType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select building type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Project Location *</Label>
                      <Input
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleInputChange}
                        placeholder="Dallas, TX"
                        required
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project, special requirements, or challenges..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent-600 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-secondary-600 hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-secondary-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card bg-primary text-primary-foreground">
                <h3 className="text-xl font-heading font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Quote within 1 business day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Detailed scope breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Timeline and milestone plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Clear communication process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
