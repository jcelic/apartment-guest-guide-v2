import type { Metadata } from 'next';
import { Coffee, Droplet } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
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
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Coffee');

  return { title: t('pageTitle') };
};

const stepImages = [
  { id: 'power', image: powerRed },
  { id: 'ready', image: powerGreen },
  { id: 'holderOut', image: capsuleHolderLocation },
  { id: 'capsule', image: capsuleInserted },
  { id: 'holderIn', image: capsuleHolderBack },
  { id: 'water', image: waterLevel },
  { id: 'cup', image: cup },
  { id: 'brew', image: startHot },
  { id: 'readyAgain', image: powerGreen },
  { id: 'cleanUp', image: capsuleHolderLocation },
] as const;

const CoffeePage = () => {
  const t = useTranslations('Coffee');

  const steps = stepImages.map((step) => ({
    title: t(`steps.${step.id}.title`),
    text: t(`steps.${step.id}.text`),
    image: step.image,
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <div className="mt-6 space-y-3">
          <div className="flex gap-4 rounded-3xl border border-line bg-surface p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Droplet />
            </span>

            <div>
              <h2 className="font-extrabold">{t('waterTitle')}</h2>
              <p className="mt-0.5 text-sm text-muted">{t('waterText')}</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-3xl border border-line bg-surface p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Coffee />
            </span>

            <div>
              <h2 className="font-extrabold">{t('milkTitle')}</h2>
              <p className="mt-0.5 text-sm text-muted">{t('milkText')}</p>
            </div>
          </div>
        </div>

        <StepCarousel steps={steps} />
      </main>
    </PageTransition>
  );
};

export default CoffeePage;
