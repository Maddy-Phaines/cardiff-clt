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
  <span className="inline-flex items-center gap-1.5 bg-navy/[0.06] rounded-full px-3.5 py-1.5 text-[0.7rem] text-navy/75 tracking-wide">
    <span
      className="w-1 h-1 rounded-full bg-rose-500 inline-block"
      aria-hidden="true"
    />
    {label}
  </span>
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

  return (
    <section className="max-w-275 mx-auto">
      <div
        className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="relative z-10 flex flex-col justify-between pt-30 pb-16 px-12 lg:px-20">
          <div className="flex flex-col">
            <div style={fadeUp(200)} className="flex items-center gap-3 mb-8">
              <SectionEyebrow text="Biodanza in Cardiff and South Wales" />
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                ...fadeUp(350),
              }}
              className="text-[clamp(4rem,7.5vw,7.5rem)] leading-[0.95] tracking-tight text-[#1e2a3a] mb-10"
            >
              <span className="block">Move.</span>
              <span className="block">Connect.</span>
              <span className="block italic font-light text-rose-500">
                Belong.
              </span>
            </h1>

            <p
              style={fadeUp(550)}
              className="text-[#1e2a3a]/70 text-base leading-relaxed max-w-[30ch] mb-10"
            >
              Guided biodanza sessions where movement becomes connection and
              everyone is welcome.
            </p>

            <div style={fadeUp(700)} className="flex items-center gap-6">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2.5 bg-[#1e2a3a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-wide hover:bg-[#2d3f55] transition-all hover:-translate-y-px"
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
                href="/about"
                className="text-[0.8125rem] text-[#1e2a3a]/70 hover:text-[#1e2a3a] 
                transition-colors flex items-center gap-1.5"
              >
                Learn more <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <div
            style={fadeUp(850)}
            className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-[#1e2a3a]/10"
          >
            {[
              "200+ students",
              "Weekly classes",
              "All levels welcome",
              "Festival facilitator",
            ].map((label) => (
              <ProofPill key={label} label={label} />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center py-20 px-8 md:px-12 lg:pr-20 order-first md:order-last">
          <div className="relative w-full max-w-105">
            <div
              className="absolute -top-6 -right-6 w-full h-full rounded-t-[999px] border
               border-rose-400/30 pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="relative w-full aspect-3/4 rounded-t-[999px] overflow-hidden 
            shadow-[0_32px_80px_rgba(30,42,58,0.18),0_8px_20px_rgba(30,42,58,0.08)]"
            >
              <Image
                src="/images/profile2W1773672679.webp"
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
              className="absolute -left-8 top-[18%] bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(30,42,58,0.12)]"
              style={fadeUp(1000)}
            >
              <p
                className="text-[1.875rem] font-light text-[#1e2a3a] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4+
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[#6b7280] mt-0.5">
                Years teaching
              </p>
            </div>

            <div
              className="absolute -right-4 bottom-[10%] bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(30,42,58,0.12)]"
              style={fadeUp(1150)}
            >
              <p
                className="text-[1.875rem] font-light text-[#1e2a3a] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                40+
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[#6b7280] mt-0.5">
                Festivals
              </p>
            </div>

            <div
              className="absolute -bottom-4 -left-10 pointer-events-none"
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
  );
}
