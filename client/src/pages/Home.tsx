import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import RetroBootOverlay from "@/components/RetroBootOverlay";

const selectedWork = [
  {
    title: "Ads engine",
    copy: "Meta and Google campaigns tuned around real enquiries, local intent, and booked calls — not vanity clicks.",
  },
  {
    title: "AI calling agent",
    copy: "An always-on voice agent that answers, qualifies, follows up, and pushes serious leads toward booking.",
  },
  {
    title: "WhatsApp follow-up",
    copy: "Fast response flows, reminders, and reactivation sequences so interested leads do not disappear.",
  },
  {
    title: "Landing pages",
    copy: "Conversion-focused pages with clear offers, local trust, tracking, and CRM-ready lead capture.",
  },
  {
    title: "CRM pipelines",
    copy: "A clean system for every enquiry: source, status, follow-up, appointment, and revenue visibility.",
  },
  {
    title: "Local SEO",
    copy: "Google Business, content, and local search signals shaped to turn nearby demand into inbound leads.",
  },
];

const capabilities = [
  "Meta & Google Ads",
  "AI Calling Agents",
  "WhatsApp Automation",
  "CRM Pipelines",
  "Landing Pages",
  "SEO & Content",
];

const flowSteps = [
  "Attention",
  "Qualification",
  "Follow-up",
  "Booking",
];

