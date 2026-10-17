'use client';

import type { ReactNode } from 'react';

type QuickActionVariant = 'default' | 'success';

type QuickActionProps = {
  icon: ReactNode;
  label: string;
  variant?: QuickActionVariant;
} & (
  | {
      href: string;
      onClick?: never;
    }
  | {
      href?: never;
      onClick: () => void;
    }
);

const variantColors: Record<
  QuickActionVariant,
  { card: string; icon: string }
> = {
  default: {
    card: 'hover:bg-accent-soft',
    icon: 'bg-accent-soft text-accent',
  },
  success: {
    card: 'hover:bg-success-soft',
    icon: 'bg-success-soft text-success',
  },
};

const QuickAction = ({
  icon,
  label,
  href,
  onClick,
  variant = 'default',
}: QuickActionProps) => {
  const className = `group flex min-w-0 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-surface px-2 py-4 text-center text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantColors[variant].card}`;

  const content = (
    <>
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6 ${variantColors[variant].icon}`}
      >
        {icon}
      </span>

      <span className="text-sm font-extrabold">{label}</span>
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default QuickAction;
