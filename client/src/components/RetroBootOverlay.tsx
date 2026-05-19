import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RetroBootOverlay() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      className="retro-boot-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.45 }}
    >
      <div className="retro-boot-card">
        <div className="retro-boot-logo">
          <span />
          <strong>NIW</strong>
        </div>
        <p>Next In Wave, Website</p>
        <p>Version 1.02</p>
        <div className="retro-loader">
          {Array.from({ length: 18 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.18 }}
              animate={{ opacity: [0.18, 1, 1] }}
              transition={{ delay: 0.08 * index, duration: 0.18 }}
            />
          ))}
        </div>
        <small>Copyright (c) Next In Wave, 2026. All Rights Reserved.</small>
      </div>
    </motion.div>
  );
}
