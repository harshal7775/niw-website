import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useIsMobile } from '@/hooks/useMobile';
import { ArrowRight, Users, Database, MessageSquare, Calendar, TrendingUp } from 'lucide-react';

interface WorkflowNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface AIWorkflowProps {
  nodes?: WorkflowNode[];
}

export default function AIWorkflow({ nodes }: AIWorkflowProps) {
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

  const defaultNodes: WorkflowNode[] = nodes || [
    {
      id: 'lead',
      title: 'Lead Generation',
      description: 'Attract qualified leads through targeted campaigns',
      icon: <Users size={32} />,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'crm',
      title: 'CRM Management',
      description: 'Organize and track all customer interactions',
      icon: <Database size={32} />,
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Automation',
      description: 'Send personalized messages at scale',
      icon: <MessageSquare size={32} />,
      color: 'from-purple-500 to-violet-500',
    },
    {
      id: 'booking',
      title: 'Booking & Scheduling',
      description: 'Automate appointment scheduling',
      icon: <Calendar size={32} />,
      color: 'from-violet-500 to-pink-500',
    },
    {
      id: 'conversion',
      title: 'Conversion Optimization',
      description: 'Convert leads into paying customers',
      icon: <TrendingUp size={32} />,
      color: 'from-pink-500 to-red-500',
    },
  ];

  // Calculate progress for each node
  const getNodeProgress = (index: number) => {
    const startProgress = index * 0.15;
    const endProgress = startProgress + 0.2;
    return useTransform(scrollYProgress, [startProgress, endProgress], [0, 1]);
  };

  // Connector line progress
  const connectorProgress = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <section ref={containerRef} className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI-Powered Workflow
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Lead → CRM → WhatsApp → Booking → Conversion
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden lg:block">
            {/* Connector Line */}
            {shouldAnimate && (
              <svg
                className="absolute top-1/3 left-0 right-0 h-1 -z-10"
                style={{ width: '100%', height: '2px' }}
              >
                <motion.line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  style={{
                    strokeDashoffset: useTransform(
                      scrollYProgress,
                      [0, 0.8],
                      [1000, 0]
                    ),
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                    <stop offset="50%" stopColor="rgb(168, 85, 247)" />
                    <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* Nodes */}
            <div className="grid grid-cols-5 gap-4">
              {defaultNodes.map((node, idx) => {
                const nodeProgress = shouldAnimate ? getNodeProgress(idx) : undefined;
                const nodeScale = shouldAnimate
                  ? useTransform(nodeProgress, [0, 0.5, 1], [0.5, 1.1, 1])
                  : 1;
                const nodeOpacity = shouldAnimate
                  ? useTransform(nodeProgress, [0, 0.5, 1], [0, 1, 1])
                  : 1;

                return (
                  <motion.div
                    key={node.id}
                    className="flex flex-col items-center"
                    style={
                      shouldAnimate
                        ? {
                            scale: nodeScale,
                            opacity: nodeOpacity,
                          }
                        : {}
                    }
                    initial={!shouldAnimate ? { scale: 0.5, opacity: 0 } : undefined}
                    whileInView={!shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
                    transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 } : undefined}
                    viewport={{ once: true }}
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${node.color} p-1 mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <div className={`text-transparent bg-gradient-to-br ${node.color} bg-clip-text`}>
                          {node.icon}
                        </div>
                      </div>
                    </div>

                    {/* Node Label */}
                    <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                      {node.title}
                    </h3>
                    <p className="text-sm text-foreground/70 text-center">
                      {node.description}
                    </p>

                    {/* Arrow to next node */}
                    {idx < defaultNodes.length - 1 && (
                      <motion.div
                        className="mt-4 text-foreground/40"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight size={20} className="rotate-90" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical stacked layout */}
          <div className="lg:hidden space-y-8">
            {defaultNodes.map((node, idx) => (
              <motion.div
                key={node.id}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Node Circle */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${node.color} p-1 flex items-center justify-center shadow-lg`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className={`text-transparent bg-gradient-to-br ${node.color} bg-clip-text`}>
                        {node.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {node.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {node.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < defaultNodes.length - 1 && (
                  <div className="flex-shrink-0 flex items-center justify-center text-foreground/40">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating UI Cards with Parallax */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: '45% Faster',
              description: 'Lead processing with automation',
              metric: true,
            },
            {
              title: '3x Better',
              description: 'Conversion rates with AI optimization',
              metric: true,
            },
            {
              title: '24/7 Active',
              description: 'Automated customer engagement',
              metric: false,
            },
          ].map((card, idx) => {
            const cardY = shouldAnimate
              ? useTransform(scrollYProgress, [0, 1], [idx * 20, -idx * 20])
              : 0;

            return (
              <motion.div
                key={idx}
                className="glass-card p-6"
                style={shouldAnimate ? { y: cardY } : {}}
                initial={!shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                whileInView={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                transition={!shouldAnimate ? { duration: 0.6, delay: idx * 0.1 } : undefined}
                viewport={{ once: true }}
              >
                <p className="text-sm text-cyan-600 font-semibold mb-2">
                  {card.title}
                </p>
                <p className="text-foreground/70">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
