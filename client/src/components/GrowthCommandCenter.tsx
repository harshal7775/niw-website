import { motion } from 'framer-motion';
import {
  BadgeCheck,
  BarChart3,
  CalendarCheck2,
  CheckCircle2,
  Megaphone,
  MessageCircle,
  PhoneCall,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import type { ReactNode } from 'react';

function GlassPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2rem] border border-white/14 bg-slate-950/[0.09] shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.015))]" />
      <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-white/45" />
      <div className="relative">{children}</div>
    </div>
  );
}

function MetricPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <p className="text-[11px] font-medium text-white/48">{label}</p>
      <p className="mt-1 text-base font-semibold tabular-nums text-white">{value}</p>
    </div>
  );
}

export function CommandCenterCard() {
  return (
    <GlassPanel className="min-h-[21rem] max-w-[42rem]">
      <div className="flex min-h-[21rem] flex-col p-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            AI Growth Command Center
          </h3>
          <div className="flex items-center gap-2 text-xs text-white/62">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Live · All Systems Operational
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[3.5rem_minmax(0,1fr)]">
          <div className="hidden flex-col items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.025] py-2.5 lg:flex">
            {['⌂', '⌁', '◔', '◌', '⌗'].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`flex h-8 w-8 items-center justify-center rounded-2xl text-sm ${
                  index === 0
                    ? 'bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(99,102,241,0.3))] text-white'
                    : 'text-white/58'
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/76">Ads Performance</p>
                <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[11px] text-emerald-200">↑ 28%</span>
              </div>
              <div className="mt-3 flex h-14 items-end gap-1.5">
                {[22, 34, 31, 48, 64, 56, 73, 79].map((height) => (
                  <span
                    key={height}
                    className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(56,189,248,0.92),rgba(99,102,241,0.88))]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-sm text-white/74">
                <span>₹12,540 Spend</span>
                <span>185 Leads</span>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/76">AI Calling Agent</p>
                <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[11px] text-emerald-200">Live</span>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/[0.06] shadow-[0_0_32px_rgba(56,189,248,0.18)]">
                  <div className="flex items-center gap-1">
                    {[10, 18, 28, 18, 10].map((height) => (
                      <span key={height} className="w-1 rounded-full bg-cyan-200" style={{ height }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm text-white/74">
                <span>128 Calls Today</span>
                <span>42 Qualified</span>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/76">WhatsApp Automation</p>
                <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[11px] text-emerald-200">Live</span>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/[0.06] shadow-[0_0_32px_rgba(52,211,153,0.18)]">
                  <MessageCircle size={28} className="text-emerald-100" />
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm text-white/74">
                <span>312 Conversations</span>
                <span>67 Qualified</span>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/76">CRM Pipeline</p>
                <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[11px] text-emerald-200">↑ 32%</span>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex-1 space-y-2">
                  {[100, 74, 48, 26].map((width, index) => (
                    <div key={width} className="h-3 rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(56,189,248,0.92),rgba(99,102,241,0.9))]"
                        style={{ width: `${width}%`, opacity: 1 - index * 0.14 }}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-1 text-right text-sm text-white/72">
                  <p>312</p>
                  <p>156</p>
                  <p>67</p>
                  <p>23</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3 sm:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/76">Booking Secured</p>
                <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[11px] text-emerald-200">↑ 21%</span>
              </div>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div className="flex h-10 flex-1 items-end gap-2">
                  {[20, 28, 18, 42, 30, 46, 24, 56, 72].map((height) => (
                    <span
                      key={height}
                      className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(56,189,248,0.92),rgba(99,102,241,0.9))]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">23</p>
                  <p className="text-xs text-white/54">Bookings This Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

export function AdsCard() {
  return (
    <GlassPanel className="min-h-[22rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-100">
              <Megaphone size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/48">Ads / Campaign</p>
              <p className="text-base font-semibold text-white">Local intent active</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Active
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetricPill label="Clicks" value="1,284" />
          <MetricPill label="Leads" value="148" />
          <MetricPill label="Enquiries" value="92" />
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between text-sm text-white/52">
            <span>Lead velocity</span>
            <span className="font-semibold text-white/88">+41%</span>
          </div>
          <div className="mt-4 flex h-28 items-end gap-2.5">
            {[18, 28, 24, 42, 48, 66, 78].map((height, index) => (
              <div
                key={height}
                className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(56,189,248,0.96),rgba(99,102,241,0.92))]"
                style={{ height: `${height}%`, opacity: 0.46 + index * 0.08 }}
              />
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

export function AiCallingCard() {
  return (
    <GlassPanel className="min-h-[24rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(103,232,249,0.82),rgba(99,102,241,0.74))] text-white shadow-[0_12px_24px_rgba(79,112,196,0.22)]">
              <motion.span
                className="absolute inset-0 rounded-2xl border border-cyan-300/80"
                animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <PhoneCall size={19} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/48">AI Calling Agent</p>
              <p className="text-base font-semibold text-white">Outgoing call in progress</p>
            </div>
          </div>
          <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            Live
          </span>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/48">Lead</p>
              <p className="mt-1 text-base font-semibold text-white">Aarav Mehta</p>
            </div>
            <p className="text-sm font-semibold tabular-nums text-white/72">00:47</p>
          </div>

          <div className="mt-5 flex h-10 items-center gap-1.5">
            {[0.4, 0.72, 0.56, 1, 0.68, 0.88, 0.48, 0.76, 0.42, 0.62].map((scale, index) => (
              <motion.span
                key={`${scale}-${index}`}
                className="w-2 rounded-full bg-[linear-gradient(180deg,rgba(34,211,238,0.95),rgba(99,102,241,0.9))]"
                animate={{ scaleY: [0.35, scale, 0.45] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.08,
                }}
                style={{ height: '100%', transformOrigin: 'center' }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {['Calling Lead', 'Call Answered', 'Lead Qualified', 'Interested'].map((status, index) => (
            <div
              key={status}
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium ${
                index === 3
                  ? 'border border-emerald-300/18 bg-emerald-300/10 text-emerald-200'
                  : 'border border-white/10 bg-white/[0.035] text-white/78'
              }`}
            >
              <CheckCircle2 size={15} className={index === 3 ? 'text-emerald-200' : 'text-cyan-200'} />
              <span>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

export function WhatsAppCard() {
  return (
    <GlassPanel className="min-h-[24rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-100">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/48">WhatsApp Automation</p>
              <p className="text-base font-semibold text-white">Instant follow-up</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-200">Delivered · Replied</span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="mr-10 rounded-[1.25rem] rounded-tl-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/78">
            Hi Aarav, thanks for your enquiry. Want the fastest appointment slot?
          </div>
          <div className="ml-10 rounded-[1.25rem] rounded-tr-md bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(167,139,250,0.2))] px-4 py-3 text-sm text-white/84">
            Yes, please send available times.
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-sm text-white/52">
            <span>Automated sequence</span>
            <span className="font-semibold text-white/88">Step 3 / 4</span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.88),rgba(34,211,238,0.92))]" />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-white/52">Response status</span>
            <span className="font-semibold text-white/88">Engaged · 82%</span>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

export function CrmCard() {
  return (
    <GlassPanel className="min-h-[22rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-300/12 text-indigo-100">
            <BarChart3 size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-white/48">CRM Pipeline</p>
            <p className="text-base font-semibold text-white">Lead movement</p>
          </div>
        </div>

        <div className="mt-7 space-y-4">
          {[
            ['New Lead', '148', 100],
            ['Qualified', '92', 82],
            ['Follow-up', '54', 63],
            ['Booked', '18', 39],
            ['Converted', '11', 24],
          ].map(([stage, count, width]) => (
            <div key={stage as string} className="grid grid-cols-[5.5rem_1fr_2rem] items-center gap-3">
              <span className="text-sm font-medium text-white/52">{stage}</span>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(56,189,248,0.94),rgba(99,102,241,0.9))]"
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              <span className="text-right text-sm font-semibold tabular-nums text-white/88">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

export function BookingCard() {
  return (
    <GlassPanel className="min-h-[22rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-300/12 text-violet-100">
              <CalendarCheck2 size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/48">Booking / Conversion</p>
              <p className="text-base font-semibold text-white">Revenue secured</p>
            </div>
          </div>
          <TrendingUp size={20} className="text-violet-200" />
        </div>

        <div className="mt-7 space-y-3">
          {[
            'Booking Secured',
            'Appointment Confirmed',
            'Customer Acquired',
            'Conversion Complete',
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-medium ${
                index === 3
                  ? 'border border-violet-300/18 bg-violet-300/10 text-violet-200'
                  : 'border border-white/10 bg-white/[0.035] text-white/78'
              }`}
            >
              <BadgeCheck size={16} className={index === 3 ? 'text-violet-200' : 'text-cyan-200'} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

export function FinalOverviewCard() {
  return (
    <GlassPanel className="min-h-[25rem]">
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-cyan-200/80">
              NIW SYSTEM OVERVIEW
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              One connected growth engine
            </h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(103,232,249,0.25),rgba(167,139,250,0.22))] text-cyan-100">
            <Sparkles size={21} />
          </div>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-5">
          {[
            ['Ads', 'Clicks'],
            ['AI Call', 'Qualified'],
            ['WhatsApp', 'Nurtured'],
            ['CRM', 'Tracked'],
            ['Booking', 'Converted'],
          ].map(([title, label], index) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-4 text-center">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1 text-xs text-white/48">{label}</p>
              {index < 4 && (
                <div className="absolute right-[-0.9rem] top-1/2 hidden h-px w-4 bg-gradient-to-r from-cyan-300 to-violet-300 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/[0.045] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/48">System output</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-white">18 bookings today</p>
            </div>
            <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              Healthy flow
            </span>
          </div>
          <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-white/10">
            <div className="w-[22%] bg-cyan-300" />
            <div className="w-[20%] bg-sky-400" />
            <div className="w-[18%] bg-blue-400" />
            <div className="w-[18%] bg-indigo-400" />
            <div className="w-[22%] bg-violet-400" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
