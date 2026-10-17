import type { Metadata } from 'next';
import { ChevronRight, Router, Wifi } from 'lucide-react';
import CopyPasswordButton from '@/components/CopyPasswordButton';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Wi-Fi',
};

const WIFI_NETWORK = 'Example-WiFi';
const WIFI_PASSWORD = 'example-password';

const WifiPage = () => {
  return (
    <PageTransition>
      <PageHeader title="Wi-Fi" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Get online</h1>

        <p className="mt-2 text-muted">Copy the password and connect.</p>

        <div className="mt-6 space-y-5 rounded-3xl border border-line bg-surface p-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Wifi />
            </span>

            <h2 className="font-extrabold">Apartment Wi-Fi</h2>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
              Network
            </h3>
            <p className="mt-2 rounded-2xl bg-surface-2 px-5 py-4 text-lg font-bold break-all">
              {WIFI_NETWORK}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
              Password
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

            <h2 className="font-extrabold">Can&apos;t connect?</h2>
          </div>

          <p className="mt-3 text-muted">
            Restart the router, it&apos;s right behind the TV. Press the black
            button on the back to turn it off, wait 10 seconds, then press it
            again. Give it a couple of minutes to reconnect.
          </p>
        </div>

        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-success-soft p-4 font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Still not working? Message us
          <ChevronRight className="size-5" />
        </a>
      </main>
    </PageTransition>
  );
};

export default WifiPage;
