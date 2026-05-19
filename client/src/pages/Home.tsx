import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [targetProgress, setTargetProgress] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const clamp = (value: number) => Math.max(0, Math.min(value, 1));
    const onScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = window.innerHeight * 1.9;
      setScrollPosition(currentY);
      setTargetProgress(clamp(currentY / maxScroll));
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
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      setHeroProgress((current) => current + (targetProgress - current) * 0.11);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [targetProgress]);

  const easedProgress = 1 - Math.pow(1 - heroProgress, 3);
  const isCompactViewport = viewportWidth < 1024;
  const cameraProgress = Math.max(0, Math.min((heroProgress - 0.18) / 0.66, 1));
  const cameraEase = 1 - Math.pow(1 - cameraProgress, 3.1);
  const sceneScale = isCompactViewport
    ? 1 + cameraEase * 0.22
    : 1 + cameraEase * 2.28;
  const sceneX = isCompactViewport
    ? `${cameraEase * -1}%`
    : `${cameraEase * -26}vw`;
  const sceneY = isCompactViewport
    ? `${cameraEase * 2.4}%`
    : `${cameraEase * 7.2}vh`;
  const copyY =
    easedProgress < 0.28 ? easedProgress * -8 : -8 - ((easedProgress - 0.28) / 0.72) * 86;
  const copyOpacity = easedProgress < 0.2 ? 1 : Math.max(0, 1 - (easedProgress - 0.2) / 0.2);
  const scrollOpacity = easedProgress < 0.16 ? 1 : Math.max(0, 1 - (easedProgress - 0.16) / 0.16);
  const scanOpacity = Math.min(easedProgress / 0.68, 1) * 0.5;
  const revealIn = Math.max(0, Math.min((easedProgress - 0.34) / 0.22, 1));
  const revealOut = Math.max(0, Math.min((easedProgress - 0.78) / 0.18, 1));
  const revealOpacity = revealIn * (1 - revealOut);
  const screenReveal = Math.max(0, Math.min((heroProgress - 0.68) / 0.24, 1));
  const screenWipeOpacity =
    screenReveal <= 0
      ? 0
      : screenReveal < 0.78
        ? 0.1 + screenReveal * 0.78
        : Math.max(0, 0.88 - (screenReveal - 0.78) / 0.22);
  const screenWipeScale = isCompactViewport
    ? 1 + screenReveal * 10.5
    : 1 + screenReveal * 13.5;
  const sceneFade = Math.max(
    0,
    Math.min((scrollPosition - viewportHeight * 2.08) / (viewportHeight * 0.34), 1),
  );
  const portalProgress = Math.max(
    0,
    Math.min((scrollPosition - viewportHeight * 1.82) / (viewportHeight * 0.72), 1),
  );
  const portalOpacity = portalProgress <= 0 ? 0 : Math.min(1, portalProgress * 1.35);
  const portalRadius = isCompactViewport
    ? 9 + portalProgress * 138
    : 6 + portalProgress * 142;
  const portalCenter = isCompactViewport ? "50% 46%" : "69% 36%";
  const portalClipPath = `circle(${portalRadius}% at ${portalCenter})`;
  const sceneOpacity = 1 - Math.max(sceneFade, Math.max(0, (portalProgress - 0.78) / 0.22));
  const workProgress = Math.max(
    0,
    Math.min((scrollPosition - viewportHeight * 2.35) / (viewportHeight * 1.25), 1),
  );
  const filmstripShift = isCompactViewport
    ? `${workProgress * -24}%`
    : `${workProgress * -54}%`;
  const workLift = `${Math.max(0, easedProgress - 0.72) * -8}rem`;

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
            clipPath: portalClipPath,
          }}
        >
          <div className="retro-portal-heading">
            <p>Selected Work</p>
            <h2>Services wired into one growth machine</h2>
          </div>

          <motion.div className="retro-portal-film" style={{ x: filmstripShift }}>
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

        <motion.div className="retro-hero-reveal" style={{ opacity: revealOpacity }}>
          <p>From attention</p>
          <span />
          <p>to booked business</p>
        </motion.div>
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
