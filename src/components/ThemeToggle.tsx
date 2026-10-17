'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

type ThemeToggleProps = {
  className: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const t = useTranslations('Common');
  const { resolvedTheme, setTheme } = useTheme();

  const onToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      aria-label={t('toggleTheme')}
      onClick={onToggle}
      className={className}
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </button>
  );
};

export default ThemeToggle;
