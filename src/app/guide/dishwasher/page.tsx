import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import capsules from '@/assets/dishwasher/capsules.webp';
import compartment1 from '@/assets/dishwasher/compartment1.webp';
import compartment2 from '@/assets/dishwasher/compartment2.webp';
import panel1 from '@/assets/dishwasher/panel1.png';
import panel2 from '@/assets/dishwasher/panel2.png';
import panel3 from '@/assets/dishwasher/panel3.png';
import PageHeader from '@/components/PageHeader';
import PhotoStrip from '@/components/PhotoStrip';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Dishwasher');

  return { title: t('pageTitle') };
};

const capsulePhotos = [
  { id: 'capsules', src: capsules },
  { id: 'compartment1', src: compartment1 },
  { id: 'compartment2', src: compartment2 },
] as const;

const programs = [
  { code: 'P1' },
  { code: 'P2', recommended: true },
  { code: 'P3' },
  { code: 'P4' },
] as const;

const ButtonNumber = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-md bg-foreground align-middle text-xs font-bold text-surface">
      {children}
    </span>
  );
};

const buttonNumber = (chunks: ReactNode) => (
  <ButtonNumber>{chunks}</ButtonNumber>
);

const DishwasherPage = () => {
  const t = useTranslations('Dishwasher');

  const photos = capsulePhotos.map((photo) => ({
    src: photo.src,
    caption: t(`photos.${photo.id}`),
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <ol
          role="list"
          className="mt-6 divide-y divide-line rounded-3xl border border-line bg-surface px-5"
        >
          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              1
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">{t('step1Title')}</h2>
              <p className="mt-1 text-muted">{t('step1Text')}</p>
              <div className="mt-4">
                <PhotoStrip label={t('capsule')} photos={photos} />
              </div>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              2
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-extrabold">{t('step2Title')}</h2>
              <p className="mt-1 text-muted">
                {t.rich('step2Text', { button: buttonNumber })}
              </p>
              <Image
                src={panel1}
                alt={t('step2Alt')}
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
              <h2 className="text-lg font-extrabold">{t('step3Title')}</h2>
              <p className="mt-1 text-muted">
                {t.rich('step3Text', { button: buttonNumber })}
              </p>
              <Image
                src={panel2}
                alt={t('step3Alt')}
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
              <h2 className="text-lg font-extrabold">{t('step4Title')}</h2>
              <p className="mt-1 text-muted">
                {t.rich('step4Text', { button: buttonNumber })}
              </p>
              <Image
                src={panel3}
                alt={t('step4Alt')}
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
              <h2 className="text-lg font-extrabold">{t('step5Title')}</h2>
              <p className="mt-1 text-muted">
                {t.rich('step5Text', {
                  start: buttonNumber,
                  power: buttonNumber,
                })}
              </p>
            </div>
          </li>
        </ol>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          {t('whichProgram')}
        </h2>

        <ul
          role="list"
          className="mt-3 divide-y divide-line rounded-3xl border border-line bg-surface"
        >
          {programs.map((program) => {
            const recommended = 'recommended' in program;

            return (
              <li key={program.code} className="flex items-center gap-4 p-4">
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl font-extrabold ${
                    recommended ? 'bg-accent text-on-accent' : 'bg-surface-2'
                  }`}
                >
                  {program.code}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-extrabold">
                    {t(`programs.${program.code}.name`)}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {t(`programs.${program.code}.use`)}
                  </p>
                </div>

                {recommended && (
                  <span className="text-xs font-bold tracking-wider text-accent uppercase">
                    {t('recommended')}
                  </span>
                )}
              </li>
            );
          })}
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
            <span className="block font-extrabold">{t('manualTitle')}</span>
            <span className="mt-0.5 block text-sm text-muted">
              {t('manualText')}
            </span>
          </span>

          <ExternalLink className="size-5 shrink-0 text-muted" />
        </a>
      </main>
    </PageTransition>
  );
};

export default DishwasherPage;
