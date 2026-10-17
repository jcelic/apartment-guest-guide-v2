import type { Metadata } from 'next';
import { ChevronRight, Router, Wifi } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import CopyPasswordButton from '@/components/CopyPasswordButton';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Wifi');

  return { title: t('pageTitle') };
};

const WIFI_NETWORK = 'Example-WiFi';
const WIFI_PASSWORD = 'example-password';

const WifiPage = () => {
  const t = useTranslations('Wifi');

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <div className="mt-6 space-y-5 rounded-3xl border border-line bg-surface p-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Wifi />
            </span>

            <h2 className="font-extrabold">{t('apartmentWifi')}</h2>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
              {t('network')}
            </h3>
            <p className="mt-2 rounded-2xl bg-surface-2 px-5 py-4 text-lg font-bold break-all">
              {WIFI_NETWORK}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
              {t('password')}
            </h3>
            <p className="mt-2 rounded-2xl bg-surface-2 px-5 py-4 text-lg font-bold break-all">
              {WIFI_PASSWORD}
            </p>
          </div>

          <CopyPasswordButton password={WIFI_PASSWORD} />
        </div>

        <div className="mt-4 rounded-3xl border border-line bg-surface p-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Router />
            </span>

            <h2 className="font-extrabold">{t('cantConnect')}</h2>
          </div>

          <p className="mt-3 text-muted">{t('cantConnectText')}</p>
        </div>

        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-success-soft p-4 font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {t('stillNotWorking')}
          <ChevronRight className="size-5" />
        </a>
      </main>
    </PageTransition>
  );
};

export default WifiPage;
