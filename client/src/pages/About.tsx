import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="legacy-page min-h-screen">
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
              title="About NIW"
              subtitle="Our Story"
              description="Building the future of digital marketing for local businesses"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-foreground/70 mb-4">
                NIW was founded with a simple mission: to help local businesses grow through AI-powered digital marketing systems.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We realized that most local businesses struggle with digital marketing. They don't have the time, expertise, or budget for traditional agencies. That's why we created NIW - affordable, transparent, and results-driven.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Today, we've helped hundreds of businesses generate more leads, attract more customers, and increase their sales. And we're just getting started.
              </p>
              <p className="text-lg text-foreground/70">
                Our team is passionate about helping businesses succeed. We combine AI technology, data-driven strategies, and human expertise to deliver real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="glass-card p-12 space-y-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-2">
                    500+
                  </p>
                  <p className="text-foreground/70">Businesses Helped</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-2">
                    â‚¹50Cr+
                  </p>
                  <p className="text-foreground/70">Revenue Generated</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-2">
                    98%
                  </p>
                  <p className="text-foreground/70">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="container">
          <SectionHeading
            title="Our Values"
            subtitle="What We Believe In"
            description="These principles guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on measurable results, not vanity metrics. Your success is our success.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We stay ahead of trends and use cutting-edge AI technology to help you grow.',
              },
              {
                icon: Users,
                title: 'Transparency',
                description: 'No hidden fees, no surprises. You always know what you\'re getting and why.',
              },
              {
                icon: Zap,
                title: 'Speed',
                description: 'We move fast. Setup in 48 hours, results in weeks, not months.',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={idx} delay={idx} direction="up">
                  <GlassCard hover={false}>
                    <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the Experts"
            description="Experienced professionals dedicated to your success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: 'Founder & CEO',
                role: 'Digital Marketing Strategist',
                description: '10+ years of experience in digital marketing and business growth',
              },
              {
                name: 'Head of Growth',
                role: 'Growth Strategist',
                description: 'Specialized in scaling businesses and lead generation systems',
              },
              {
                name: 'Head of Technology',
                role: 'AI & Automation Expert',
                description: 'Building AI-powered solutions for marketing automation',
              },
              {
                name: 'Social Media Manager',
                role: 'Content Strategist',
                description: 'Expert in social media marketing and community building',
              },
              {
                name: 'Paid Ads Specialist',
                role: 'Google & Meta Ads Expert',
                description: 'Specializing in high-ROI paid advertising campaigns',
              },
              {
                name: 'Client Success Manager',
                role: 'Account Manager',
                description: 'Dedicated to ensuring every client achieves their goals',
              },
            ].map((member, idx) => (
              <GlassCard key={idx} delay={idx} hover>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 mb-4"></div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-cyan-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="container">
          <SectionHeading
            title="Why Choose NIW"
            subtitle="Our Competitive Advantage"
            description="Here's what sets us apart"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: 'Affordable Pricing',
                description: 'Premium services at prices that work for growing businesses. Starting from â‚¹3,990/week.',
              },
              {
                title: 'Quick Setup',
                description: 'Get started in 48 hours. No long onboarding process or delays.',
              },
              {
                title: 'Transparent Reporting',
                description: 'Real-time dashboards and monthly reports. You always know what\'s working.',
              },
              {
                title: 'AI-Powered Systems',
                description: 'Leverage cutting-edge AI technology for faster, smarter marketing.',
              },
              {
                title: 'Proven Results',
                description: 'Hundreds of successful campaigns across all industries. See our case studies.',
              },
              {
                title: 'Dedicated Support',
                description: 'Your own account manager available 24/7 to help you succeed.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="glass-card p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's work together to grow your business and achieve your goals.
            </p>
            <GradientButton href="/contact" size="lg">
              Get Started Today
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}

