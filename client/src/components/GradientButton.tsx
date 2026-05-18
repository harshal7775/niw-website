import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
  external = false,
}: GradientButtonProps) {
  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const variantClass = {
    primary: 'btn-gradient',
    secondary: 'premium-chip text-foreground hover:bg-white/80',
  }[variant];

  const baseClass = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${sizeClass} ${variantClass} ${className}`;

  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <button className={baseClass} onClick={onClick}>
        {children}
      </button>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={baseClass}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={baseClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return content;
}
