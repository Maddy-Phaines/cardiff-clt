export function FlowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 10 Q25 0 50 10 T100 10"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
