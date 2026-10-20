const SignpostIllustration = () => {
  return (
    <svg viewBox="0 0 200 100" aria-hidden="true" className="mx-auto w-56">
      <ellipse cx="100" cy="92" rx="46" ry="5" className="fill-accent/15" />
      <rect
        x="97"
        y="18"
        width="6"
        height="74"
        rx="3"
        className="fill-accent-ink"
      />
      <path
        d="M56 24h50a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H56l-10-9z"
        className="fill-accent"
      />
      <path
        d="M144 50H94a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h50l10-9z"
        className="fill-accent/60"
      />
      <text
        x="79"
        y="38.5"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        className="fill-surface"
      >
        ?
      </text>
      <text
        x="121"
        y="64.5"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        className="fill-surface"
      >
        ?
      </text>
      <circle cx="156" cy="22" r="6" className="fill-accent/25" />
      <circle cx="42" cy="66" r="4" className="fill-accent/20" />
    </svg>
  );
};

export default SignpostIllustration;
