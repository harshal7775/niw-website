import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ScrollReveal from '@/components/ScrollReveal';
import AIWorkflow from '@/components/AIWorkflow';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

export default function AIMarketing() {
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
              title="AI-Powered Marketing"
              subtitle="The Future of Growth"
              description="Leverage artificial intelligence for smarter, faster, and more effective marketing"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* What is AI Marketing */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">What is AI Marketing?</h2>
              <p className="text-lg text-foreground/70 mb-4">
                AI Marketing uses artificial intelligence and machine learning to automate, optimize, and personalize marketing campaigns at scale.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Instead of manually managing campaigns, AI systems analyze data, predict customer behavior, and automatically optimize for better results.
              </p>
              <p className="text-lg text-foreground/70">
                The result? Faster lead generation, higher conversion rates, and better ROI - all with less manual work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-12 space-y-6">
                <div>
                  <p className="text-sm text-cyan-600 font-semibold mb-2">45% Faster</p>
                  <p className="text-foreground/70">Campaign optimization with AI</p>
                </div>
                <div>
                  <p className="text-sm text-cyan-600 font-semibold mb-2">3x Better</p>
                  <p className="text-foreground/70">Lead quality and conversion rates</p>
                </div>
                <div>
                  <p className="text-sm text-cyan-600 font-semibold mb-2">50% Less</p>
                  <p className="text-foreground/70">Manual work and management time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <AIWorkflow />

      {/* AI Features */}
      <section className="py-24 bg-gradient-to-b from-white/30 to-white/10">
        <div className="container">
          <SectionHeading
            title="Our AI Marketing Features"
            subtitle="Powered by AI"
            description="Advanced technology for better results"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: Brain,
                title: 'Predictive Analytics',
                description: 'AI predicts which leads are most likely to convert',
              },
              {
                icon: Zap,
                title: 'Automated Optimization',
                description: 'AI automatically adjusts campaigns for better performance',
              },
              {
                icon: Target,
                title: 'Smart Targeting',
                description: 'AI identifies and targets your ideal customers',
              },
              {
                icon: TrendingUp,
                title: 'Real-time Insights',
                description: 'AI provides actionable insights in real-time',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={idx} delay={idx} direction="up">
                  <GlassCard hover={false}>
                    <Icon size={32} className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tools We Use */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="AI Tools & Technologies"
            subtitle="Our Tech Stack"
            description="We use the latest AI and machine learning technologies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: 'AI Chatbots',
                description: 'Automated customer service and lead qualification 24/7',
              },
              {
                title: 'Predictive Lead Scoring',
                description: 'AI identifies which leads are most likely to buy',
              },
              {
                title: 'Automated Email Sequences',
                description: 'AI-powered email campaigns that adapt to user behavior',
              },
              {
                title: 'Smart Ad Optimization',
                description: 'AI automatically optimizes ads for maximum ROI',
              },
              {
                title: 'Content Generation',
                description: 'AI helps create personalized content at scale',
              },
              {
                title: 'Behavior Analysis',
                description: 'AI analyzes customer behavior to improve targeting',
              },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tool.title}</h3>
                  <p className="text-foreground/70">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-gradient-to-b from-white/10 to-white/30">
        <div className="container">
          <SectionHeading
            title="Results with AI Marketing"
            subtitle="Proven Impact"
            description="See what's possible with AI-powered marketing"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { metric: '45%', label: 'Average Lead Increase' },
              { metric: '3.2x', label: 'Average ROI Improvement' },
              { metric: '60%', label: 'Time Saved on Management' },
              { metric: '52%', label: 'Conversion Rate Improvement' },
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
          <motion.div
            className="glass-card p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Harness AI for Your Business?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI marketing can transform your growth strategy.
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
