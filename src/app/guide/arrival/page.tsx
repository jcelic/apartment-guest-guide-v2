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
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
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
import PageTransition from '@/components/PageTransition';
import { DOOR_CODES } from '@/lib/apartment';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Arrival');

  return { title: t('pageTitle') };
};

const entrancePhotos = [
  { id: 'exterior1', src: exterior1 },
  { id: 'exterior2', src: exterior2 },
  { id: 'exterior3', src: exterior3 },
  { id: 'path1', src: path1 },
  { id: 'path2', src: path2 },
  { id: 'path3', src: path3 },
  { id: 'path4', src: path4 },
  { id: 'path5', src: path5 },
] as const;

const doorPhotos = [
  { id: 'apartment1', src: apartment1 },
  { id: 'apartment2', src: apartment2 },
  { id: 'apartment3', src: apartment3 },
  { id: 'apartment4', src: apartment4 },
  { id: 'apartment5', src: apartment5 },
] as const;

const lockboxPhotos = [{ id: 'apartment6', src: apartment6 }] as const;

type ArrivalPhoto = (
  typeof entrancePhotos | typeof doorPhotos | typeof lockboxPhotos
)[number];

const ArrivalPage = () => {
  const t = useTranslations('Arrival');
  const tCommon = useTranslations('Common');

  const withCaptions = (photos: ReadonlyArray<ArrivalPhoto>) =>
    photos.map((photo) => ({
      src: photo.src,
      caption: t(`photos.${photo.id}`),
    }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <p className="text-sm font-bold tracking-wider text-accent uppercase">
          {t('eyebrow')}
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <div className="mt-6 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
            <Clock />
          </span>

          <div>
            <p className="font-extrabold">{t('checkInTitle')}</p>
            <p className="mt-0.5 text-sm text-muted">{t('checkInText')}</p>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-3xl bg-line">
          <Image
            src={map}
            alt={t('mapAlt')}
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
            {t('mapLink')}
          </a>
        </div>

        <ol role="list" className="mt-8 space-y-4">
          <Step number={1} title={t('step1Title')}>
            <p className="text-muted">{t('step1Text')}</p>

            <PhotoStrip
              label={t('entrancePath')}
              photos={withCaptions(entrancePhotos)}
            />

            <div>
              <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
                {t('entranceCode')}
              </h3>
              <p className="mt-3 flex items-center gap-2 rounded-2xl bg-accent-soft px-5 py-4 text-3xl leading-none font-extrabold tracking-wider tabular-nums">
                <span>{DOOR_CODES.building.prefix}</span>
                <span
                  role="img"
                  aria-label={tCommon('keyButton')}
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-surface text-accent"
                >
                  <KeyRound className="size-5" />
                </span>
                <span>{DOOR_CODES.building.code}</span>
              </p>
            </div>
          </Step>

          <Step number={2} title={t('step2Title')}>
            <p className="text-muted">
              {t.rich('step2Text', {
                strong: (chunks) => (
                  <strong className="font-extrabold text-foreground">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <PhotoStrip
              label={t('wayToDoor')}
              photos={withCaptions(doorPhotos)}
            />

            <div>
              <PhotoStrip
                label={t('keyLockbox')}
                photos={withCaptions(lockboxPhotos)}
              />
              <p className="mt-3 flex items-center gap-2 rounded-2xl bg-accent-soft px-5 py-4 text-3xl leading-none font-extrabold tracking-wider tabular-nums">
                <span>{DOOR_CODES.lockbox}</span>
              </p>
            </div>
          </Step>

          <Step number={3} title={t('step3Title')} variant="success">
            <p className="text-muted">{t('step3Text')}</p>

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-success-soft font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle className="size-5" />
              {tCommon('messageOnWhatsApp')}
            </a>
          </Step>
        </ol>

        <Link
          href="/guide/parking"
          transitionTypes={['nav-forward']}
          prefetch
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-accent-soft p-4 font-bold text-accent-ink transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {t('parkingLink')}
          <ChevronRight className="size-5" />
        </Link>
      </main>
    </PageTransition>
  );
};

export default ArrivalPage;
