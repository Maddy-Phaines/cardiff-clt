"use client";

import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

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

const FacebookSvg = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import Link from "next/link";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "biodanzawithcaroline@gmail.com",
    href: "mailto:biodanzawithcaroline@gmail.com?subject=Class%20enquiry",
    display: "biodanzawithcaroline@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7700 900000",
    href: "tel:+447700900000",
    display: "+44 7700 900000",
  },
  {
    icon: MapPin,
    label: "Classes held at",
    value: "Sardis Chapel, Pontypridd",
    href: "https://maps.google.com/?q=Sardis+Chapel+Pontypridd",
    display: "Sardis Chapel, Pontypridd",
  },
];

const socialLinks = [
  {
    icon: InstagramSvg,
    label: "Instagram",
    href: "https://www.instagram.com/biodanza_with_caroline/",
  },
  {
    icon: FacebookSvg,
    label: "Facebook",
    href: "https://www.facebook.com/share/1BFRHdNDUu/?mibextid=wwXIfr",
  },
];

export default function ContactPage() {
  const { fadeUp } = useEntranceAnimation();

  return (
    <main>
      <section aria-labelledby="contact-heading">
        <div className="max-w-275 mx-auto px-5 sm:px-8 pt-24 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <div style={fadeUp(100)}>
              <SectionEyebrow text="Get in touch" center />
            </div>

            <h1
              id="contact-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                ...fadeUp(250),
              }}
              className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1e2a3a] mb-6"
            >
              Every journey begins with a{" "}
              <em className="text-rose-500 italic">conversation.</em>
            </h1>

            <p
              style={fadeUp(400)}
              className="text-[#1e2a3a]/70 text-[1.0625rem] leading-relaxed max-w-[52ch] mx-auto mb-14"
            >
              Whether you&apos;re curious about a class, ready to join a
              session, or simply want to ask a question, I warmly welcome your
              message.
            </p>

            {/* Contact channels */}
            <div style={fadeUp(550)} className="space-y-3 mb-10">
              {contactChannels.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Classes held at" ? "_blank" : undefined}
                  rel={
                    label === "Classes held at"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-[0_2px_16px_rgba(30,42,58,0.06)] border border-stone-100 hover:border-rose-200 hover:shadow-[0_4px_24px_rgba(30,42,58,0.1)] transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <Icon
                      className="w-4 h-4 text-rose-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#1e2a3a]/70 mb-0.5">
                      {label}
                    </p>
                    <p className="text-[0.9375rem] font-medium text-[#1e2a3a] group-hover:text-rose-500 transition-colors truncate">
                      {display}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Primary CTA */}
            <div style={fadeUp(650)} className="mb-6">
              <a
                href="mailto:biodanzawithcaroline@gmail.com?subject=Class%20enquiry"
                className="inline-flex items-center gap-2 bg-[#1e2a3a] text-white text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-[#2d3f55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2"
              >
                Send a message
                <span
                  className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
              <p className="text-[0.8125rem] text-[#1e2a3a]/70 mt-3">
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div
              style={fadeUp(700)}
              className="flex items-center justify-center gap-3 mb-16"
            >
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${label}`}
                  className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-[#1e2a3a]/50 hover:text-rose-500 hover:border-rose-200 transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Testimonial */}
            <figure
              style={fadeUp(800)}
              className="border-t border-stone-100 pt-12"
            >
              <blockquote className="text-[1rem] text-[#1e2a3a]/70 leading-relaxed italic max-w-[48ch] mx-auto mb-4">
                &ldquo;I came along not knowing what to expect and left feeling
                lighter than I have in months. There&apos;s something magical
                about moving without any pressure to get it right.&rdquo;
              </blockquote>
              <figcaption className="text-[0.8125rem] text-[#1e2a3a]/70">
                Sarah M. &mdash; Cardiff &middot; Regular attendee
              </figcaption>
            </figure>

            {/* Secondary CTA */}
            <div style={fadeUp(900)} className="mt-12">
              <p className="text-[0.875rem] text-[#1e2a3a]/70 mb-4">
                Not ready to reach out yet?
              </p>
              <Link
                href="/classes"
                className="text-[0.9375rem] text-[#1e2a3a] font-medium hover:text-rose-500 transition-colors inline-flex items-center gap-1.5"
              >
                Browse upcoming classes <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
