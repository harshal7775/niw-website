import { Link } from 'wouter';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Results', href: '/results' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Affiliate', href: '/affiliate' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'Restaurants', href: '/industries#restaurants' },
        { label: 'Retail', href: '/industries#retail' },
        { label: 'Real Estate', href: '/industries#real-estate' },
        { label: 'Education', href: '/industries#education' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="surface-band border-t border-white/55 bg-white/28 backdrop-blur-xl">
      <div className="container py-16 md:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/20">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">NIW</h3>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              AI-powered digital marketing and growth systems for local businesses. More leads, more customers, more sales.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
            <a
              href="mailto:hello@niw.com"
              className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-white/60 transition-colors">
                <Mail size={18} />
              </div>
              <span>hello@niw.com</span>
            </a>
            <a
              href="tel:+91YOUR_NUMBER"
              className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-white/60 transition-colors">
                <Phone size={18} />
              </div>
              <span>+91 YOUR NUMBER</span>
            </a>
            <div className="flex items-start gap-3 text-foreground/70">
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Next In Wave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
