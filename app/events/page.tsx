"use client";

import Link from "next/link";
import { CalendarHeart } from "lucide-react";

import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";

const InstagramSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const EventsPage = () => {
  const { fadeUp } = useEntranceAnimation();

  return (
    <main>
      <section aria-labelledby="events-heading">
        <div className="max-w-275 mx-auto px-5 sm:px-8 pt-24 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <div style={fadeUp(100)}>
              <SectionEyebrow text="Events" center />
            </div>

            <div
              style={fadeUp(200)}
              className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-8"
            >
              <CalendarHeart
                className="w-6 h-6 text-rose-500"
                aria-hidden="true"
              />
            </div>

            <h1
              id="events-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                ...fadeUp(250),
              }}
              className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1e2a3a] mb-6"
            >
              Something special is{" "}
              <em className="text-rose-500 italic">coming soon.</em>
            </h1>

            <p
              style={fadeUp(400)}
              className="text-[#1e2a3a]/70 text-[1.0625rem] leading-relaxed max-w-[52ch] mx-auto mb-12"
            >
              Workshops, retreats and special Biodanza gatherings are on the
              way. In the meantime, you&apos;re warmly welcome to join one of
              the regular weekly classes.
            </p>

            {/* Primary CTA */}
            <div style={fadeUp(550)} className="mb-10">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 bg-[#1e2a3a] text-white text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-[#2d3f55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2"
              >
                Browse upcoming classes
                <span
                  className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Stay in the loop */}
            <div
              style={fadeUp(700)}
              className="border-t border-stone-100 pt-12"
            >
              <p className="text-[0.875rem] text-[#1e2a3a]/70 mb-4">
                Be the first to hear when new events are announced.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href="https://www.instagram.com/biodanza_with_caroline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] text-[#1e2a3a] font-medium hover:text-rose-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <InstagramSvg className="w-4 h-4" aria-hidden="true" />
                  Follow on Instagram
                </a>
                <Link
                  href="/contact"
                  className="text-[0.9375rem] text-[#1e2a3a] font-medium hover:text-rose-600 transition-colors inline-flex items-center gap-1.5"
                >
                  Get in touch <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
