'use client';

import type { ReactNode } from 'react';

type QuickActionProps = {
  icon: ReactNode;
  label: string;
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

const QuickAction = ({ icon, label, href, onClick }: QuickActionProps) => {
  const className =
    'group flex min-w-0 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-surface px-2 py-4 text-center text-foreground transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const content = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6">
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
