import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import TimelineProgress from '@/components/TimelineProgress';
import { ArrowRight, CheckCircle, Zap, TrendingUp, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We understand your business, goals, and challenges. No pressure, just honest advice.',
      duration: '30 mins',
      icon: CheckCircle,
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description: 'Our team creates a tailored growth plan based on your industry and target audience.',
      duration: '3-5 days',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Quick Setup',
      description: 'We set up all systems, accounts, and campaigns. You\'re live in 48 hours.',
      duration: '48 hours',
      icon: TrendingUp,
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'We monitor, test, and optimize everything for maximum results.',
      duration: 'Ongoing',
      icon: BarChart3,
    },
  ];

  const timelineItems = [
    { period: 'Week 1', milestone: 'Setup Complete', description: 'All systems live and campaigns running' },
    { period: 'Week 2-4', milestone: 'Initial Data', description: 'First performance metrics and insights' },
    { period: 'Month 2-3', milestone: 'Optimization', description: 'Testing and refining based on data' },
    { period: 'Month 3-6', milestone: 'Results', description: 'Significant improvements in leads and sales' },
    { period: 'Month 6+', milestone: 'Scale', description: 'Expand strategies and maximize growth' },
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
              title="How We Work"
              subtitle="Our Process"
              description="From consultation to optimization, here's how we help you grow"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Left: Number & Icon */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-full glass-card flex items-center justify-center flex-col gap-2">
                    <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text">
                      {step.number}
                    </span>
                    <Icon size={24} className="text-cyan-500" />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <div className="glass-card p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-foreground/70 mb-4">{step.description}</p>
                      <p className="text-sm text-cyan-600 font-semibold">⏱️ {step.duration}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-12 text-cyan-500">
                      <ArrowRight size={32} className="rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gradient-to-b from-white/30 to-white/10">
        <div className="container">
          <SectionHeading
            title="What You Get"
            subtitle="Included in Every Plan"
            description="Everything you need to succeed"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'Dedicated Account Manager',
                description: 'Your personal point of contact for all questions and updates',
              },
              {
                title: 'Custom Strategy',
                description: 'Tailored to your business, industry, and goals',
              },
              {
                title: 'Professional Setup',
                description: 'All systems configured and optimized for success',
              },
              {
                title: 'Regular Reporting',
                description: 'Transparent dashboards and monthly performance reports',
              },
              {
                title: 'Ongoing Optimization',
                description: 'Continuous testing and improvements for better results',
              },
              {
                title: 'Priority Support',
                description: 'Fast response times and dedicated support team',
              },
            ].map((item, idx) => (
              <GlassCard key={idx} delay={idx} hover={false}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline with Scroll Progress */}
      <TimelineProgress items={timelineItems} />

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white/10 to-white/30">
        <div className="container">
          <SectionHeading
            title="Common Questions"
            subtitle="FAQ"
            description="Everything you need to know about our process"
          />

          <div className="mt-16 space-y-4">
            {[
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see initial improvements within 2-4 weeks. Significant results typically come within 3-6 months depending on your industry and goals.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel anytime with 30 days notice. No long-term contracts required.',
              },
              {
                q: 'What if I\'m not happy?',
                a: 'If you\'re not satisfied in the first 30 days, we\'ll work with you to improve or offer a full refund.',
              },
              {
                q: 'Do I need to provide access to my accounts?',
                a: 'Yes, we need access to manage your social media, Google Ads, and other platforms. All access is secure and professional.',
              },
            ].map((item, idx) => (
              <motion.details
                key={idx}
                className="glass-card p-6 cursor-pointer group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="text-cyan-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/70 mt-4">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="glass-card p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and let's create your growth plan.
            </p>
            <GradientButton href="/contact" size="lg">
              Book Free Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
