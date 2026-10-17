import type { Metadata } from 'next';
import firstAid from '@/assets/essentials/first-aid.webp';
import hairDryer from '@/assets/essentials/hair-dryer.webp';
import iron from '@/assets/essentials/iron.webp';
import ironingBoard from '@/assets/essentials/ironing-board.webp';
import manuals from '@/assets/essentials/manuals.webp';
import towels from '@/assets/essentials/towels.webp';
import washingMachineCapsules from '@/assets/essentials/washing-machine-capsules.webp';
import EssentialsList from '@/components/EssentialsList';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Essentials',
};

const groups = [
  {
    name: 'Kitchen',
    items: [
      {
        title: 'Ironing board',
        text: 'Behind the kitchen door, next to the trash bin.',
        image: ironingBoard,
      },
      {
        title: 'Appliance manuals',
        text: 'In the left-side kitchen cabinet.',
        image: manuals,
      },
    ],
  },
  {
    name: 'Bathroom',
    items: [
      {
        title: 'Hair dryer',
        text: 'In the bathroom, in the middle drawer under the sink.',
        image: hairDryer,
      },
      {
        title: 'Washing machine capsules',
        text: 'In the bathroom, in the first drawer under the sink.',
        image: washingMachineCapsules,
      },
    ],
  },
  {
    name: 'Hallway',
    items: [
      {
        title: 'Iron',
        text: 'In the hallway cabinet next to the bathroom, on the left side.',
        image: iron,
      },
      {
        title: 'Extra towels',
        text: 'In the hallway cabinet next to the bathroom, on the right side.',
        image: towels,
      },
    ],
  },
  {
    name: 'Living room',
    items: [
      {
        title: 'First aid kit',
        text: 'Inside the TV stand, on the right side, behind the glass door.',
        image: firstAid,
      },
    ],
  },
];

const EssentialsPage = () => {
  return (
    <PageTransition>
      <PageHeader title="Essentials" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Where is everything?</h1>

        <p className="mt-2 text-muted">
          Tap an item to see a photo of exactly where it is.
        </p>

        <EssentialsList groups={groups} />
      </main>
    </PageTransition>
  );
};

export default EssentialsPage;
