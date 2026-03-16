export function SectionEyebrow({
  text,
  center = false,
  onDark = false,
}: {
  text: string;
  center?: boolean;
  onDark?: boolean;
}): React.ReactElement {
  const textClass = onDark ? "text-[#c7d8d4]" : "text-[#114945]";
  const lineClass = onDark ? "bg-[#c7d8d4]" : "bg-[#114945]";

  return (
    <div
      className={`flex items-center gap-3 mb-5 ${center ? "mx-auto w-fit" : ""}`}
    >
      <div className={`w-6 h-px ${lineClass}`} aria-hidden="true" />
      <span
        className={`text-[0.7rem] uppercase tracking-[0.2em] font-medium ${textClass}`}
      >
        {text}
      </span>
    </div>
  );
}
