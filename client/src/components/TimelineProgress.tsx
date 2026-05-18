import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useIsMobile } from '@/hooks/useMobile';

interface TimelineItem {
  period: string;
  milestone: string;
  description: string;
}

interface TimelineProgressProps {
  items: TimelineItem[];
}

export default function TimelineProgress({ items }: TimelineProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  // Progress line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="surface-band py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Growth Timeline
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Here's a typical timeline for seeing results
          </p>
        </div>

        <div className="relative mt-16">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500/20 to-violet-600/20"></div>

            {/* Animated progress line */}
            {shouldAnimate && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 to-violet-600"
                style={{ height: lineHeight as any }}
              />
            )}
          </div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {items.map((item, idx) => {
              const itemProgress = useTransform(scrollYProgress, [idx * 0.15, (idx + 1) * 0.15], [0, 1]);
              const itemScale = useTransform(itemProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
              const itemOpacity = useTransform(itemProgress, [0, 0.3, 1], [0, 1, 1]);

              return (
                <motion.div
                  key={idx}
                  className="relative"
                  style={
                    shouldAnimate
                      ? {
                          scale: itemScale as any,
                          opacity: itemOpacity as any,
                        }
                      : {}
                  }
                  initial={!shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
                  whileInView={!shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 } : undefined}
                  viewport={{ once: true }}
                >
                  <div className={`flex gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-background border-4 border-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-6 z-10">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"></div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <div className="glass-card p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center flex-shrink-0 md:hidden">
                            <span className="text-lg font-bold text-foreground">{item.period}</span>
                          </div>
                          <div className="hidden md:block">
                            <p className="text-sm text-cyan-600 font-semibold">{item.period}</p>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.milestone}
                        </h3>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="md:hidden flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 mt-6"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
