import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Globe, BarChart3, TrendingUp, Smartphone, MessageSquare, Zap, Users, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Social Media Marketing',
      description: 'Grow your audience and engagement across Facebook, Instagram, LinkedIn, and more',
      inclusions: [
        'Content creation & scheduling',
        'Community management',
        'Paid social campaigns',
        'Analytics & reporting',
      ],
    },
    {
      icon: BarChart3,
      title: 'Google My Business & Local SEO',
      description: 'Dominate local search results and attract customers in your area',
      inclusions: [
        'GMB optimization',
        'Local SEO strategy',
        'Review management',
        'Local citation building',
      ],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Content Marketing',
      description: 'Rank higher on Google and attract organic traffic with quality content',
      inclusions: [
        'Keyword research',
        'On-page optimization',
        'Content creation',
        'Link building',
      ],
    },
    {
      icon: Smartphone,
      title: 'Websites & Landing Pages',
      description: 'High-converting websites designed to turn visitors into customers',
      inclusions: [
        'Responsive design',
        'Mobile optimization',
        'CTA optimization',
        'Performance tuning',
      ],
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Marketing & Automation',
      description: 'Direct communication with customers through WhatsApp campaigns and automation',
      inclusions: [
        'WhatsApp campaigns',
        'Broadcast lists',
        'Automation workflows',
        'Lead nurturing',
      ],
    },
    {
      icon: Zap,
      title: 'AI Chatbots & Automation',
      description: 'Automate customer interactions and lead qualification 24/7',
      inclusions: [
        'AI chatbot setup',
        'Lead qualification',
        'FAQ automation',
        'Integration support',
      ],
    },
    {
      icon: Users,
      title: 'Email Marketing',
      description: 'Build relationships and drive sales through targeted email campaigns',
      inclusions: [
        'Email list building',
        'Campaign creation',
        'Automation sequences',
        'A/B testing',
      ],
    },
    {
      icon: Mail,
      title: 'Google & Meta Ads',
      description: 'Targeted paid advertising to reach your ideal customers',
      inclusions: [
        'Campaign strategy',
        'Ad creation',
        'Bid management',
        'ROI optimization',
      ],
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
              title="Our Premium Services"
              subtitle="Complete Digital Marketing Solutions"
              description="Everything you need to grow your local business online"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <GlassCard key={idx} delay={idx} hover>
                  <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.inclusions.map((item, i) => (
                      <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">âœ“</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="Why Choose Our Services"
            subtitle="Our Commitment"
            description="We deliver results, not just promises"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Proven Results',
                description: 'Our strategies are backed by data and real success stories from local businesses',
              },
              {
                title: 'Expert Team',
                description: 'Certified professionals with years of experience in digital marketing',
              },
              {
                title: 'Transparent Reporting',
                description: 'Real-time dashboards and monthly reports so you know exactly what we\'re doing',
              },
              {
                title: 'Affordable Pricing',
                description: 'Premium services at prices that work for growing businesses',
              },
              {
                title: 'Quick Setup',
                description: 'Get started in 48 hours with our streamlined onboarding process',
              },
              {
                title: 'Dedicated Support',
                description: 'Your own account manager available to answer questions and optimize campaigns',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="glass-card p-8 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your business and create a custom growth plan.
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

