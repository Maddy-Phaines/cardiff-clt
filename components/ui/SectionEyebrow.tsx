import clsx from "clsx";

// Colours chosen to pass WCAG AA (4.5:1) on their section backgrounds
const toneClass = {
  rose: "text-rose-700",
  terracotta: "text-[#a4513e]",
  onDark: "text-[#e0a08c]",
};

export function SectionEyebrow({
  text,
  center = false,
  onDark = false,
  tone = "rose",
  className,
}: {
  text: string;
  center?: boolean;
  onDark?: boolean;
  tone?: "rose" | "terracotta";
  className?: string;
}): React.ReactElement {
  return (
    <p
      className={clsx(
        "mb-3 text-[1.25rem] leading-snug italic font-medium tracking-[0.08em]",
        center && "text-center",
        onDark ? toneClass.onDark : toneClass[tone],
        className,
      )}
      style={{ fontFamily: "var(--font-cormorant), serif" }}
    >
      {text}
    </p>
  );
}
