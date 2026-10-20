const ErrorIllustration = () => {
  return (
    <svg viewBox="0 0 200 100" aria-hidden="true" className="mx-auto w-56">
      <ellipse cx="100" cy="92" rx="46" ry="5" className="fill-accent/15" />
      <rect
        x="52"
        y="16"
        width="96"
        height="70"
        rx="10"
        strokeWidth="4"
        className="fill-surface stroke-accent"
      />
      <path d="M52 34h96" strokeWidth="4" className="stroke-accent" />
      <circle cx="64" cy="25" r="3" className="fill-accent" />
      <circle cx="74" cy="25" r="3" className="fill-accent/60" />
      <circle cx="84" cy="25" r="3" className="fill-accent/30" />
      <circle cx="100" cy="60" r="15" className="fill-accent" />
      <path
        d="M94 54l12 12M106 54l-12 12"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-surface"
      />
      <circle cx="156" cy="22" r="6" className="fill-accent/25" />
      <circle cx="42" cy="66" r="4" className="fill-accent/20" />
    </svg>
  );
};

export default ErrorIllustration;
