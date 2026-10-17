import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('ThankYou');

  return { title: t('pageTitle') };
};

const Page = () => {
  const t = useTranslations('ThankYou');

  return (
    <main className="flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-line bg-surface text-center shadow-card">
        <div className="bg-accent-soft px-6 pt-10">
          <svg viewBox="0 0 200 80" aria-hidden="true" className="mx-auto w-56">
            <circle cx="100" cy="80" r="46" className="fill-accent/15" />
            <circle cx="100" cy="80" r="30" className="fill-accent" />
            <g
              className="stroke-accent"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M100 24V12" />
              <path d="M60 40l-8-8" />
              <path d="M140 40l8-8" />
              <path d="M40 76H28" />
              <path d="M160 76h12" />
            </g>
          </svg>
        </div>

        <svg
          viewBox="0 0 200 36"
          aria-hidden="true"
          className="mx-auto mt-3 w-56 stroke-accent"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M20 8q10-6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" />
          <path
            d="M50 20q10-6 20 0t20 0t20 0t20 0t20 0"
            className="opacity-60"
          />
          <path d="M80 32q10-6 20 0t20 0" className="opacity-30" />
        </svg>

        <div className="p-6 pt-4">
          <h1 className="text-2xl font-extrabold text-balance">{t('title')}</h1>

          <p className="mt-2 text-muted">{t('text')}</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
