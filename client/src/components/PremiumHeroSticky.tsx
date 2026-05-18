import { motion, type MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { type ComponentType, useMemo, useRef } from 'react';
import { useIsMobile } from '@/hooks/useMobile';
import GradientButton from './GradientButton';
import {
  AdsCard,
  AiCallingCard,
  BookingCard,
  CommandCenterCard,
  CrmCard,
  WhatsAppCard,
} from './GrowthCommandCenter';

type HeroStage = {
  title: string;
  description: string;
  card: ComponentType;
  cta?: boolean;
  intro?: boolean;
};

const HERO_STAGES: HeroStage[] = [
  {
    title: 'Growth Systems for Local Businesses',
    description: 'Built to attract attention, generate enquiries, and convert leads.',
    card: CommandCenterCard,
    intro: true,
  },
  {
    title: 'Launch Better Ads',
    description: 'Drive high-intent clicks and enquiries from Meta, Google, and local campaigns.',
    card: AdsCard,
  },
  {
    title: 'AI Calling Agent Qualifies Every Lead',
    description: 'An AI voice agent calls new enquiries, asks the right questions, and marks qualified leads.',
    card: AiCallingCard,
  },
  {
    title: 'WhatsApp Follow-Ups Run Automatically',
    description: 'Instant message sequences nurture leads until they are ready to book.',
    card: WhatsAppCard,
  },
  {
    title: 'Every Lead Moves Through CRM',
    description: 'New Lead → Qualified → Follow-up → Booked → Converted, all tracked in one system.',
    card: CrmCard,
  },
  {
    title: 'Bookings and Sales Become the Outcome',
    description: 'Turn ad clicks into confirmed appointments, customers, and revenue.',
    card: BookingCard,
    cta: true,
  },
];

const FLOW_STEPS = ['Ads', 'AI Call', 'WhatsApp', 'CRM', 'Booking'];

function getStageRange(index: number, total: number) {
  const segmentStart = index / total;
  const segmentEnd = (index + 1) / total;
  const transition = 0.035;

  if (index === 0) {
    return [0, segmentEnd - transition, segmentEnd + transition];
  }

  if (index === total - 1) {
    return [segmentStart - transition, segmentStart + transition, 1];
  }

  return [
    segmentStart - transition,
    segmentStart + transition,
    segmentEnd - transition,
    segmentEnd + transition,
  ];
}

function StageCopy({
  stage,
  index,
  progress,
}: {
  stage: HeroStage;
  index: number;
  progress: MotionValue<number>;
}) {
  const range = getStageRange(index, HERO_STAGES.length);
  const opacity =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [1, 1, 0] : [0, 1, 1])
      : useTransform(progress, range, [0, 1, 1, 0]);
  const y =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [0, 0, -14] : [14, 0, 0])
      : useTransform(progress, range, [14, 0, 0, -14]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity, y }}>
      <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white xl:text-6xl">
        {stage.title}
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-white/76">
        {stage.description}
      </p>

      {stage.intro && (
        <>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="/contact" size="md" className="hero-reference-primary">
              Book a Strategy Call <ArrowRight size={18} className="ml-2" />
            </GradientButton>
            <GradientButton href="/how-it-works" variant="secondary" size="md" className="hero-video-secondary">
              See How It Works
            </GradientButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/72">
            <div className="flex -space-x-2">
              {['A', 'R', 'K', 'S'].map((initial, trustIndex) => (
                <span
                  key={initial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/85 backdrop-blur"
                  style={{ zIndex: 4 - trustIndex }}
                >
                  {initial}
                </span>
              ))}
            </div>
            <div>
              <p className="font-medium text-white/82">Trusted by 150+ local businesses</p>
              <p className="mt-1 text-white/58">
                <span className="text-amber-300">★★★★★</span>
                <span className="ml-2">4.9 / 5 average rating</span>
              </p>
            </div>
          </div>
        </>
      )}

      {stage.cta && (
        <div className="mt-8 flex flex-wrap gap-3">
          <GradientButton href="/contact" size="md" className="hero-reference-primary">
            Get Started <ArrowRight size={18} className="ml-2" />
          </GradientButton>
          <GradientButton href="/pricing" variant="secondary" size="md" className="hero-video-secondary">
            View Packages
          </GradientButton>
        </div>
      )}
    </motion.div>
  );
}

