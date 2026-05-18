import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'AI Marketing', href: '/ai-marketing' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Industries', href: '/industries' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Results', href: '/results' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-40 ${
          isHome
            ? 'bg-transparent'
            : 'border-b border-white/55 bg-white/58 shadow-[0_14px_40px_rgba(42,69,111,0.08)] backdrop-blur-2xl'
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            isHome
              ? 'liquid-glass mx-auto mt-6 h-auto max-w-7xl rounded-full px-8 py-6'
              : 'container h-20'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                isHome
                  ? 'bg-white/10 text-white ring-1 ring-white/20'
                  : 'bg-gradient-to-br from-cyan-500 to-violet-600 text-white'
              }`}
            >
              <span className="text-lg font-bold">N</span>
            </div>
            <span className={`hidden text-xl font-bold sm:inline ${isHome ? 'text-white' : 'text-foreground'}`}>
              NIW
            </span>
            {isHome && (
              <>
                <span className="hidden text-white/28 xl:inline">/</span>
                <span className="hidden text-sm text-white/68 xl:inline">Next In Wave</span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              className={`px-3 py-2 text-[13px] font-medium transition-colors ${
                isHome
                  ? 'text-white/68 hover:text-white'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/91YOUR_NUMBER"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isHome
                  ? 'liquid-glass text-white hover:scale-[1.03]'
                  : 'premium-chip text-foreground hover:bg-white/80'
              }`}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className={`whitespace-nowrap px-6 py-2 text-sm ${
                isHome
                  ? 'hero-reference-primary rounded-full text-white transition-transform hover:scale-[1.03]'
                  : 'btn-gradient'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-2xl p-2 transition-colors lg:hidden ${
              isHome ? 'liquid-glass text-white hover:bg-white/10' : 'premium-chip hover:bg-white/80'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`border-t backdrop-blur-2xl lg:hidden ${
              isHome ? 'border-white/15 bg-slate-950/70' : 'border-white/55 bg-white/72'
            }`}
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isHome
                      ? 'text-white/70 hover:text-white'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20 flex flex-col gap-2">
                <a
                  href="https://wa.me/91YOUR_NUMBER"
                  className={`w-full rounded-full px-4 py-2 text-center text-sm font-medium transition-colors ${
                    isHome ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-white/50'
                  }`}
                >
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className={`w-full px-6 py-2 text-center text-sm ${
                    isHome ? 'hero-reference-primary rounded-full text-white' : 'btn-gradient'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {!isHome && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <motion.a
            href="https://wa.me/91YOUR_NUMBER"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg transition-shadow hover:shadow-xl"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </motion.a>

          <motion.a
            href="tel:+91YOUR_NUMBER"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg transition-shadow hover:shadow-xl"
            title="Call us"
          >
            <Phone size={24} />
          </motion.a>
        </div>
      )}
    </>
  );
}
