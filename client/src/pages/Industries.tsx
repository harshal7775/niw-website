import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import { UtensilsCrossed, Sofa, ShoppingBag, Scissors, Home, BookOpen, Package, Gift } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      id: 'restaurants',
      icon: UtensilsCrossed,
      name: 'Restaurants & Cafes',
      description: 'Drive foot traffic and online orders',
      challenges: [
        'Low online visibility',
        'Inconsistent customer reviews',
        'Limited online ordering',
      ],
      solutions: [
        'Google My Business optimization',
        'Social media content calendar',
        'Online ordering integration',
        'Review management system',
      ],
      recommended: 'Gold',
    },
    {
      id: 'furniture',
      icon: Sofa,
      name: 'Furniture & Interiors',
      description: 'Showcase your designs to local buyers',
      challenges: [
        'High-quality visuals needed',
        'Long sales cycles',
        'Local competition',
      ],
      solutions: [
        'Professional photography setup',
        'Instagram & Pinterest strategy',
        'Virtual showroom creation',
        'Lead nurturing campaigns',
      ],
      recommended: 'Gold',
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      name: 'Retail Shops',
      description: 'Increase foot traffic and sales',
      challenges: [
        'Seasonal fluctuations',
        'Online competition',
        'Customer retention',
      ],
      solutions: [
        'Loyalty program setup',
        'Email marketing campaigns',
        'Social media promotions',
        'Local SEO optimization',
      ],
      recommended: 'Gold',
    },
    {
      id: 'salons',
      icon: Scissors,
      name: 'Salons & Clinics',
      description: 'Book more appointments online',
      challenges: [
        'Appointment no-shows',
        'Limited online booking',
        'Staff scheduling',
      ],
      solutions: [
        'Online booking system',
        'WhatsApp appointment reminders',
        'Google Ads for local reach',
        'Review management',
      ],
      recommended: 'Silver',
    },
    {
      id: 'real-estate',
      icon: Home,
      name: 'Real Estate',
      description: 'Generate qualified leads',
      challenges: [
        'Long sales cycles',
        'High competition',
        'Lead qualification',
      ],
      solutions: [
        'Virtual property tours',
        'Google Ads campaigns',
        'Lead scoring system',
        'CRM integration',
      ],
      recommended: 'Diamond',
    },
    {
      id: 'education',
      icon: BookOpen,
      name: 'Education & Coaching',
      description: 'Attract more students',
      challenges: [
        'Awareness building',
        'Student inquiries',
        'Enrollment conversion',
      ],
      solutions: [
        'Content marketing strategy',
        'Google Ads for student acquisition',
        'WhatsApp automation',
        'Email nurturing sequences',
      ],
      recommended: 'Gold',
    },
    {
      id: 'ecommerce',
      icon: Package,
      name: 'Ecommerce Brands',
      description: 'Scale your online sales',
      challenges: [
        'Cart abandonment',
        'Customer acquisition cost',
        'Repeat purchases',
      ],
      solutions: [
        'Email recovery campaigns',
        'Social media retargeting',
        'Influencer partnerships',
        'Loyalty programs',
      ],
      recommended: 'Diamond',
    },
    {
      id: 'decor',
      icon: Gift,
      name: 'Gift / Toy / Decor Shops',
      description: 'Boost seasonal sales',
      challenges: [
        'Seasonal demand',
        'Inventory management',
        'Gift discovery',
      ],
      solutions: [
        'Seasonal campaign planning',
        'Social media gift guides',
        'Email marketing',
        'Google Shopping integration',
      ],
      recommended: 'Gold',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Industry-Specific Solutions"
              subtitle="We Serve All Industries"
              description="Tailored strategies designed for your specific business type"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <GlassCard key={industry.id} delay={idx} hover>
                  <div className="flex items-start justify-between mb-4">
                    <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text" />
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-600">
                      {industry.recommended}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-foreground/70 mb-6">{industry.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Challenges We Solve:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                          <span className="text-violet-500 mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <GradientButton href="/contact" size="sm" className="w-full">
                    Learn More
                  </GradientButton>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="Not Your Industry?"
            subtitle="Custom Solutions"
            description="We work with businesses across all sectors. Let's discuss your specific needs."
          />

          <div className="mt-16 glass-card p-12 md:p-16 text-center">
            <p className="text-lg text-foreground/70 mb-8">
              Every business is unique. We create custom strategies tailored to your industry, market, and goals.
            </p>
            <GradientButton href="/contact" size="lg">
              Get a Custom Quote
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Results Across Industries"
            subtitle="Proven Success"
            description="Here's what we typically deliver"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { metric: '45%', label: 'Average Lead Increase' },
              { metric: '32%', label: 'Average Conversion Lift' },
              { metric: '3-6 months', label: 'Time to ROI' },
              { metric: '24/7', label: 'Support Available' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="glass-card p-8 text-center">
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-2">
                    {item.metric}
                  </p>
                  <p className="text-foreground/70">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's create a growth strategy specifically designed for your industry.
            </p>
            <GradientButton href="/contact" size="lg">
              Schedule Free Consultation
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
