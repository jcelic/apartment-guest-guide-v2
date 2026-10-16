import type { ReactNode } from 'react';
import Link from 'next/link';

type GuideTileProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

const GuideTile = ({ icon, title, description, href }: GuideTileProps) => {
  return (
    <Link
      href={href}
      className="group flex h-full cursor-pointer flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-3 py-5 text-center transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6">
        {icon}
      </span>

      <span>
        <span className="block font-extrabold">{title}</span>
        <span className="mt-0.5 block text-sm text-muted">{description}</span>
      </span>
    </Link>
  );
};

export default GuideTile;
