import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useIsMobile } from '@/hooks/useMobile';
import GradientButton from './GradientButton';
import { ArrowRight } from 'lucide-react';

interface HeroParallaxProps {
  title: string;
  titleHighlight: string;
  subtitle: string;
  cta1Text: string;
  cta1Href: string;
  cta2Text: string;
  cta2Href: string;
  features: string[];
  visualComponent?: React.ReactNode;
}

export default function HeroParallax({
  title,
  titleHighlight,
  subtitle,
  cta1Text,
  cta1Href,
  cta2Text,
  cta2Href,
  features,
  visualComponent,
}: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  // Staged text reveals
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.1, 0.25], [40, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.2, 0.35], [40, 0]);

  const featuresOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const featuresY = useTransform(scrollYProgress, [0.3, 0.45], [40, 0]);

  const visualScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background orbs with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl"
          style={
            shouldAnimate
              ? {
                  y: useTransform(scrollYProgress, [0, 1], [0, 100]) as any,
                }
               : {}
          }
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-200/20 rounded-full blur-3xl"
          style={
            shouldAnimate
              ? {
                  y: useTransform(scrollYProgress, [0, 1], [0, -100]) as any,
                }
              : {}
          }
        />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text with staged reveals */}
        <motion.div
          style={
            shouldAnimate
              ? {
                  opacity: titleOpacity as any,
                  y: titleY as any,
                }
              : {}
          }
          initial={!shouldAnimate ? { opacity: 0, x: -40 } : undefined}
          animate={!shouldAnimate ? { opacity: 1, x: 0 } : undefined}
          transition={!shouldAnimate ? ({ duration: 0.8, ease: 'easeOut' } as any) : undefined}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {title} <span className="gradient-text">{titleHighlight}</span>
          </h1>

          <motion.p
            className="text-xl text-foreground/70 mb-8 max-w-lg"
            style={
              shouldAnimate
                ? {
                    opacity: subtitleOpacity as any,
                    y: subtitleY as any,
                  }
                : {}
            }
            initial={!shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            animate={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={!shouldAnimate ? ({ duration: 0.6, delay: 0.2 } as any) : undefined}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            style={
              shouldAnimate
                ? {
                    opacity: ctaOpacity as any,
                    y: ctaY as any,
                  }
                : {}
            }
            initial={!shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            animate={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={!shouldAnimate ? ({ duration: 0.6, delay: 0.4 } as any) : undefined}
          >
            <GradientButton href={cta1Href} size="lg">
              {cta1Text} <ArrowRight size={20} className="ml-2" />
            </GradientButton>
            <GradientButton href={cta2Href} variant="secondary" size="lg">
              {cta2Text}
            </GradientButton>
          </motion.div>

          <motion.div
            className="space-y-2 text-sm text-foreground/60"
            style={
              shouldAnimate
                ? {
                    opacity: featuresOpacity as any,
                    y: featuresY as any,
                  }
                : {}
            }
            initial={!shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            animate={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={!shouldAnimate ? ({ duration: 0.6, delay: 0.6 } as any) : undefined}
          >
            {features.map((feature, idx) => (
              <p key={idx}>{feature}</p>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Visual with parallax */}
        {visualComponent && (
          <motion.div
            className="relative hidden lg:block"
            style={
              shouldAnimate
                ? {
                    scale: visualScale as any,
                    opacity: visualOpacity as any,
                  }
                : {}
            }
            initial={!shouldAnimate ? { opacity: 0, x: 40 } : undefined}
            animate={!shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            transition={!shouldAnimate ? ({ duration: 0.8, delay: 0.2 } as any) : undefined}
          >
            {visualComponent}
          </motion.div>
        )}
      </div>
    </section>
  );
}
