import type { Metadata } from 'next';
import { LockKeyhole } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Parking',
};

const ParkingPage = () => {
  return (
    <PageTransition>
      <PageHeader title="Parking" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Parking</h1>

        <div className="mt-6 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
            <LockKeyhole />
          </span>

          <div>
            <p className="font-extrabold">Guests only</p>
            <p className="mt-0.5 text-sm text-muted">
              Parking details are available to guests in the production version.
            </p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ParkingPage;
