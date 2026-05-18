import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function Results() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  const { scrollYProgress: metricsProgress } = useScroll({
    target: metricsRef,
    offset: ['start center', 'end center'],
  });

  const { scrollYProgress: caseStudiesProgress } = useScroll({
    target: caseStudiesRef,
    offset: ['start center', 'end center'],
  });

  const caseStudies = [
    {
      company: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Low online visibility and inconsistent customer flow',
      solution: 'Social media marketing + Google My Business optimization + WhatsApp campaigns',
      results: [
        { metric: '250%', label: 'Increase in Online Orders' },
        { metric: '45%', label: 'More Foot Traffic' },
        { metric: '3.2x', label: 'ROI in 3 Months' },
      ],
      timeline: '3 months',
    },
    {
      company: 'Furniture & Interiors Store',
      industry: 'Retail',
      challenge: 'High-ticket items with long sales cycles and limited local reach',
      solution: 'Instagram marketing + Google Ads + Email nurturing + Virtual showroom',
      results: [
        { metric: '180%', label: 'Lead Generation Increase' },
        { metric: '35%', label: 'Conversion Rate Improvement' },
        { metric: '₹45L', label: 'Additional Revenue' },
      ],
      timeline: '6 months',
    },
    {
      company: 'Real Estate Agency',
      industry: 'Real Estate',
      challenge: 'Difficulty generating qualified leads and managing inquiries',
      solution: 'Google Ads + CRM setup + WhatsApp automation + Lead scoring',
      results: [
        { metric: '320%', label: 'Qualified Leads' },
        { metric: '42%', label: 'Conversion Rate' },
        { metric: '₹2.3Cr', label: 'Sales Closed' },
      ],
      timeline: '4 months',
    },
    {
      company: 'Coaching Institute',
      industry: 'Education',
      challenge: 'Low student enrollment and high customer acquisition cost',
      solution: 'Content marketing + Google Ads + Email campaigns + Social media',
      results: [
        { metric: '215%', label: 'Student Inquiries' },
        { metric: '52%', label: 'Enrollment Rate' },
        { metric: '₹12L', label: 'Revenue Increase' },
      ],
      timeline: '3 months',
    },
  ];

  const metrics = [
    { icon: TrendingUp, value: '250+', label: 'Successful Campaigns' },
    { icon: Users, value: '500K+', label: 'Leads Generated' },
    { icon: Target, value: '₹50Cr+', label: 'Revenue Generated' },
    { icon: Zap, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl"
            style={
              shouldAnimate
                ? {
                    y: useTransform(metricsProgress, [0, 1], [0, 80]) as any,
                  }
                : {}
            }
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-200/20 rounded-full blur-3xl"
            style={
              shouldAnimate
                ? {
                    y: useTransform(metricsProgress, [0, 1], [0, -80]) as any,
                  }
                : {}
            }
          />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Real Results From Real Businesses"
              subtitle="Case Studies"
              description="See how we've helped businesses like yours grow"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Key Metrics with Staggered Activation */}
      <section ref={metricsRef} className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              const metricProgress = useTransform(metricsProgress, [idx * 0.1, (idx + 1) * 0.1 + 0.15], [0, 1]);
              const metricScale = useTransform(metricProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
              const metricOpacity = useTransform(metricProgress, [0, 0.3, 1], [0, 1, 1]);

              return (
                <motion.div
                  key={idx}
                  style={
                    shouldAnimate
                      ? {
                          scale: metricScale as any,
                          opacity: metricOpacity as any,
                        }
                      : {}
                  }
                  initial={!shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
                  whileInView={!shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 } : undefined}
                  viewport={{ once: true }}
                >
                  <div className="glass-card p-8 text-center">
                    <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mx-auto mb-4" />
                    <p className="text-4xl font-bold text-foreground mb-2">{item.value}</p>
                    <p className="text-foreground/70">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies with Premium Reveals */}
      <section ref={caseStudiesRef} className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="Featured Case Studies"
            subtitle="Success Stories"
            description="Detailed breakdowns of how we helped these businesses succeed"
          />

          <div className="mt-16 space-y-12">
            {caseStudies.map((study, idx) => {
              const caseProgress = useTransform(caseStudiesProgress, [idx * 0.15, (idx + 1) * 0.15 + 0.1], [0, 1]);
              const caseScale = useTransform(caseProgress, [0, 0.4, 1], [0.9, 1.02, 1]);
              const caseOpacity = useTransform(caseProgress, [0, 0.2, 1], [0, 1, 1]);
              const caseY = useTransform(caseProgress, [0, 0.3], [40, 0]);

              return (
                <motion.div
                  key={idx}
                  style={
                    shouldAnimate
                      ? {
                          scale: caseScale as any,
                          opacity: caseOpacity as any,
                          y: caseY as any,
                        }
                      : {}
                  }
                  initial={!shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                  whileInView={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 } : undefined}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Company Info */}
                    <motion.div
                      initial={!shouldAnimate ? { opacity: 0, x: -20 } : undefined}
                      whileInView={!shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                      transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 + 0.1 } : undefined}
                      viewport={{ once: true }}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                        <p className="text-sm text-cyan-600 font-semibold mb-4">{study.industry}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2">The Challenge</h4>
                        <p className="text-foreground/70 text-sm">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Our Solution</h4>
                        <p className="text-foreground/70 text-sm">{study.solution}</p>
                      </div>
                    </motion.div>

                    {/* Right: Results with Staggered Animation */}
                    <motion.div
                      initial={!shouldAnimate ? { opacity: 0, x: 20 } : undefined}
                      whileInView={!shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                      transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 + 0.2 } : undefined}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-4">Results Achieved</h4>
                      <div className="space-y-4 mb-6">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-4"
                            initial={!shouldAnimate ? { opacity: 0, x: 10 } : undefined}
                            whileInView={!shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                            transition={!shouldAnimate ? { duration: 0.4, delay: idx * 0.1 + 0.2 + i * 0.05 } : undefined}
                            viewport={{ once: true }}
                          >
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text">
                                {result.metric}
                              </span>
                            </div>
                            <span className="text-foreground/70 text-sm">{result.label}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/20">
                        <p className="text-xs text-foreground/60">
                          <span className="font-semibold">Timeline:</span> {study.timeline}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials"
            description="Real feedback from businesses we've helped"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                name: 'Raj Kumar',
                role: 'Restaurant Owner',
                text: 'NIW transformed our online presence. Within 3 months, our orders increased by 250%. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                role: 'Interior Designer',
                text: 'Professional team, clear results, and amazing support. They delivered exactly what they promised.',
                rating: 5,
              },
              {
                name: 'Amit Patel',
                role: 'Real Estate Agent',
                text: 'The lead generation system they set up is incredible. We\'re closing more deals than ever before.',
                rating: 5,
              },
              {
                name: 'Neha Singh',
                role: 'Salon Owner',
                text: 'Best investment for my business. The WhatsApp automation alone has saved me so much time.',
                rating: 5,
              },
              {
                name: 'Vikram Reddy',
                role: 'Ecommerce Founder',
                text: 'Transparent pricing, no hidden fees, and results that speak for themselves. Great experience!',
                rating: 5,
              },
              {
                name: 'Anjali Verma',
                role: 'Coaching Institute Owner',
                text: 'Our student enrollment doubled in 4 months. The team is responsive and truly cares about results.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <GlassCard key={idx} delay={idx} hover>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-band py-24">
        <div className="container">
          <motion.div
            className="glass-card p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their growth with NIW.
            </p>
            <GradientButton href="/contact" size="lg">
              Schedule Free Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
