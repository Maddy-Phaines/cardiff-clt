"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";

interface ProofPillProps {
  label: string;
}

const ProofPill: React.FC<ProofPillProps> = ({ label }) => (
  <li className="inline-flex items-center gap-1.5 bg-[#1e2a3a]/[0.06] rounded-full px-3.5 py-1.5 text-[0.8125rem] text-[#1e2a3a]/75 tracking-wide">
    <span
      className="w-1 h-1 rounded-full bg-rose-500 inline-block"
      aria-hidden="true"
    />
    {label}
  </li>
);

export default function HomeHero(): React.ReactElement {
  const { visible, prefersReducedMotion, fadeUp } = useEntranceAnimation();

  const archReveal: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0) scale(1)"
      : "translateY(30px) scale(0.97)",
    transition: prefersReducedMotion
      ? "none"
      : "opacity 1s ease 400ms, transform 1s ease 400ms",
  };

  const heroImage = (
    <div className="relative w-full">
      <div
        className="absolute -top-6 -right-2 md:-right-6 w-full h-full rounded-t-[999px] border
       border-rose-400/30 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="relative w-full aspect-square md:aspect-3/4 rounded-t-[999px] overflow-hidden
    shadow-[0_32px_80px_rgba(30,42,58,0.18),0_8px_20px_rgba(30,42,58,0.08)]"
      >
        <Image
          src="/images/caroline-profile.webp"
          alt="Caroline dancing joyfully in a field of yellow flowers"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 80vw, 45vw"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#1e2a3a]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute -left-4 md:-left-8 top-[18%] bg-white rounded-xl md:rounded-2xl 
        px-[clamp(0.75rem,0.5rem_+_1vw,1.25rem)] py-[clamp(0.5rem,0.3rem_+_0.75vw,0.875rem)] 
        shadow-[0_8px_32px_rgba(30,42,58,0.12)]"
        style={fadeUp(1000)}
      >
        <p
          className="text-[clamp(1.25rem,0.8rem_+_2.25vw,1.875rem)] font-light text-[#1e2a3a] leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          4+
        </p>
        <p className="text-[clamp(0.55rem,0.4rem_+_0.5vw,0.65rem)] uppercase tracking-[0.12em] text-[#6b7280] mt-0.5">
          Years teaching
        </p>
      </div>

      <div
        className="absolute -right-2 md:-right-4 bottom-[10%] bg-white rounded-xl md:rounded-2xl px-[clamp(0.75rem,0.5rem_+_1vw,1.25rem)] py-[clamp(0.5rem,0.3rem_+_0.75vw,0.875rem)] shadow-[0_8px_32px_rgba(30,42,58,0.12)]"
        style={fadeUp(1150)}
      >
        <p
          className="text-[clamp(1.25rem,0.8rem_+_2.25vw,1.875rem)] font-light text-[#1e2a3a] leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          100+
        </p>
        <p className="text-[clamp(0.55rem,0.4rem_+_0.5vw,0.65rem)] uppercase tracking-[0.12em] text-[#6b7280] mt-0.5">
          Biodanza classes facilitated
        </p>
      </div>

      <div
        className="absolute -bottom-4 -left-4 md:-left-10 pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: prefersReducedMotion
            ? "none"
            : "opacity 0.8s ease 1200ms",
        }}
        aria-hidden="true"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.45">
            <circle cx="40" cy="40" r="8" fill="#c4705a" />
            <ellipse
              cx="40"
              cy="22"
              rx="6"
              ry="10"
              fill="#e8a0c8"
              opacity="0.7"
            />
            <ellipse
              cx="40"
              cy="58"
              rx="6"
              ry="10"
              fill="#e8a0c8"
              opacity="0.7"
            />
            <ellipse
              cx="22"
              cy="40"
              rx="10"
              ry="6"
              fill="#e8a0c8"
              opacity="0.7"
            />
            <ellipse
              cx="58"
              cy="40"
              rx="10"
              ry="6"
              fill="#e8a0c8"
              opacity="0.7"
            />
            <ellipse
              cx="27"
              cy="27"
              rx="6"
              ry="10"
              transform="rotate(45 27 27)"
              fill="#b088d0"
              opacity="0.5"
            />
            <ellipse
              cx="53"
              cy="27"
              rx="6"
              ry="10"
              transform="rotate(-45 53 27)"
              fill="#b088d0"
              opacity="0.5"
            />
            <ellipse
              cx="27"
              cy="53"
              rx="6"
              ry="10"
              transform="rotate(-45 27 53)"
              fill="#b088d0"
              opacity="0.5"
            />
            <ellipse
              cx="53"
              cy="53"
              rx="6"
              ry="10"
              transform="rotate(45 53 53)"
              fill="#b088d0"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );

  return (
    <section className="bg-[#fff9f9]">
      <section className="max-w-275 mx-auto">
        <div
          className="relative min-h-screen grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:items-start gap-8 lg:gap-12 overflow-hidden"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {/* Row 1, col 1: eyebrow + heading + mobile-only image */}
          <div className="relative z-10 flex flex-col pt-5 md:pt-30 px-12 lg:px-20">
            <div style={fadeUp(200)} className="flex items-center gap-3 mb-4">
              <div
                className="inline-flex items-center text-blue-950 text-[clamp(0.7rem)]
                uppercase tracking-[0.15em] bg-rose-300 rounded-full px-4 py-1.5"
              >
                <span className="text-xs">
                  {" "}
                  Biodanza in Cardiff and South Wales
                </span>
              </div>
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                ...fadeUp(350),
              }}
              className="text-[clamp(2.5rem,1rem_+_6.5vw,7.5rem)] leading-[0.95] tracking-tight text-[#1e2a3a] mb-10"
            >
              <span className="block">Move.</span>
              <span className="block">Express.</span>
              <span className="block italic font-light text-rose-500">
                Connect with yourself & others.
              </span>
            </h1>

            <div style={fadeUp(450)} className="md:hidden mb-10">
              {heroImage}
            </div>
          </div>

          {/* Row 1, col 2-3: image (desktop only) */}
          <div
            className="relative z-10 hidden md:flex justify-center md:py-20 md:px-0 md:pr-10 md:col-start-2 
          md:col-span-2"
          >
            {heroImage}
          </div>

          {/* Row 2, full width: paragraph + buttons + proof pills */}
          <div className="relative z-10 flex flex-col md:items-center pb-16 md:pb-28 px-12 lg:px-20 md:col-span-3">
            <p
              style={fadeUp(550)}
              className="order-2 md:order-0 mt-10 md:mt-0 mb-0 md:mb-10 text-[#1e2a3a]/70 text-base leading-relaxed md:text-center"
            >
              Biodanza (The Dance of Life) workshops with Caroline in the South
              Wales area. Biodanza helps us to - Move, express, feel more
              confidence and self-esteem, listen to our needs, nurture
              ourselves, slow down, relax and boost our overall wellbeing.
            </p>

            <div
              style={fadeUp(700)}
              className="order-1 md:order-0 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <Link
                href="/classes"
                className="inline-flex items-center gap-2.5 bg-[#1e2a3a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-wide hover:bg-[#2d3f55] transition-all hover:-translate-y-px"
              >
                Join a session
                <span
                  className="w-5 h-5 shrink-0 rounded-full bg-white/15 flex items-center justify-center text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 border border-rose-500 text-rose-500 rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-wide hover:bg-rose-50 hover:-translate-y-px transition-all"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul
              style={fadeUp(850)}
              className="order-3 md:order-0 flex flex-wrap md:justify-center gap-2 pt-8 mt-8 border-t border-[#1e2a3a]/10 list-none pl-0"
            >
              {[
                "100+ students",
                "Classes since 2023",
                "Monthly workshops",
                "Workshops for charities and organisations",
              ].map((label) => (
                <ProofPill key={label} label={label} />
              ))}
            </ul>
          </div>

          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
            style={{
              opacity: visible ? 1 : 0,
              transition: prefersReducedMotion
                ? "none"
                : "opacity 0.6s ease 1300ms",
            }}
            aria-hidden="true"
          >
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#1e2a3a]/70">
              Scroll
            </span>
            <div className="w-px h-10 bg-linear-to-b from-[#1e2a3a]/30 to-transparent" />
          </div>
        </div>
      </section>
    </section>
  );
}
