import { useTranslations } from 'next-intl';
import LanguageSheet from './LanguageSheet';
import LogoMark from './LogoMark';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className="flex items-center gap-2 bg-deep p-4 text-white">
      <LogoMark />
      <div className="flex-1 leading-tight">
        <p className="text-base font-bold">{t('name')}</p>
        <p className="text-base font-semibold text-white/80">{t('city')}</p>
      </div>
      <ThemeToggle className="flex size-11 cursor-pointer items-center justify-center rounded-2xl bg-white/15 transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" />
      <LanguageSheet className="h-11 cursor-pointer rounded-2xl bg-white/15 px-3 text-sm font-bold transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" />
    </header>
  );
};

export default Header;
