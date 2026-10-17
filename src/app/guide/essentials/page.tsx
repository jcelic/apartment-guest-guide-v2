import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
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

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Essentials');

  return { title: t('pageTitle') };
};

const groupItems = [
  {
    id: 'kitchen',
    items: [
      { id: 'ironingBoard', image: ironingBoard },
      { id: 'manuals', image: manuals },
    ],
  },
  {
    id: 'bathroom',
    items: [
      { id: 'hairDryer', image: hairDryer },
      { id: 'capsules', image: washingMachineCapsules },
    ],
  },
  {
    id: 'hallway',
    items: [
      { id: 'iron', image: iron },
      { id: 'towels', image: towels },
    ],
  },
  {
    id: 'livingRoom',
    items: [{ id: 'firstAid', image: firstAid }],
  },
] as const;

const EssentialsPage = () => {
  const t = useTranslations('Essentials');

  const groups = groupItems.map((group) => ({
    name: t(`groups.${group.id}`),
    items: group.items.map((item) => ({
      title: t(`items.${item.id}.title`),
      text: t(`items.${item.id}.text`),
      image: item.image,
    })),
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <EssentialsList groups={groups} />
      </main>
    </PageTransition>
  );
};

export default EssentialsPage;
