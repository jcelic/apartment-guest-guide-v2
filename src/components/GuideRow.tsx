import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type GuideRowVariant = 'default' | 'highlighted' | 'emergency';

type GuideRowProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  variant?: GuideRowVariant;
};

const iconColors: Record<GuideRowVariant, string> = {
  default:
    'bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-surface',
  highlighted: 'bg-foreground text-surface',
  emergency: 'bg-danger-soft text-danger',
};

const GuideRow = ({
  icon,
  title,
  description,
  href,
  variant = 'default',
}: GuideRowProps) => {
  return (
    <Link
      href={href}
      transitionTypes={['nav-forward']}
      prefetch
      className="group flex cursor-pointer items-center gap-4 p-4 transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:size-6 ${iconColors[variant]}`}
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-extrabold">{title}</span>
        <span className="mt-0.5 block text-sm text-muted">{description}</span>
      </span>

      <ChevronRight className="size-5 shrink-0 text-muted" />
    </Link>
  );
};

export default GuideRow;
