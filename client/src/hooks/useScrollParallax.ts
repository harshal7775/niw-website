import { useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useIsMobile } from './useMobile';

export function useScrollParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center'],
  });

  // Disable parallax on mobile or reduced motion
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  return {
    ref,
    scrollYProgress: shouldAnimate ? scrollYProgress : undefined,
    shouldAnimate,
    isMobile,
    prefersReducedMotion,
  };
}

export function useParallaxTransform(
  scrollYProgress: any,
  inputRange: number[],
  outputRange: (string | number)[]
) {
  return useTransform(scrollYProgress, inputRange, outputRange);
}
