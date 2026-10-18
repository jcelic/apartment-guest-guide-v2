'use client';

import { useState, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { setLocale } from '@/i18n/actions';
import { localeNames, locales, type Locale } from '@/i18n/config';
import Sheet from './Sheet';

type LanguageSheetProps = {
  className: string;
};

const LanguageSheet = ({ className }: LanguageSheetProps) => {
  const t = useTranslations('LanguageMenu');
  const tCommon = useTranslations('Common');
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const code = currentLocale.toUpperCase();

  const onSelect = (locale: Locale) => {
    setOpen(false);
    if (locale === currentLocale) return;

    startTransition(async () => {
      await setLocale(locale);
    });
  };

  return (
    <>
      <button
        type="button"
        aria-label={tCommon('changeLanguage', { language: code })}
        aria-haspopup="dialog"
        aria-busy={isPending}
        onClick={() => setOpen(true)}
        className={className}
      >
        {code}
      </button>

      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        title={t('title')}
        closeLabel={t('close')}
      >
        <div
          role="radiogroup"
          aria-label={t('title')}
          className="mt-6 space-y-3"
        >
          {locales.map((locale) => {
            const isCurrent = locale === currentLocale;
            const nativeName = localeNames[locale];
            const translatedName = t(`names.${locale}`);

            return (
              <button
                key={locale}
                type="button"
                role="radio"
                aria-checked={isCurrent}
                onClick={() => onSelect(locale)}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-3xl border p-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isCurrent
                    ? 'border-accent bg-accent-soft'
                    : 'border-line bg-surface hover:bg-surface-2'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold ${
                    isCurrent
                      ? 'bg-accent text-on-accent'
                      : 'bg-accent-soft text-accent'
                  }`}
                >
                  {locale.toUpperCase()}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    lang={locale}
                    className={`block font-extrabold ${isCurrent ? 'text-accent-ink' : ''}`}
                  >
                    {nativeName}
                  </span>
                  {translatedName !== nativeName && (
                    <span className="mt-0.5 block text-sm text-muted">
                      {translatedName}
                    </span>
                  )}
                </span>

                <span
                  aria-hidden="true"
                  className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                    isCurrent ? 'border-accent' : 'border-muted/50'
                  }`}
                >
                  {isCurrent && (
                    <span className="size-3 rounded-full bg-accent" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </Sheet>
    </>
  );
};

export default LanguageSheet;
