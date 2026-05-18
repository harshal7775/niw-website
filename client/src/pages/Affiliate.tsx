import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export default function Affiliate() {
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
              title="Affiliate Program"
              subtitle="Earn with NIW"
              description="Join our partner program and earn recurring commissions"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="How It Works"
            subtitle="Simple & Transparent"
            description="Earn recurring commissions for every referral"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Silver Plan',
                commission: 'â‚¹500',
                recurring: 'per month',
                description: 'Earn â‚¹500 for every Silver plan referral',
              },
              {
                title: 'Gold Plan',
                commission: 'â‚¹1,000',
                recurring: 'per month',
                description: 'Earn â‚¹1,000 for every Gold plan referral',
              },
              {
                title: 'Diamond Plan',
                commission: 'â‚¹2,000',
                recurring: 'per month',
                description: 'Earn â‚¹2,000 for every Diamond plan referral',
              },
            ].map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <GlassCard hover={false}>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-1">
                    {plan.commission}
                  </p>
                  <p className="text-sm text-foreground/60 mb-4">{plan.recurring}</p>
                  <p className="text-foreground/70 text-sm">{plan.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="surface-band py-24">
        <div className="container">
          <SectionHeading
            title="Why Join Our Affiliate Program"
            subtitle="Partner Benefits"
            description="Everything you need to succeed as an affiliate"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: TrendingUp, title: 'Recurring Income', description: 'Earn commissions every month for each referral' },
              { icon: Users, title: 'Easy Sharing', description: 'Get your unique referral link and start earning' },
              { icon: Zap, title: 'Fast Payouts', description: 'Get paid every month via bank transfer or UPI' },
              { icon: Award, title: 'Top Performer Bonuses', description: 'Extra bonuses for top-performing affiliates' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlassCard key={idx} delay={idx} hover={false}>
                  <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Get Started in 3 Steps"
            subtitle="Easy Process"
            description="Start earning today"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                number: '01',
                title: 'Sign Up',
                description: 'Fill out the affiliate form and get approved',
              },
              {
                number: '02',
                title: 'Get Your Link',
                description: 'Receive your unique referral link and marketing materials',
              },
              {
                number: '03',
                title: 'Start Earning',
                description: 'Share with your network and earn recurring commissions',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-8 text-center">
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4">
                    {step.number}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-band py-24">
        <div className="container">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Earn Passive Income?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join our affiliate program and start earning recurring commissions today.
            </p>
            <GradientButton href="/contact" size="lg">
              Apply Now
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}

