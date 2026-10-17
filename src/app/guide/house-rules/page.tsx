import type { Metadata } from 'next';
import { Check, Moon, Sun, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('HouseRules');

  return { title: t('pageTitle') };
};

const rules = [
  { id: 'smoking', allowed: false },
  { id: 'door', allowed: true },
  { id: 'breaks', allowed: true },
] as const;

const HouseRulesPage = () => {
  const t = useTranslations('HouseRules');

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-line bg-surface p-5">
            <dt className="text-xs font-bold tracking-wider text-muted uppercase">
              {t('checkIn')}
            </dt>
            <dd className="mt-2 text-4xl font-extrabold tabular-nums">14:00</dd>
            <dd className="mt-1 text-sm text-muted">{t('from')}</dd>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5">
            <dt className="text-xs font-bold tracking-wider text-muted uppercase">
              {t('checkOut')}
            </dt>
            <dd className="mt-2 text-4xl font-extrabold tabular-nums">10:00</dd>
            <dd className="mt-1 text-sm text-muted">{t('by')}</dd>
          </div>
        </dl>

        <p className="mt-3 text-center text-sm text-muted">{t('timesNote')}</p>

        <div className="mt-6 rounded-3xl border border-line bg-surface p-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Moon />
            </span>

            <h2 className="font-extrabold">{t('quietHours')}</h2>
          </div>

          <p className="mt-3 text-muted">{t('quietText')}</p>

          <dl className="mt-4 divide-y divide-line rounded-2xl bg-surface-2 px-4">
            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="flex items-center gap-2 font-bold">
                <Sun className="size-5 text-accent" />
                {t('afternoon')}
              </dt>
              <dd className="text-xl font-extrabold whitespace-nowrap tabular-nums">
                14:00–16:00
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="flex items-center gap-2 font-bold">
                <Moon className="size-5 text-accent" />
                {t('night')}
              </dt>
              <dd className="text-xl font-extrabold whitespace-nowrap tabular-nums">
                23:00–07:00
              </dd>
            </div>
          </dl>

          <p className="mt-4 text-sm text-muted">{t('kidsNote')}</p>
        </div>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          {t('inTheApartment')}
        </h2>

        <ul
          role="list"
          className="mt-3 divide-y divide-line rounded-3xl border border-line bg-surface"
        >
          {rules.map((rule) => (
            <li key={rule.id} className="flex items-center gap-4 p-4">
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:size-6 ${
                  rule.allowed
                    ? 'bg-success-soft text-success'
                    : 'bg-danger-soft text-danger'
                }`}
              >
                {rule.allowed ? <Check /> : <X />}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-extrabold">{t(`rules.${rule.id}.title`)}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {t(`rules.${rule.id}.text`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </PageTransition>
  );
};

export default HouseRulesPage;
