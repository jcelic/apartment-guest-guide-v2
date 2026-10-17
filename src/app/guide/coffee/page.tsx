import type { Metadata } from 'next';
import { Coffee, Droplet } from 'lucide-react';
import capsuleHolderBack from '@/assets/coffee/capsule-holder-back.webp';
import capsuleHolderLocation from '@/assets/coffee/capsule-holder-location.webp';
import capsuleInserted from '@/assets/coffee/capsule-inserted.webp';
import cup from '@/assets/coffee/cup.webp';
import powerGreen from '@/assets/coffee/power-green.webp';
import powerRed from '@/assets/coffee/power-red.webp';
import startHot from '@/assets/coffee/start-hot.webp';
import waterLevel from '@/assets/coffee/water-level.webp';
import PageHeader from '@/components/PageHeader';
import StepCarousel from '@/components/StepCarousel';

export const metadata: Metadata = {
  title: 'Coffee maker',
};

const steps = [
  {
    title: 'Turn on the machine',
    text: 'Press the power button. The light will blink red while the machine heats up.',
    image: powerRed,
  },
  {
    title: 'Wait for the green light',
    text: 'When the light turns green, the machine is ready to use.',
    image: powerGreen,
  },
  {
    title: 'Remove the capsule holder',
    text: 'Lift the top cover and pull out the capsule holder.',
    image: capsuleHolderLocation,
  },
  {
    title: 'Insert a capsule',
    text: 'Place a coffee capsule inside the holder.',
    image: capsuleInserted,
  },
  {
    title: 'Reinsert the holder',
    text: 'Push the capsule holder back into the machine and close the top cover.',
    image: capsuleHolderBack,
  },
  {
    title: 'Select water level',
    text: 'Move the selector up or down to match the number of bars shown on the capsule.',
    image: waterLevel,
  },
  {
    title: 'Place your cup',
    text: 'Put your cup under the coffee outlet.',
    image: cup,
  },
  {
    title: 'Make your coffee',
    text: 'Move the lever to the red side for hot drinks. The machine will stop automatically.',
    image: startHot,
  },
  {
    title: 'Wait for green again',
    text: 'Wait until the power button turns green before removing the capsule holder.',
    image: powerGreen,
  },
  {
    title: 'Remove the used capsule',
    text: 'Lift the top cover, remove the capsule holder and throw away the used capsule. Do not leave used capsules inside the machine.',
    image: capsuleHolderLocation,
  },
];

const CoffeePage = () => {
  return (
    <>
      <PageHeader title="Coffee maker" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Make a coffee</h1>

        <p className="mt-2 text-muted">
          Dolce Gusto · swipe through 10 short steps.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex gap-4 rounded-3xl border border-line bg-surface p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Droplet />
            </span>

            <div>
              <h2 className="font-extrabold">Water tank</h2>
              <p className="mt-0.5 text-sm text-muted">
                Push it fully in. Small air bubbles at the bottom mean it&apos;s
                seated — otherwise no water comes out.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-3xl border border-line bg-surface p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Coffee />
            </span>

            <div>
              <h2 className="font-extrabold">Cappuccino & Chococino</h2>
              <p className="mt-0.5 text-sm text-muted">
                Use two capsules: milk first, wait for green, then coffee or
                chocolate.
              </p>
            </div>
          </div>
        </div>

        <StepCarousel steps={steps} />
      </main>
    </>
  );
};

export default CoffeePage;
