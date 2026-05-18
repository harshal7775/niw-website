import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  animated?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  children,
  align = 'center',
  animated = true,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }; 

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const content = (
    <div className={alignClass}>
      {subtitle && (
        <div className="mb-4 md:mb-5">
          <p className="premium-chip inline-flex rounded-full px-4 py-1.5 text-sm font-semibold text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text">
            {subtitle}
          </p>
        </div>
      )}
      <h2 className="section-heading mb-4 md:mb-6">{title}</h2>
      {description && (
        <p className="section-subheading mb-6 md:mb-8 max-w-2xl mx-auto">{description}</p>
      )}
      {children}
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div variants={item}>{content}</motion.div>
    </motion.div>
  );
}
