import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  const plans = [
    {
      name: 'Silver',
      description: 'Perfect for startups and small businesses',
      weekly: 3990,
      monthly: 12990,
      popular: false,
      features: [
        'Social Media Management (1 platform)',
        'Google My Business Optimization',
        'Basic SEO',
        'Monthly Report',
        'Email Support',
      ],
    },
    {
      name: 'Gold',
      description: 'Most popular for growing businesses',
      weekly: 5990,
      monthly: 23990,
      popular: true,
      features: [
        'Social Media Management (3 platforms)',
        'Google My Business + Local SEO',
        'Content Creation (4 posts/month)',
        'Google Ads Management',
        'WhatsApp Marketing Setup',
        'Weekly Reports',
        'Priority Support',
      ],
    },
    {
      name: 'Diamond',
      description: 'Complete growth system for established businesses',
      weekly: 9900,
      monthly: 39990,
      popular: false,
      features: [
        'All Gold Features',
        'Social Media Management (5 platforms)',
        'Advanced SEO & Content Strategy',
        'Google Ads + Meta Ads Management',
        'WhatsApp Automation',
        'AI Chatbot Setup',
        'Email Marketing Campaigns',
        'Website Optimization',
        'Daily Reports & Analytics',
        'Dedicated Account Manager',
      ],
    },
  ];

  const comparisonFeatures = [
    'Social Media Management',
    'Google My Business',
    'SEO & Content',
    'Paid Ads (Google & Meta)',
    'WhatsApp Marketing',
    'Email Marketing',
    'AI Chatbots',
    'Website Optimization',
    'Reporting Frequency',
    'Support Level',
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
              title="Simple, Transparent Pricing"
              subtitle="Flexible Plans"
              description="Choose the perfect plan for your business. All plans include 48-hour setup and dedicated support."
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Toggle */}
      <section className="py-12">
        <div className="container flex justify-center">
          <div className="glass-card flex gap-1 p-1">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isMonthly
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Weekly Billing
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isMonthly
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
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
                <div className={`glass-card flex h-full flex-col p-8 ${plan.popular ? 'popular-card ring-2 ring-cyan-400/50' : ''}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-foreground">
                        ₹{isMonthly ? plan.monthly.toLocaleString() : plan.weekly.toLocaleString()}
                      </span>
                      <span className="text-foreground/60">/{isMonthly ? 'month' : 'week'}</span>
                    </div>
                    {isMonthly && (
                      <p className="text-xs text-foreground/50">or ₹{(plan.monthly / 4).toLocaleString()}/week</p>
                    )}
                  </div>

                  <GradientButton href="/contact" size="md" className="w-full mb-8">
                    Get Started
                  </GradientButton>

                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="What's Included & What's Extra"
            subtitle="Transparency"
            description="Here's exactly what each plan includes"
          />

          <div className="table-glass mt-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Silver</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Gold</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Diamond</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-white/10">
                    <td className="py-4 px-4 text-foreground">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {idx < 3 ? <Check size={20} className="mx-auto text-cyan-500" /> : '—'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {idx < 7 ? <Check size={20} className="mx-auto text-cyan-500" /> : '—'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check size={20} className="mx-auto text-cyan-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Add-Ons & Top-Ups"
            subtitle="Customize Your Plan"
            description="Need extra services? Add them to your plan anytime"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              { name: 'Extra Social Media Platform', price: '₹2,000/month' },
              { name: 'Website Development', price: '₹15,000 - ₹50,000' },
              { name: 'Logo Design', price: '₹5,000 - ₹15,000' },
              { name: 'Video Marketing', price: '₹5,000/month' },
              { name: 'Influencer Marketing', price: 'Custom Quote' },
              { name: 'Brand Strategy Consultation', price: '₹10,000' },
            ].map((addon, idx) => (
              <GlassCard key={idx} delay={idx} hover={false}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{addon.name}</h3>
                <p className="text-cyan-500 font-bold">{addon.price}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24">
        <div className="container">
          <div className="glass-card p-12 text-center md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Check our FAQ or schedule a free consultation to discuss the best plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/faq" size="lg">
                View FAQ
              </GradientButton>
              <GradientButton href="/contact" variant="secondary" size="lg">
                Book Consultation
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
