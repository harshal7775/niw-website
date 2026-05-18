import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animated?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  animated = true,
  delay = 0,
  ...motionProps
}: GlassCardProps) {
  const baseClass = 'glass-card p-6 md:p-8';

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
      },
    },
  };

  const hoverVariants = hover
    ? {
        whileHover: {
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' as any },
        },
      }
    : {};

  if (!animated) {
    return <div className={`${baseClass} ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`${baseClass} ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      {...hoverVariants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
