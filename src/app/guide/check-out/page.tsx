import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import CheckoutChecklist from '@/components/CheckoutChecklist';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Check-out',
};

const items = [
  {
    id: 'ac',
    title: 'Turn off the AC',
    text: 'Switch off the air conditioning.',
  },
  {
    id: 'windows',
    title: 'Close windows & terrace doors',
    text: 'All of them, please.',
  },
  {
    id: 'lights',
    title: 'Turn off the lights',
    text: 'Every room.',
  },
  {
    id: 'door',
    title: 'Lock the door',
    text: 'Make sure the apartment is locked.',
  },
  {
    id: 'key',
    title: 'Return the key',
    text: 'Back in the lockbox, then scramble the digits.',
  },
  {
    id: 'parking',
    title: 'Drop the parking card',
    text: "In the mailbox — only after you've driven out.",
  },
];

const CheckoutPage = () => {
  return (
    <PageTransition>
      <PageHeader title="Check-out" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <CheckoutChecklist items={items} />

        <div className="mt-4 rounded-3xl border border-line bg-surface p-5">
          <h2 className="text-lg font-extrabold">Last step: say goodbye</h2>
          <p className="mt-1 text-muted">
            Send us a message when you leave so we can start cleaning.
          </p>

          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-2xl bg-success-soft font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MessageCircle className="size-5" />
            Message us on WhatsApp
          </a>
        </div>
      </main>
    </PageTransition>
  );
};

export default CheckoutPage;
