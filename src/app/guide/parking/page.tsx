import type { Metadata } from 'next';
import { LockKeyhole } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Parking');

  return { title: t('pageTitle') };
};

const ParkingPage = () => {
  const t = useTranslations('Parking');

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <div className="mt-6 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
            <LockKeyhole />
          </span>

          <div>
            <p className="font-extrabold">{t('guestsOnly')}</p>
            <p className="mt-0.5 text-sm text-muted">{t('guestsOnlyText')}</p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ParkingPage;
