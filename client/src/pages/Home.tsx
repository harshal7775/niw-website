import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import PremiumHeroSticky from '@/components/PremiumHeroSticky';
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Globe,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

function ServiceParallaxCard({
  service,
  index,
  scrollProgress,
  shouldAnimate,
}: {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  shouldAnimate: boolean;
}) {
  const Icon = service.icon;
  const cardRotation = useTransform(
    scrollProgress,
    [0, 1],
    [-2 + index * 0.5, 2 - index * 0.5]
  );

  return (
    <motion.div style={shouldAnimate ? { rotateZ: cardRotation } : undefined}>
      <GlassCard delay={index}>
        <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
        <p className="text-foreground/70">{service.description}</p>
      </GlassCard>
    </motion.div>
  );
}

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesRef,
    offset: ['start center', 'end center'],
  });

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  const services = [
    { icon: Globe, title: 'Social Media Marketing', description: 'Engage and grow your audience across all platforms' },
    { icon: BarChart3, title: 'Google Growth', description: 'Dominate local search and Google My Business' },
    { icon: TrendingUp, title: 'SEO & Content', description: 'Rank higher and attract organic traffic' },
    { icon: Smartphone, title: 'Websites & Landing Pages', description: 'High-converting pages that drive sales' },
    { icon: MessageSquare, title: 'WhatsApp Marketing', description: 'Direct communication with your customers' },
    { icon: Zap, title: 'AI Chatbots', description: 'Automate customer interactions 24/7' },
  ];

  const benefits = [
    { title: 'Affordable Packages', description: 'Starting from ₹3,990/week for growing businesses' },
    { title: 'Clear Deliverables', description: 'Know exactly what you\'re getting each month' },
    { title: 'AI-Assisted Speed', description: 'Faster execution with AI-powered systems' },
    { title: 'Lead-Focused', description: 'Everything designed to generate qualified leads' },
    { title: 'Transparent Reporting', description: 'Real-time dashboards and monthly reports' },
    { title: 'Industry Expertise', description: 'Strategies tailored to your specific industry' },
  ];

  const pricingPlans = [
    {
      name: 'Silver',
      weekly: '₹3,990',
      monthly: '₹12,990',
      popular: false,
    },
    {
      name: 'Gold',
      weekly: '₹5,990',
      monthly: '₹23,990',
      popular: true,
    },
    {
      name: 'Diamond',
      weekly: '₹9,900',
      monthly: '₹39,990',
      popular: false,
    },
  ];

  const industries = [
    'Restaurants & Cafes',
    'Furniture & Interiors',
    'Retail Shops',
    'Salons & Clinics',
    'Real Estate',
    'Education & Coaching',
    'Ecommerce Brands',
    'Gift / Toy / Decor Shops',
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section with Sticky Scroll Storytelling */}
      <PremiumHeroSticky />

      {/* Trust Strip */}
      <section className="surface-band border-y border-white/55 bg-white/22 py-12 backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['AI Marketing', 'Google Growth', 'Social Media', 'CRM', 'WhatsApp Automation', 'Lead Funnels'].map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 text-foreground/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"></div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Parallax Cards */}
      <section ref={servicesRef} className="py-24">
        <div className="container">
          <SectionHeading
            title="Everything Your Business Needs to Grow — In One Place"
            subtitle="Our Services"
            description="Comprehensive digital marketing solutions designed for local businesses"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, idx) => (
              <ServiceParallaxCard
                key={service.title}
                service={service}
                index={idx}
                scrollProgress={servicesScrollProgress}
                shouldAnimate={shouldAnimate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why NIW Works */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="Why NIW Works"
            subtitle="Our Advantage"
            description="Proven systems that deliver results for local businesses"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {benefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="glass-card p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Our Plans"
            description="Choose the perfect package for your business"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`glass-card h-full p-8 ${plan.popular ? 'popular-card ring-2 ring-cyan-400/50' : ''}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <p className="text-sm text-foreground/60 mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-foreground">{plan.weekly}</p>
                    <p className="text-sm text-foreground/60">/week or {plan.monthly}/month</p>
                  </div>
                  <GradientButton href="/contact" size="md" className="w-full">
                    Get Started
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="We Work With All Industries"
            subtitle="Industry Solutions"
            description="Tailored strategies for your specific business type"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {industries.map((industry, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <motion.div
                  className="glass-card p-6 text-center transition-colors hover:bg-white/80 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="font-medium text-foreground">{industry}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="glass-card p-12 text-center md:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your <span className="gradient-text">Growth System?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of local businesses already using NIW to generate more leads, customers, and sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/contact" size="lg">
                Book Free Consultation
              </GradientButton>
              <a
                href="https://wa.me/91YOUR_NUMBER"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
