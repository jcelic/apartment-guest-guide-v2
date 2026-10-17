import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Clock,
  KeyRound,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import exterior1 from '@/assets/arrival/exterior1.webp';
import exterior2 from '@/assets/arrival/exterior2.webp';
import exterior3 from '@/assets/arrival/exterior3.webp';
import path1 from '@/assets/arrival/path1.webp';
import path2 from '@/assets/arrival/path2.webp';
import path3 from '@/assets/arrival/path3.webp';
import path4 from '@/assets/arrival/path4.webp';
import path5 from '@/assets/arrival/path5.webp';
import apartment1 from '@/assets/arrival/apartment1.webp';
import apartment2 from '@/assets/arrival/apartment2.webp';
import apartment3 from '@/assets/arrival/apartment3.webp';
import apartment4 from '@/assets/arrival/apartment4.webp';
import apartment5 from '@/assets/arrival/apartment5.webp';
import apartment6 from '@/assets/arrival/apartment6.webp';
import map from '@/assets/arrival/map.webp';
import PageHeader from '@/components/PageHeader';
import PhotoStrip from '@/components/PhotoStrip';
import Step from '@/components/Step';

export const metadata: Metadata = {
  title: 'Arrival',
};

const entrancePhotos = [
  { src: exterior1, caption: 'Locate this building.' },
  { src: exterior2, caption: 'Another view of the building.' },
  { src: exterior3, caption: 'Walk to the side entrance.' },
  { src: path1, caption: 'Enter through this driveway.' },
  { src: path2, caption: 'Continue straight ahead.' },
  { src: path3, caption: 'The entrance is in the courtyard.' },
  { src: path4, caption: 'Use this door to enter the building.' },
  { src: path5, caption: 'Enter the access code on the keypad.' },
];

const doorPhotos = [
  {
    src: apartment1,
    caption: 'After entering the building, walk towards the elevator.',
  },
  { src: apartment2, caption: 'Take the elevator to the third floor.' },
  {
    src: apartment3,
    caption:
      'When you exit the elevator, turn right. The apartment door is next to the elevator.',
  },
  { src: apartment4, caption: 'Look for this apartment door.' },
  {
    src: apartment5,
    caption: 'Look for the name "Surname" on the apartment door.',
  },
];

const lockboxPhotos = [
  {
    src: apartment6,
    caption: 'The lockbox is mounted on the wall next to the apartment door.',
  },
];

const ArrivalPage = () => {
  return (
    <>
      <PageHeader title="Arrival" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <p className="text-sm font-bold tracking-wider text-accent uppercase">
          3 easy steps
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">Getting in</h1>

        <p className="mt-2 text-muted">
          From the street to your apartment in just a few minutes.
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
            <Clock />
          </span>

          <div>
            <p className="font-extrabold">Check-in from 14:00</p>
            <p className="mt-0.5 text-sm text-muted">
              If it&apos;s ready earlier, we&apos;ll message you.
            </p>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-3xl bg-line">
          <Image
            src={map}
            alt="Aerial view of the building with the walking route from the street to the entrance"
            placeholder="blur"
            sizes="(min-width: 576px) 536px, calc(100vw - 40px)"
            className="h-auto w-full"
          />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Zadar"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 font-bold transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MapPin className="size-5" />
            Example Street 1 · Directions
          </a>
        </div>

        <ol role="list" className="mt-8 space-y-4">
          <Step number={1} title="Enter the building">
            <p className="text-muted">
              The entrance is on the inner side of the building, not on the
              street side.
            </p>

            <PhotoStrip label="Entrance path" photos={entrancePhotos} />

            <div>
              <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
                Entrance code
              </h3>
              <p className="mt-3 flex items-center gap-2 rounded-2xl bg-accent-soft px-5 py-4 text-3xl leading-none font-extrabold tracking-wider tabular-nums">
                <span>00</span>
                <span
                  role="img"
                  aria-label="key button"
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-surface text-accent"
                >
                  <KeyRound className="size-5" />
                </span>
                <span>0000</span>
              </p>
            </div>
          </Step>

          <Step number={2} title="Find the apartment">
            <p className="text-muted">
              3rd floor — turn right out of the elevator, the door is right next
              to it. Name on the door:{' '}
              <strong className="font-extrabold text-foreground">
                Surname
              </strong>
              .
            </p>

            <PhotoStrip label="Way to the door" photos={doorPhotos} />

            <div>
              <PhotoStrip label="Key lockbox" photos={lockboxPhotos} />
              <p className="mt-3 flex items-center gap-2 rounded-2xl bg-accent-soft px-5 py-4 text-3xl leading-none font-extrabold tracking-wider tabular-nums">
                <span>0000</span>
              </p>
            </div>
          </Step>

          <Step number={3} title="Let us know you're in" variant="success">
            <p className="text-muted">
              Please let us know when you&apos;re in. We need your check-in time
              for the official guest registration (eVisitor).
            </p>

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-success-soft font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle className="size-5" />
              Message us on WhatsApp
            </a>
          </Step>
        </ol>

        <Link
          href="/parking"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-accent-soft p-4 font-bold text-accent-ink transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Arriving by car? See parking
          <ChevronRight className="size-5" />
        </Link>
      </main>
    </>
  );
};

export default ArrivalPage;