function StageCard({
  stage,
  index,
  progress,
}: {
  stage: HeroStage;
  index: number;
  progress: MotionValue<number>;
}) {
  const range = getStageRange(index, HERO_STAGES.length);
  const opacity =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [1, 1, 0] : [0, 1, 1])
      : useTransform(progress, range, [0, 1, 1, 0]);
  const y =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [0, 0, -20] : [20, 0, 0])
      : useTransform(progress, range, [20, 0, 0, -20]);
  const x =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [0, 0, 16] : [16, 0, 0])
      : useTransform(progress, range, [18, 0, 0, -18]);
  const scale =
    range.length === 3
      ? useTransform(progress, range, index === 0 ? [1, 1, 0.975] : [0.975, 1, 1])
      : useTransform(progress, range, [0.975, 1, 1, 0.975]);

  const Card = stage.card;

  return (
    <motion.div
      className="absolute inset-0 flex items-center will-change-transform"
      style={{ opacity, x, y, scale }}
    >
      <Card />
    </motion.div>
  );
}

function FlowIndicator({ progress }: { progress: MotionValue<number> }) {
  const lineScale = useTransform(progress, [0.16, 0.84], [0, 1]);

  return (
    <div className="mx-auto mt-4 w-full max-w-xl">
      <div className="relative h-px overflow-hidden bg-white/20">
        <motion.div
          className="absolute inset-0 origin-left bg-[linear-gradient(90deg,rgba(34,211,238,0.9),rgba(99,102,241,0.9),rgba(139,92,246,0.9))]"
          style={{ scaleX: lineScale }}
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs font-medium text-white/60">
        {FLOW_STEPS.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/80" />
            <span>{step}</span>
            {index < FLOW_STEPS.length - 1 && <span className="hidden text-white/25 sm:inline">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroBackdrop() {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-xl"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
        }}
      />
      <motion.span
        className="absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(34,211,238,0.65)]"
        animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute right-[8%] top-[48%] h-2.5 w-2.5 rounded-full bg-blue-300/70 shadow-[0_0_20px_rgba(59,130,246,0.58)]"
        animate={{ y: [0, 16, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute right-[24%] bottom-[18%] h-2 w-2 rounded-full bg-violet-300/70 shadow-[0_0_18px_rgba(139,92,246,0.58)]"
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}

function MobileHero() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-slate-950 px-4 pb-10 pt-28 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-xl"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
        }}
      />
      <div className="relative mx-auto flex max-w-md flex-col gap-10">
        {HERO_STAGES.map((stage, index) => {
          const Card = stage.card;

          return (
            <article key={stage.title} className="space-y-5">
              <div>
                {index === 0 && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                    <Sparkles size={14} className="text-cyan-200" />
                    NIW / Next In Wave
                  </div>
                )}
                <p className="text-xs font-semibold tracking-[0.22em] text-white/50">
                  STAGE {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-white">
                  {stage.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/74">
                  {stage.description}
                </p>
              </div>

              <Card />

              {stage.cta && (
                <div className="flex flex-col gap-3">
                  <GradientButton href="/contact" size="md" className="w-full">
                    Get Started <ArrowRight size={18} className="ml-2" />
                  </GradientButton>
                  <GradientButton href="/pricing" variant="secondary" size="md" className="w-full">
                    View Packages
                  </GradientButton>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function PremiumHeroSticky() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 30,
    mass: 0.42,
  });

  if (isMobile || prefersReducedMotion) {
    return <MobileHero />;
  }

  return (
    <section ref={containerRef} className="relative -mt-20 h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroBackdrop />

        <div className="container relative z-10 grid h-full grid-cols-[minmax(0,0.9fr)_minmax(32rem,1fr)] items-center gap-14">
          <div className="relative min-h-[21rem]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
              <Sparkles size={14} className="text-cyan-200" />
              NIW / Next In Wave
            </div>

            <div className="relative min-h-[18rem]">
              {HERO_STAGES.map((stage, index) => (
                <StageCopy
                  key={stage.title}
                  stage={stage}
                  index={index}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>

          <div className="flex translate-y-12 flex-col gap-7">
            <div className="relative flex h-[32rem] items-center">
              {HERO_STAGES.map((stage, index) => (
                <StageCard
                  key={stage.title}
                  stage={stage}
                  index={index}
                  progress={smoothProgress}
                />
              ))}
            </div>
            <FlowIndicator progress={smoothProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

