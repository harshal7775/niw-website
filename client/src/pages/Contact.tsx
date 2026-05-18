import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

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
              title="Get in Touch"
              subtitle="Let's Talk"
              description="We'd love to hear about your business and discuss how we can help you grow"
              animated={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
                    <Mail size={24} className="text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@niw.com" className="text-foreground/70 hover:text-foreground transition-colors">
                      hello@niw.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
                    <Phone size={24} className="text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+91YOUR_NUMBER" className="text-foreground/70 hover:text-foreground transition-colors">
                      +91 YOUR NUMBER
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
                    <Send size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/91YOUR_NUMBER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
                    <MapPin size={24} className="text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/70">India</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
                    <Clock size={24} className="text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-foreground/70 text-sm">Monday - Friday: 9 AM - 6 PM IST</p>
                    <p className="text-foreground/70 text-sm">Saturday: 10 AM - 4 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">âœ“</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-foreground/70">We've received your message and will get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                        placeholder="Tell us about your business and goals..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gradient py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="container">
          <SectionHeading
            title="We Respond Fast"
            subtitle="Quick Support"
            description="Expect a response within 24 hours"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'Email Response',
                time: 'Within 24 hours',
                description: 'We check emails throughout the day',
              },
              {
                title: 'WhatsApp Response',
                time: 'Within 2 hours',
                description: 'Fastest way to reach us',
              },
              {
                title: 'Phone Call',
                time: 'Same day',
                description: 'Schedule a call at your convenience',
              },
            ].map((item, idx) => (
              <GlassCard key={idx} delay={idx} hover={false}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-cyan-600 font-bold mb-2">{item.time}</p>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