export default function Home() {
  const [visualState, setVisualState] = useState({ progress: 0, scroll: 0 });
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const targetProgressRef = useRef(0);
  const targetScrollRef = useRef(0);
  const visualStateRef = useRef({ progress: 0, scroll: 0 });
  const animationFrameRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const clamp = (value: number) => Math.max(0, Math.min(value, 1));
    const startVisualLoop = () => {
      if (animationFrameRef.current) return;

      lastFrameTimeRef.current = performance.now();
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const tick = (time: number) => {
      const frameScale = Math.min((time - lastFrameTimeRef.current) / 16.67, 2.2);
      lastFrameTimeRef.current = time;

      const current = visualStateRef.current;
      const progressTarget = targetProgressRef.current;
      const scrollTarget = targetScrollRef.current;
      const progressRate = progressTarget > current.progress ? 0.17 : 0.24;
      const scrollRate = scrollTarget > current.scroll ? 0.15 : 0.22;
      const nextProgress =
        current.progress + (progressTarget - current.progress) * Math.min(progressRate * frameScale, 1);
      const nextScroll =
        current.scroll + (scrollTarget - current.scroll) * Math.min(scrollRate * frameScale, 1);
      const settledProgress =
        Math.abs(progressTarget - nextProgress) < 0.001 ? progressTarget : nextProgress;
      const settledScroll =
        Math.abs(scrollTarget - nextScroll) < 0.6 ? scrollTarget : nextScroll;
      const nextState = {
        progress: settledProgress,
        scroll: settledScroll,
      };

      visualStateRef.current = nextState;
      setVisualState(nextState);

      if (
        Math.abs(progressTarget - settledProgress) > 0.001 ||
        Math.abs(scrollTarget - settledScroll) > 0.6
      ) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
      } else {
        animationFrameRef.current = 0;
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = window.innerHeight * 0.86;
      const nextProgress = clamp(currentY / maxScroll);
      targetProgressRef.current = nextProgress;
      targetScrollRef.current = currentY;
      startVisualLoop();
    };
    const onResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const clamp = (value: number) => Math.max(0, Math.min(value, 1));
  const smoothStep = (value: number) => value * value * (3 - 2 * value);
  const slowThenFast = (value: number) => {
    const held = clamp(value);
    if (held < 0.34) {
      const slow = held / 0.34;
      return slow * slow * 0.14;
    }

    const punch = (held - 0.34) / 0.66;
    return 0.14 + (1 - Math.pow(1 - punch, 3.4)) * 0.86;
  };
  const visualProgress = visualState.progress;
  const visualScrollPosition = visualState.scroll;
  const easedProgress = 1 - Math.pow(1 - visualProgress, 3);
  const isCompactViewport = viewportWidth < 1024;
  const cameraProgress = clamp((visualProgress - 0.03) / 0.62);
  const cameraEase = slowThenFast(cameraProgress);
  const insideProgress = smoothStep(
    clamp((visualScrollPosition - viewportHeight * 0.46) / (viewportHeight * 0.82)),
  );
  const sceneScale = isCompactViewport
    ? 1 + cameraEase * 0.22
    : 1 + cameraEase * 2.12;
  const sceneX = isCompactViewport
    ? `${cameraEase * -1}%`
    : `${cameraEase * -23.8}vw`;
  const sceneY = isCompactViewport
    ? `${cameraEase * 2.4}%`
    : `${cameraEase * 2.4}vh`;
  const copyY =
    easedProgress < 0.28 ? easedProgress * -8 : -8 - ((easedProgress - 0.28) / 0.72) * 86;
  const copyOpacity = easedProgress < 0.2 ? 1 : Math.max(0, 1 - (easedProgress - 0.2) / 0.2);
  const scrollOpacity = easedProgress < 0.16 ? 1 : Math.max(0, 1 - (easedProgress - 0.16) / 0.16);
  const scanOpacity = Math.min(easedProgress / 0.68, 1) * 0.5;
  const screenWipeOpacity = 0;
  const screenWipeScale = 1;
  const portalProgress = smoothStep(clamp((visualProgress - 0.39) / 0.31));
  const portalExit = smoothStep(
    clamp((visualScrollPosition - viewportHeight * 1.22) / (viewportHeight * 0.22)),
  );
  const portalOpen = smoothStep(clamp((portalProgress - 0.02) / 0.12));
  const portalOpacity = portalOpen * (1 - portalExit);
  const portalContentOpacity = smoothStep(clamp((portalProgress - 0.38) / 0.24)) * (1 - portalExit);
  const portalScale = isCompactViewport ? 0.32 + portalProgress * 0.68 : 0.68 + portalProgress * 0.32;
  const portalX = isCompactViewport ? `${(1 - portalProgress) * 0}vw` : `${(1 - portalProgress) * 5.8}vw`;
  const portalY = isCompactViewport ? `${(1 - portalProgress) * 3}vh` : `${(1 - portalProgress) * 1.2}vh`;
  const portalRadius = isCompactViewport ? `${(1 - portalProgress) * 2.4}rem` : `${(1 - portalProgress) * 4.2}rem`;
  const sceneOpacity = 1 - smoothStep(clamp((portalProgress - 0.62) / 0.22));
  const workProgress = Math.max(insideProgress, smoothStep(clamp((visualProgress - 0.48) / 0.26)));
  const filmstripShift = isCompactViewport
    ? `${workProgress * -24}%`
    : `${workProgress * -54}%`;
  const workLift = `${insideProgress * -5.5}rem`;

  return (
    <div className="retro-page">
      <RetroBootOverlay />

      <section id="home" className="retro-hero">
        <motion.div
          className="retro-hero-scene"
          style={{ opacity: sceneOpacity }}
        >
          <motion.img
            className="retro-hero-image"
            src="/niw-hero-final-crt.png"
            alt=""
            aria-hidden="true"
            style={{ scale: sceneScale, x: sceneX, y: sceneY }}
          />
        </motion.div>
        <div className="retro-hero-fog" />
        <div className="retro-hero-noise" />
        <motion.div className="retro-hero-scan" style={{ opacity: scanOpacity }} />
        <motion.div
          className="retro-screen-wipe"
          style={{
            opacity: screenWipeOpacity,
            scale: screenWipeScale,
          }}
        />

        <motion.div
          className="retro-portal-preview"
          style={{
            opacity: portalOpacity,
            scale: portalScale,
            x: portalX,
            y: portalY,
            borderRadius: portalRadius,
          }}
        >
          <motion.div
            className="retro-portal-heading"
            style={{
              opacity: portalContentOpacity,
              y: `${(1 - portalContentOpacity) * 0.2}rem`,
            }}
          >
            <p>Selected Work</p>
            <h2>Services wired into one growth machine</h2>
          </motion.div>

          <motion.div
            className="retro-portal-film"
            style={{
              x: filmstripShift,
              opacity: portalContentOpacity,
              y: `${(1 - portalContentOpacity) * 0.2}rem`,
            }}
          >
            {selectedWork.map((item, index) => (
              <article key={`portal-${item.title}`} className="retro-portal-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>

        <div className="retro-hero-inner">
          <motion.div className="retro-hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
            <h1 className="retro-title-desktop">
              A Creative
              <br />
              Growth Systems
              <br />
              Studio,
              <br />
              Plugged into
              <br />
              Local Growth
            </h1>

            <h1 className="retro-title-compact">
              A Creative
              <br />
              Growth Systems Studio,
              <br />
              Plugged into Growth
            </h1>

            <p>
              Built to attract attention, generate enquiries, qualify leads, and turn follow-up into confirmed bookings.
            </p>

            <a
              href="#selected-work"
              className="retro-scroll-link"
              style={{ opacity: scrollOpacity }}
            >
              Scroll to inspect our growth systems
              <span className="retro-hand-cues">☞ ☞ ☞</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div className="retro-hero-object" aria-hidden="true" />
        </div>
      </section>

      <motion.section
        id="selected-work"
        className="retro-section retro-work"
        style={{ y: workLift }}
      >
        <div className="retro-section-heading">
          <p>Selected Work</p>
          <h2>Services wired into one growth machine</h2>
        </div>

        <motion.div className="retro-work-grid" style={{ x: filmstripShift }}>
          {selectedWork.map((item, index) => (
            <motion.article
              key={item.title}
              className="retro-work-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <section className="retro-transition-panel">
        <div className="retro-transition-copy">
          <p>The system flow</p>
          <h2>Every lead moves through one connected journey.</h2>
        </div>

        <div className="retro-transition-rail">
          {flowSteps.map((step, index) => (
            <span key={step}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {step}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="retro-section retro-story">
        <div className="retro-story-copy">
          <p>Making local growth more measurable, responsive, and alive</p>
          <h2>
            NIW combines creative marketing with automation systems that keep working after the click.
          </h2>
        </div>

        <div className="retro-story-body">
          <p>
            We build growth engines for local businesses: ads that attract the right people, pages that convert,
            AI agents that qualify enquiries, WhatsApp sequences that follow up instantly, and dashboards that show
            what is actually moving revenue.
          </p>
          <p>
            The goal is simple: fewer missed leads, faster response times, cleaner pipelines, and more confirmed
            customers from the same marketing spend.
          </p>
        </div>
      </section>

      <section className="retro-section retro-capabilities">
        <div className="retro-section-heading">
          <p>Capabilities</p>
          <h2>Everything needed to move a lead from click to booking</h2>
        </div>

        <div className="retro-capability-grid">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="retro-section retro-contact">
        <p>Ready to build your growth system?</p>
        <h2>Let’s turn your next wave of attention into booked business.</h2>
        <div className="retro-contact-actions">
          <a href="#contact">Book a strategy call</a>
          <a href="#selected-work">See the system</a>
        </div>
      </section>
    </div>
  );
}
