import { motion, useTransform, MotionValue } from 'framer-motion';
import { TrendingUp, MessageSquare, Users, Zap, Globe, BarChart3, Calendar, Brain } from 'lucide-react';

interface GrowthCommandCenterProps {
  scrollProgress: MotionValue<number> | undefined;
  shouldAnimate: boolean;
}

export default function GrowthCommandCenter({ scrollProgress, shouldAnimate }: GrowthCommandCenterProps) {
  // Layer parallax transforms
  const bgY = scrollProgress ? useTransform(scrollProgress, [0, 1], [0, 150]) : 0;
  const dashboardY = scrollProgress ? useTransform(scrollProgress, [0, 1], [0, -80]) : 0;
  const cardsY = scrollProgress ? useTransform(scrollProgress, [0, 1], [0, -120]) : 0;
  const aiCardY = scrollProgress ? useTransform(scrollProgress, [0, 1], [0, 100]) : 0;

  const bgOpacity = scrollProgress ? useTransform(scrollProgress, [0, 0.3], [1, 0.3]) : 1;
  const dashboardOpacity = scrollProgress ? useTransform(scrollProgress, [0.1, 0.4], [0, 1]) : 1;
  const cardsOpacity = scrollProgress ? useTransform(scrollProgress, [0.2, 0.5], [0, 1]) : 1;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft mesh gradient background */}
      <motion.div
        className="absolute inset-0"
        style={
          shouldAnimate
            ? {
                y: bgY,
                opacity: bgOpacity,
              }
            : {}
        }
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-violet-50/80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-200/15 to-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-blue-200/10 to-cyan-200/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Main dashboard panel - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-72"
        style={
          shouldAnimate
            ? {
                y: dashboardY,
                opacity: dashboardOpacity,
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          {/* Glass card background */}
          <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl" />

          {/* Dashboard content */}
          <div className="relative p-6 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-cyan-600/80 font-semibold tracking-wide">AI GROWTH ENGINE</p>
                <h3 className="text-sm font-bold text-slate-900">Command Center</h3>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/30 to-violet-400/30 flex items-center justify-center">
                <Brain size={16} className="text-cyan-600" />
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/40 rounded-lg p-2 backdrop-blur">
                <p className="text-xs text-slate-600/70">Leads</p>
                <p className="text-lg font-bold text-slate-900">1,247</p>
              </div>
              <div className="bg-white/40 rounded-lg p-2 backdrop-blur">
                <p className="text-xs text-slate-600/70">Conversion</p>
                <p className="text-lg font-bold text-slate-900">34%</p>
              </div>
            </div>

            {/* Status indicators */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-slate-600">All systems active</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-xs text-slate-600">AI optimizing</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards - left side */}
      <motion.div
        className="absolute top-1/3 left-12 w-56 h-40"
        style={
          shouldAnimate
            ? {
                y: cardsY,
                opacity: cardsOpacity,
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/70 shadow-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-400/30 flex items-center justify-center">
                <Users size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600/70 font-semibold">Lead Flow</p>
                <p className="text-sm font-bold text-slate-900">+45%</p>
              </div>
            </div>
            <div className="w-full h-1 bg-slate-200/50 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards - right side */}
      <motion.div
        className="absolute top-2/3 right-12 w-56 h-40"
        style={
          shouldAnimate
            ? {
                y: cardsY,
                opacity: cardsOpacity,
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/70 shadow-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400/30 to-purple-400/30 flex items-center justify-center">
                <MessageSquare size={20} className="text-violet-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600/70 font-semibold">WhatsApp</p>
                <p className="text-sm font-bold text-slate-900">892 sent</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Engagement</span>
                <span>68%</span>
              </div>
              <div className="w-full h-1 bg-slate-200/50 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Assistant card - bottom right */}
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-32"
        style={
          shouldAnimate
            ? {
                y: aiCardY,
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg border border-white/60 shadow-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 flex items-center justify-center">
                <Zap size={16} className="text-emerald-600" />
              </div>
              <p className="text-xs font-semibold text-slate-900">AI Assistant</p>
            </div>
            <p className="text-xs text-slate-600/80 leading-relaxed">
              Automating customer follow-ups and lead qualification 24/7
            </p>
          </div>
        </div>
      </motion.div>

      {/* CRM Pipeline card - bottom left */}
      <motion.div
        className="absolute bottom-32 left-16 w-48 h-32"
        style={
          shouldAnimate
            ? {
                y: aiCardY,
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg border border-white/60 shadow-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/40 to-cyan-400/40 flex items-center justify-center">
                <BarChart3 size={16} className="text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-slate-900">CRM Pipeline</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600/70">Qualified</span>
                <span className="font-bold text-slate-900">324</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-600/70">Converted</span>
                <span className="font-bold text-slate-900">89</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
