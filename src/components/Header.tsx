import { Moon } from 'lucide-react';
import { LogoMark } from './LogoMark';

const Header = () => {
  return (
    <header className="flex items-center gap-2 bg-deep p-4 text-white">
      <LogoMark />
      <div className="flex-1 leading-tight">
        <p className="text-base font-bold">Apartment Matea</p>
        <p className="text-base font-semibold text-white/80">Zadar</p>
      </div>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="flex size-11 cursor-pointer items-center justify-center rounded-2xl bg-white/15 transition-colors duration-200 hover:bg-white/20"
      >
        <Moon size={20} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        aria-label="Change language"
        className="h-11 cursor-pointer rounded-2xl bg-white/15 px-3 text-sm font-bold transition-colors duration-200 hover:bg-white/20"
      >
        EN
      </button>
    </header>
  );
};

export default Header;
