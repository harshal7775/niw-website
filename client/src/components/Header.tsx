import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, PhoneCall, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  const navItems = isHome
    ? [
        { label: "Home", href: "#home" },
        { label: "Selected Work", href: "#selected-work" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Marketing", href: "/ai-marketing" },
        { label: "Results", href: "/results" },
        { label: "Contact", href: "/contact" },
      ];

  return (
    <header className={isHome ? "retro-header" : "standard-header"}>
      <div className={isHome ? "retro-header-inner" : "container flex h-20 items-center justify-between"}>
        <Link href="/" className={isHome ? "retro-brand" : "flex items-center gap-2 group"}>
          {isHome ? (
            <>
              <span />
              <strong>NIW</strong>
            </>
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
                <span className="text-lg font-bold">N</span>
              </div>
              <span className="hidden text-xl font-bold sm:inline text-foreground">NIW</span>
            </>
          )}
        </Link>

        <nav className={isHome ? "retro-nav hidden lg:flex" : "hidden items-center gap-0 lg:flex"}>
          {navItems.map((item) => (
            isHome ? (
              <a key={item.href} href={item.href} className="retro-nav-link">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium transition-colors ${
                  location === item.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className={isHome ? "hidden items-center gap-3 xl:flex" : "hidden items-center gap-3 md:flex"}>
          {isHome ? (
            <a href="#contact" className="retro-call-link">
              <PhoneCall size={16} />
              <span>Book a call</span>
            </a>
          ) : (
            <Link href="/contact" className="btn-gradient whitespace-nowrap px-6 py-2 text-sm">
              Get Started
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isHome ? "retro-menu-toggle lg:hidden" : "rounded-2xl p-2 transition-colors lg:hidden premium-chip hover:bg-white/80"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={isHome ? "retro-mobile-panel lg:hidden" : "border-t border-white/55 bg-white/72 backdrop-blur-2xl lg:hidden"}
        >
          <nav className={isHome ? "retro-mobile-nav" : "container flex flex-col gap-2 py-4"}>
            {navItems.map((item) => (
              isHome ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="retro-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
