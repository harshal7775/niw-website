import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';

export default function FAQ() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is NIW?',
          a: 'NIW (Next In Wave) is an AI-powered digital marketing and growth system for local businesses. We provide complete solutions for social media, Google growth, SEO, paid ads, and more.',
        },
        {
          q: 'Who is NIW for?',
          a: 'We work with local businesses of all sizes - restaurants, retail shops, salons, real estate, coaching centers, ecommerce brands, and more. If you want to grow your business online, we can help.',
        },
        {
          q: 'How long has NIW been in business?',
          a: 'We have years of experience in digital marketing and have helped hundreds of businesses achieve their growth goals.',
        },
      ],
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          q: 'What are your pricing options?',
          a: 'We offer three main plans: Silver (â‚¹3,990/week), Gold (â‚¹5,990/week), and Diamond (â‚¹9,900/week). All plans include setup, optimization, and support.',
        },
        {
          q: 'Can I switch plans anytime?',
          a: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle.',
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. We believe in transparent pricing. What you see is what you pay. No hidden charges or surprise fees.',
        },
        {
          q: 'Do you offer custom packages?',
          a: 'Yes! If none of our standard plans fit your needs, we can create a custom package tailored to your business.',
        },
      ],
    },
    {
      category: 'Services & Features',
      questions: [
        {
          q: 'What services are included in each plan?',
          a: 'Silver includes basic social media, GMB optimization, and SEO. Gold adds content creation, Google Ads, and WhatsApp marketing. Diamond includes everything plus AI chatbots and dedicated support.',
        },
        {
          q: 'Can I add services to my plan?',
          a: 'Absolutely! We offer add-ons like video marketing, website development, logo design, and more. You can add them anytime.',
        },
        {
          q: 'Do you manage my social media?',
          a: 'Yes, depending on your plan. We create content, schedule posts, engage with followers, and manage your social media accounts.',
        },
        {
          q: 'Will you help with my website?',
          a: 'We can optimize your existing website and help with conversions. We also offer website development as an add-on service.',
        },
      ],
    },
    {
      category: 'Results & Timeline',
      questions: [
        {
          q: 'How long does it take to see results?',
          a: 'Most clients see initial improvements within 2-4 weeks. Significant results typically come within 3-6 months, depending on your industry and goals.',
        },
        {
          q: 'What kind of results can I expect?',
          a: 'Results vary by industry, but typical improvements include 45-250% increase in leads, 30-50% improvement in conversion rates, and 3-5x ROI within 3-6 months.',
        },
        {
          q: 'How do you measure success?',
          a: 'We track everything: leads generated, conversion rates, website traffic, social media engagement, and revenue impact. You get detailed monthly reports.',
        },
        {
          q: 'What if I don\'t see results?',
          a: 'We\'re confident in our strategies. If you\'re not satisfied in the first 30 days, we\'ll work with you to improve or offer a full refund.',
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I get started?',
          a: 'Schedule a free consultation with us. We\'ll understand your business, discuss your goals, and create a custom growth plan.',
        },
        {
          q: 'What do I need to provide?',
          a: 'We\'ll need access to your social media accounts, Google Ads account, website, and any other relevant platforms. All access is secure and professional.',
        },
        {
          q: 'How quickly can you set up my account?',
          a: 'We can have everything set up and live within 48 hours of you signing up. Your campaigns will be running before you know it.',
        },
        {
          q: 'Do I need any technical knowledge?',
          a: 'No! We handle everything technical. You just need to provide access and feedback. We\'ll manage all the complex stuff.',
        },
      ],
    },
    {
      category: 'Support & Communication',
      questions: [
        {
          q: 'How will I communicate with your team?',
          a: 'You\'ll have a dedicated account manager. You can reach us via email, WhatsApp, phone, or video calls. We\'re always available.',
        },
        {
          q: 'How often will I get updates?',
          a: 'You get real-time dashboards to track performance. We also provide detailed monthly reports and schedule regular check-in calls.',
        },
        {
          q: 'What if I have questions or concerns?',
          a: 'Your account manager is here to help. You can reach out anytime, and we\'ll respond within 24 hours (usually much faster).',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes, you can cancel with 30 days notice. No long-term contracts or early termination fees.',
        },
      ],
    },
    {
      category: 'Security & Privacy',
      questions: [
        {
          q: 'Is my data secure?',
          a: 'Yes, we use industry-standard security practices. All your data is encrypted and protected. We never share your information with third parties.',
        },
        {
          q: 'What about my account access?',
          a: 'We use secure authentication and only access what\'s necessary to manage your campaigns. You can revoke access anytime.',
        },
        {
          q: 'Do you comply with data protection laws?',
          a: 'Yes, we comply with all relevant data protection regulations and best practices.',
        },
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
              title="Frequently Asked Questions"
              subtitle="Common Questions"
              description="Find answers to your questions about NIW services"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-16">
            {faqs.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.05 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <details
                      key={qIdx}
                      className="glass-card p-6 cursor-pointer group"
                    >
                      <summary className="font-semibold text-foreground flex items-center justify-between">
                        <span>{item.q}</span>
                        <span className="text-cyan-500 group-open:rotate-180 transition-transform">â–¼</span>
                      </summary>
                      <p className="text-foreground/70 mt-4">{item.a}</p>
                    </details>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="surface-band py-24">
        <div className="container">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/contact" size="lg">
                Contact Us
              </GradientButton>
              <a
                href="https://wa.me/91YOUR_NUMBER"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

