import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useIsMobile } from '@/hooks/useMobile';
import GradientButton from './GradientButton';
import GrowthCommandCenter from './GrowthCommandCenter';
import { ArrowRight } from 'lucide-react';

export default function PremiumHeroSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  // Stage 1: "Growth Systems for Local Businesses"
  const stage1Opacity = shouldAnimate
    ? useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0])
    : 1;
  const stage1Y = shouldAnimate ? useTransform(scrollYProgress, [0, 0.25], [0, -100]) : 0;

  // Stage 2: "More Leads. More Customers. More Sales."
  const stage2Opacity = shouldAnimate
    ? useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0])
    : 0;
  const stage2Y = shouldAnimate ? useTransform(scrollYProgress, [0.15, 0.45], [100, -100]) : 0;

  // Stage 3: "Social. Google. WhatsApp. CRM. AI."
  const stage3Opacity = shouldAnimate
    ? useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 0])
    : 0;
  const stage3Y = shouldAnimate ? useTransform(scrollYProgress, [0.4, 0.7], [100, -100]) : 0;

  // Stage 4: "Ready to Build Your Growth System?"
  const stage4Opacity = shouldAnimate
    ? useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1])
    : 0;
  const stage4Y = shouldAnimate ? useTransform(scrollYProgress, [0.65, 1], [100, 0]) : 0;

  return (
    <div ref={containerRef} className="relative" style={{ height: isMobile ? '100vh' : '400vh' }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-violet-50/50">
        {/* Background visual layers */}
        <GrowthCommandCenter scrollProgress={shouldAnimate ? scrollYProgress : undefined} shouldAnimate={shouldAnimate} />

        {/* Text content - centered overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-4xl px-4 md:px-8">
            {/* Stage 1 */}
            <motion.div
              style={
                shouldAnimate
                  ? {
                      opacity: stage1Opacity,
                      y: stage1Y,
                    }
                  : {}
              }
              initial={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Growth Systems for <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Local Businesses</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700/80 max-w-2xl mx-auto">
                Built to attract attention, generate enquiries, and convert leads.
              </p>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              style={
                shouldAnimate
                  ? {
                      opacity: stage2Opacity,
                      y: stage2Y,
                    }
                  : {}
              }
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
                More Leads.<br />
                More Customers.<br />
                More Sales.
              </h2>
              <p className="text-lg text-slate-600/80 max-w-2xl mx-auto">
                Starting from ₹3,990/week • Setup in 48 Hours • Built for Local Businesses
              </p>
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              style={
                shouldAnimate
                  ? {
                      opacity: stage3Opacity,
                      y: stage3Y,
                    }
                  : {}
              }
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Social. Google. WhatsApp. CRM. AI.
              </h2>
              <p className="text-xl text-slate-700/80 max-w-2xl mx-auto">
                Connect your content, campaigns, follow-ups, and customer journeys into one growth engine.
              </p>
            </motion.div>

            {/* Stage 4 */}
            <motion.div
              style={
                shouldAnimate
                  ? {
                      opacity: stage4Opacity,
                      y: stage4Y,
                    }
                  : {}
              }
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Ready to Build Your <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Growth System?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton href="/contact" size="lg">
                  Get Started <ArrowRight size={20} className="ml-2" />
                </GradientButton>
                <GradientButton href="/pricing" variant="secondary" size="lg">
                  View Packages
                </GradientButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - only on desktop */}
        {!isMobile && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-slate-600/60 font-medium">Scroll to explore</p>
              <svg className="w-5 h-5 text-slate-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
