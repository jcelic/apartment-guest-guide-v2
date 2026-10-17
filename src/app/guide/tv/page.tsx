import type { Metadata } from 'next';
import { ImageIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Tv');

  return { title: t('pageTitle') };
};

const apps = ['YouTube', 'Netflix', 'HBO Max'];

const TvPage = () => {
  const t = useTranslations('Tv');

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <div className="mt-6 rounded-3xl border border-line bg-surface p-4">
          <div className="flex aspect-16/10 flex-col items-center justify-center gap-2 rounded-2xl bg-line text-sm font-bold text-muted">
            <ImageIcon className="size-6" />
            {t('photoPlaceholder')}
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-surface-2 p-4">
              <dt className="font-extrabold">{t('smallRemote')}</dt>
              <dd className="mt-0.5 text-sm text-muted">
                {t('smallRemoteText')}
              </dd>
            </div>

            <div className="rounded-2xl bg-surface-2 p-4">
              <dt className="font-extrabold">{t('largeRemote')}</dt>
              <dd className="mt-0.5 text-sm text-muted">
                {t('largeRemoteText')}
              </dd>
            </div>
          </dl>
        </div>

        <ol
          role="list"
          className="mt-4 divide-y divide-line rounded-3xl border border-line bg-surface px-5"
        >
          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              1
            </span>
            <div>
              <h2 className="text-lg font-extrabold">{t('step1Title')}</h2>
              <p className="mt-1 text-muted">{t('step1Text')}</p>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              2
            </span>
            <div>
              <h2 className="text-lg font-extrabold">{t('step2Title')}</h2>
              <p className="mt-1 text-muted">{t('step2Text')}</p>
              <ul role="list" className="mt-3 flex flex-wrap gap-2">
                {apps.map((app) => (
                  <li
                    key={app}
                    className="rounded-xl bg-surface-2 px-3 py-1.5 text-sm font-bold"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              3
            </span>
            <div>
              <h2 className="text-lg font-extrabold">{t('step3Title')}</h2>
              <p className="mt-1 text-muted">{t('step3Text')}</p>
            </div>
          </li>
        </ol>
      </main>
    </PageTransition>
  );
};

export default TvPage;
