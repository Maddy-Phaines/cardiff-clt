"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Music,
  Zap,
  Users,
  Leaf,
  Heart,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

import { EmblaCarousel } from "@/components/ui/EmblaCarousel";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { classes } from "@/data/classes";
import { getNextDate, formatDateLong } from "@/lib/dates";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={
        !shouldReduceMotion && isInView ? { opacity: 1, y: 0 } : undefined
      }
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePageSections() {
  const featuredClass = classes[0];
  const allDates = featuredClass.terms.flatMap((t) => t.dates);
  const nextDate = getNextDate(allDates);

  return (
    <>
      <div className="border-y border-[#1e2a3a]/8 bg-[#faf8f5]">
        <div
          className="max-w-5xl mx-auto px-6 py-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "Bristol School of Biodanza certified",
              "First class just £5",
              "All abilities welcome",
              "Cardiff & South Wales",
            ].map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[0.8125rem] text-[#1e2a3a]/70"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block shrink-0"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeIn>
              <SectionEyebrow text="What is Biodanza?" />
              <h2
                className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.06] tracking-[-0.02em] text-[#1e2a3a] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                Music, movement, and human connection
              </h2>
              <p
                className="text-[#1e2a3a]/60 text-[1.0625rem] leading-relaxed mb-10 max-w-[50ch]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Biodanza is a system of human integration and organic renewal.
                Through carefully chosen music and guided movement exercises,
                you reconnect with your body, your emotions, and the people
                around you. No experience or dance ability needed — just a
                willingness to show up.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: Music,
                    label: "Music",
                    desc: "Every exercise guided by curated music",
                  },
                  {
                    icon: Zap,
                    label: "Movement",
                    desc: "Free, intuitive movement at your own pace",
                  },
                  {
                    icon: Users,
                    label: "Encounter",
                    desc: "Shared experience that deepens connection",
                  },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label}>
                    <div
                      className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center mb-3"
                      aria-hidden="true"
                    >
                      <Icon size={16} className="text-rose-500" />
                    </div>
                    <p
                      className="text-[0.8125rem] font-semibold text-[#1e2a3a] mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[0.75rem] text-[#1e2a3a]/65 leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[0.8125rem] text-[#1e2a3a] border border-[#1e2a3a]/20 rounded-full px-5 py-2.5 hover:border-[#1e2a3a]/50 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Discover more about Biodanza
                <ChevronRight size={14} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15} className="relative">
              <div className="relative aspect-4/5 w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(30,42,58,0.14)]">
                <Image
                  src="/images/group-happy1773672597.webp"
                  alt="People dancing joyfully in a Biodanza session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-[#1e2a3a]/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -bottom-4 left-4 lg:left-0 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_28px_rgba(30,42,58,0.10)] max-w-[220px]">
                <p
                  className="text-[1rem] italic text-[#1e2a3a]/65 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &ldquo;No experience needed — just a willingness to
                  move.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#F6F2EC]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionEyebrow text="The Benefits" center />
              <h2
                className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.06] tracking-[-0.02em] text-[#1e2a3a]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                A practice that nurtures the whole person
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Leaf,
                title: "Reduce Stress & Restore Balance",
                body: "Modern life places constant pressure on our nervous systems. Biodanza creates space to release tension and restore emotional balance through music and movement.",
                bg: "#f0f4f0",
              },
              {
                icon: Heart,
                title: "Reconnect With Yourself",
                body: "Attend regular sessions and rediscover your inner vitality. Many people describe feeling more at home in their bodies and more in tune with what truly matters.",
                bg: "#fdf2f0",
              },
              {
                icon: Sparkles,
                title: "Awaken Joy & Vitality",
                body: "The unique blend of music, movement, and human encounter stimulates aliveness, creativity, and a confidence that stays with you long after the session ends.",
                bg: "#faf8f0",
              },
            ].map(({ icon: Icon, title, body, bg }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="rounded-3xl p-8 h-full"
                  style={{ backgroundColor: bg }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-[#1e2a3a]" />
                  </div>
                  <h3
                    className="text-[1.2rem] leading-snug text-[#1e2a3a] mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[0.875rem] text-[#1e2a3a]/70 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-16 lg:gap-20 items-center">
            <FadeIn>
              <SectionEyebrow text="Your Guide" />
              <h2
                className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.06] tracking-[-0.02em] text-[#1e2a3a] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                I found Biodanza when{" "}
                <span className="italic font-light text-rose-500">
                  I needed it most
                </span>
              </h2>
              <p
                className="text-[#1e2a3a]/60 text-[1.0625rem] leading-relaxed mb-5 max-w-[52ch]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                In 2016, feeling lonely and disconnected, I attended my first
                session. From that moment I felt a freedom in my body I
                hadn&apos;t known before — the freedom to move without
                judgement, and to connect without words.
              </p>
              <p
                className="text-[#1e2a3a]/60 text-[1.0625rem] leading-relaxed mb-8 max-w-[52ch]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Eight years on, I&apos;m a teacher-in-supervision with the
                Bristol School of Biodanza. I share this practice simply because
                of how deeply it has supported me — and I hope to offer others
                that same opportunity.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Bristol School of Biodanza",
                  "4+ years teaching",
                  "40+ festivals facilitated",
                  "All levels welcome",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-1.5 bg-[#1e2a3a]/[0.05] rounded-full px-4 py-2 text-[0.75rem] text-[#1e2a3a]/65 font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <CheckCircle
                      size={11}
                      className="text-rose-400 flex-shrink-0"
                      aria-hidden={true}
                    />
                    {cred}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-[#1e2a3a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:bg-[#2d3f55] transition-all hover:-translate-y-px"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Read my full story
                <span
                  className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative w-full max-w-xs mx-auto lg:mx-0 lg:ml-auto">
                <div
                  className="absolute -top-4 -right-4 w-full h-full rounded-t-[999px] rounded-b-3xl border border-rose-300/40 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative aspect-3/4 rounded-t-[999px] rounded-b-3xl overflow-hidden shadow-[0_24px_64px_rgba(30,42,58,0.16)]">
                  <Image
                    src="/images/c-profile-cropped.png"
                    alt="Caroline, Biodanza teacher"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 60vw, 25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-tr from-amber-500/20 via-orange-400/10 to-transparent mix-blend-soft-light"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#1e2a3a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionEyebrow text="Next Session" />
              <h2
                className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.06] tracking-[-0.02em] text-white mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                Come and join{" "}
                <span className="italic font-light text-rose-300">
                  a session
                </span>
              </h2>
              <p
                className="text-white/70 text-[1.0625rem] leading-relaxed max-w-[38ch] mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Everyone is welcome. No experience needed. Your first class is
                just £5 — come and see what Biodanza can do for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:biodanzawithcaroline@gmail.com?subject=Booking enquiry"
                  className="inline-flex items-center gap-2.5 bg-white text-[#1e2a3a] rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:bg-[#f5f0e6] transition-all hover:-translate-y-px"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Reserve your place
                  <span
                    className="w-5 h-5 rounded-full bg-[#1e2a3a]/10 flex items-center justify-center text-xs"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/classes"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-[0.8125rem]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View all dates
                  <ChevronRight size={13} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8">
                <div
                  className="text-white/35 text-[0.7rem] uppercase tracking-[0.2em] mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {featuredClass.terms[0]?.name ?? "Upcoming"}
                </div>
                <h3
                  className="text-white text-[1.75rem] leading-tight mb-7"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                  }}
                >
                  {featuredClass.title}
                </h3>
                <div
                  className="space-y-4 mb-8"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {nextDate && (
                    <div className="flex items-center gap-3 text-white/60 text-[0.875rem]">
                      <Calendar
                        size={15}
                        className="text-rose-400 flex-shrink-0"
                        aria-hidden={true}
                      />
                      <span>
                        Next session:{" "}
                        <span className="text-white/85">
                          {formatDateLong(nextDate)}
                        </span>
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-white/60 text-[0.875rem]">
                    <Clock
                      size={15}
                      className="text-rose-400 flex-shrink-0"
                      aria-hidden={true}
                    />
                    <span>{featuredClass.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-[0.875rem]">
                    <MapPin
                      size={15}
                      className="text-rose-400 flex-shrink-0"
                      aria-hidden={true}
                    />
                    <span>{featuredClass.location}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 border-t border-white/10 pt-6">
                  <span
                    className="text-[2.25rem] font-light text-white leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {featuredClass.price}
                  </span>
                  <span
                    className="text-white/35 text-[0.8125rem]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    per class &middot; first class £5
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <EmblaCarousel />

      <section className="py-28 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow text="Take the first step" center />
            <h2
              className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.06] tracking-[-0.02em] text-[#1e2a3a] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Ready to move, connect, and belong?
            </h2>
            <p
              className="text-[#1e2a3a]/70 text-[1.0625rem] leading-relaxed mb-10 max-w-[42ch] mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              There&apos;s no pressure, no performance, and no experience
              needed. Just show up and let the music guide you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2.5 bg-[#1e2a3a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:bg-[#2d3f55] transition-all hover:-translate-y-px"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Join a session
                <span
                  className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#1e2a3a]/20 text-[#1e2a3a] rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:border-[#1e2a3a]/50 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Ask a question
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
