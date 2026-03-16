"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb(): React.ReactElement {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, i) => ({
    label: formatLabel(segment),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-[0.75rem] text-stone-400">
        <li>
          <Link href="/" className="hover:text-[#1e2a3a] transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span aria-hidden="true">›</span>
            {crumb.isLast ? (
              <span className="text-[#1e2a3a]" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-[#1e2a3a] transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function formatLabel(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
