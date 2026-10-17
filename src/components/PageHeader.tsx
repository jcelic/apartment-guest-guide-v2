import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ThemeToggle from './ThemeToggle';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  const t = useTranslations('Common');

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-xl items-center gap-2 p-4">
        <Link
          href="/guide"
          transitionTypes={['nav-back']}
          prefetch
          aria-label={t('backToHome')}
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-5" />
        </Link>

        <p className="ml-2 flex-1 truncate text-lg font-extrabold">{title}</p>

        <ThemeToggle className="flex size-11 cursor-pointer items-center justify-center rounded-2xl border border-line bg-surface transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
        <button
          type="button"
          aria-label={t('changeLanguage', { language: 'EN' })}
          className="h-11 cursor-pointer rounded-2xl border border-line bg-surface px-3 text-sm font-bold transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
