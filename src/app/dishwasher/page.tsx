import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, FileText } from 'lucide-react';
import capsules from '@/assets/dishwasher/capsules.webp';
import compartment1 from '@/assets/dishwasher/compartment1.webp';
import compartment2 from '@/assets/dishwasher/compartment2.webp';
import panel1 from '@/assets/dishwasher/panel1.png';
import panel2 from '@/assets/dishwasher/panel2.png';
import panel3 from '@/assets/dishwasher/panel3.png';
import PageHeader from '@/components/PageHeader';
import PhotoStrip from '@/components/PhotoStrip';

export const metadata: Metadata = {
  title: 'Dishwasher',
};

const capsulePhotos = [
  { src: capsules, caption: 'Capsules are under the sink.' },
  {
    src: compartment1,
    caption: 'Place one capsule in the detergent compartment.',
  },
  {
    src: compartment2,
    caption: 'Close the lid before starting the dishwasher.',
  },
];

const programs = [
  { code: 'P1', name: 'Intensive · 75°C', use: 'Very dirty dishes' },
  {
    code: 'P2',
    name: 'Universal · 50–60°C',
    use: 'Most loads',
    recommended: true,
  },
  { code: 'P3', name: 'ECO · 45°C', use: 'Energy-saving' },
  { code: 'P4', name: 'Rapid', use: 'Quick wash' },
];

const ButtonNumber = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-md bg-foreground align-middle text-xs font-bold text-surface">
      {children}
    </span>
  );
};

const DishwasherPage = () => {
  return (
    <>
      <PageHeader title="Dishwasher" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Run the dishwasher</h1>

        <p className="mt-2 text-muted">One capsule, three buttons.</p>

        <ol
          role="list"
          className="mt-6 divide-y divide-line rounded-3xl border border-line bg-surface px-5"
        >
          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              1
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">Add one capsule</h2>
              <p className="mt-1 text-muted">
                Put one capsule in the detergent compartment and close the lid.
                Capsules are under the sink.
              </p>
              <div className="mt-4">
                <PhotoStrip label="Capsule" photos={capsulePhotos} />
              </div>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              2
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">Turn it on</h2>
              <p className="mt-1 text-muted">
                Press the power button <ButtonNumber>1</ButtonNumber>.
              </p>
              <Image
                src={panel1}
                alt="Dishwasher power button, marked 1"
                placeholder="blur"
                sizes="(min-width: 576px) 420px, calc(100vw - 120px)"
                className="mt-3 h-auto w-full rounded-xl"
              />
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              3
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">Choose a program</h2>
              <p className="mt-1 text-muted">
                Press PROGR. <ButtonNumber>2</ButtonNumber> until you reach the
                program you want, see the list below.
              </p>
              <Image
                src={panel2}
                alt="Dishwasher program button, marked 2"
                placeholder="blur"
                sizes="(min-width: 576px) 420px, calc(100vw - 120px)"
                className="mt-3 h-auto w-full rounded-xl"
              />
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              4
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">Start and close</h2>
              <p className="mt-1 text-muted">
                Press START <ButtonNumber>3</ButtonNumber>, then close the door.
              </p>
              <Image
                src={panel3}
                alt="Dishwasher start button, marked 3"
                placeholder="blur"
                sizes="(min-width: 576px) 420px, calc(100vw - 120px)"
                className="mt-3 h-auto w-full rounded-xl"
              />
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              5
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">
                When it&apos;s finished
              </h2>
              <p className="mt-1 text-muted">
                Hold START <ButtonNumber>3</ButtonNumber> for a few seconds to
                reset, then press power <ButtonNumber>1</ButtonNumber> to switch
                off.
              </p>
            </div>
          </li>
        </ol>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          Which program?
        </h2>

        <ul
          role="list"
          className="mt-3 divide-y divide-line rounded-3xl border border-line bg-surface"
        >
          {programs.map((program) => (
            <li key={program.code} className="flex items-center gap-4 p-4">
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-2xl font-extrabold ${
                  program.recommended
                    ? 'bg-accent text-on-accent'
                    : 'bg-surface-2'
                }`}
              >
                {program.code}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-extrabold">{program.name}</p>
                <p className="mt-0.5 text-sm text-muted">{program.use}</p>
              </div>

              {program.recommended && (
                <span className="text-xs font-bold tracking-wider text-accent uppercase">
                  Recommended
                </span>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/manuals/dishwasher-manual.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4 transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6">
            <FileText />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-extrabold">Full manual (PDF)</span>
            <span className="mt-0.5 block text-sm text-muted">
              Other programs · paper copy in the kitchen cabinet
            </span>
          </span>

          <ExternalLink className="size-5 shrink-0 text-muted" />
        </a>
      </main>
    </>
  );
};

export default DishwasherPage;
