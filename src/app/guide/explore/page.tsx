import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import borik from '@/assets/explore/borik.webp';
import bruschetta from '@/assets/explore/bruschetta.webp';
import butler from '@/assets/explore/butler.webp';
import cathedral from '@/assets/explore/cathedral.webp';
import cityGalleria from '@/assets/explore/city-galleria.webp';
import donat from '@/assets/explore/donat.webp';
import farmacia from '@/assets/explore/farmacia.webp';
import forum from '@/assets/explore/forum.webp';
import fosa from '@/assets/explore/fosa.webp';
import garden from '@/assets/explore/garden.webp';
import greetingSun from '@/assets/explore/greeting-sun.webp';
import harbor from '@/assets/explore/harbor.webp';
import kalelarga from '@/assets/explore/kalelarga.webp';
import kantuna from '@/assets/explore/kantuna.webp';
import kaufland from '@/assets/explore/kaufland.webp';
import kolovare from '@/assets/explore/kolovare.webp';
import landGate from '@/assets/explore/land-gate.webp';
import lidl from '@/assets/explore/lidl.webp';
import peoplesSquare from '@/assets/explore/peoples-square.webp';
import seaOrgan from '@/assets/explore/sea-organ.webp';
import supernova from '@/assets/explore/supernova.webp';
import uskok from '@/assets/explore/uskok.webp';
import ExploreList from '@/components/ExploreList';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Explore');

  return { title: t('pageTitle') };
};

const categoryPlaces = [
  {
    id: 'beaches',
    places: [
      {
        id: 'kolovare',
        mapsUrl: 'https://maps.google.com/?q=Kolovare+Beach+Zadar',
        image: kolovare,
      },
      {
        id: 'borik',
        mapsUrl: 'https://maps.google.com/?q=Borik+Beach+Zadar',
        image: borik,
      },
      {
        id: 'uskok',
        mapsUrl: 'https://maps.app.goo.gl/WmZobm7i33KhZTTR8',
        image: uskok,
      },
    ],
  },
  {
    id: 'food',
    places: [
      {
        id: 'butler',
        mapsUrl:
          'https://maps.google.com/?q=Butler+Gourmet+Cocktails+Garden+Zadar',
        image: butler,
      },
      {
        id: 'harbor',
        mapsUrl: 'https://maps.google.com/?q=Harbor+CookHouse+Zadar',
        image: harbor,
      },
      {
        id: 'bruschetta',
        mapsUrl: 'https://maps.google.com/?q=Restaurant+Bruschetta+Zadar',
        image: bruschetta,
      },
      {
        id: 'fosa',
        mapsUrl: 'https://maps.google.com/?q=Restaurant+Fosa+Zadar',
        image: fosa,
      },
      {
        id: 'kantuna',
        mapsUrl: 'https://maps.google.com/?q=4+Kantuna+Zadar',
        image: kantuna,
      },
      {
        id: 'garden',
        mapsUrl: 'https://maps.google.com/?q=The+Garden+Lounge+Zadar',
        image: garden,
      },
    ],
  },
  {
    id: 'sights',
    places: [
      {
        id: 'seaOrgan',
        mapsUrl: 'https://maps.google.com/?q=Sea+Organ+Zadar',
        image: seaOrgan,
      },
      {
        id: 'greetingSun',
        mapsUrl: 'https://maps.google.com/?q=Greeting+to+the+Sun+Zadar',
        image: greetingSun,
      },
      {
        id: 'donat',
        mapsUrl: 'https://maps.google.com/?q=St+Donatus+Church+Zadar',
        image: donat,
      },
      {
        id: 'forum',
        mapsUrl: 'https://maps.google.com/?q=Roman+Forum+Zadar',
        image: forum,
      },
      {
        id: 'peoplesSquare',
        mapsUrl: 'https://maps.google.com/?q=Narodni+Trg+Zadar',
        image: peoplesSquare,
      },
      {
        id: 'kalelarga',
        mapsUrl: 'https://maps.app.goo.gl/zJ7NSCbcneK7XWR47',
        image: kalelarga,
      },
      {
        id: 'cathedral',
        mapsUrl: 'https://maps.google.com/?q=St+Anastasia+Cathedral+Zadar',
        image: cathedral,
      },
      {
        id: 'landGate',
        mapsUrl: 'https://maps.google.com/?q=Land+Gate+Zadar',
        image: landGate,
      },
    ],
  },
  {
    id: 'stores',
    places: [
      {
        id: 'supernova',
        mapsUrl: 'https://maps.google.com/?q=Supernova+Zadar',
        image: supernova,
      },
      {
        id: 'lidl',
        mapsUrl: 'https://maps.google.com/?q=Lidl+Zadar',
        image: lidl,
      },
      {
        id: 'kaufland',
        mapsUrl: 'https://maps.google.com/?q=Kaufland+Zadar',
        image: kaufland,
      },
      {
        id: 'cityGalleria',
        mapsUrl: 'https://maps.google.com/?q=City+Galleria+Zadar',
        image: cityGalleria,
      },
      {
        id: 'farmacia',
        mapsUrl: 'https://maps.google.com/?q=Farmacia+City+Galleria+Zadar',
        image: farmacia,
      },
    ],
  },
] as const;

const ExplorePage = () => {
  const t = useTranslations('Explore');

  const categories = categoryPlaces.map((category) => ({
    id: category.id,
    name: t(`categories.${category.id}`),
    places: category.places.map((place) => ({
      name: t(`places.${place.id}.name`),
      badge: t(`places.${place.id}.badge`),
      text: t(`places.${place.id}.text`),
      mapsUrl: place.mapsUrl,
      image: place.image,
    })),
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <ExploreList categories={categories} />
      </main>
    </PageTransition>
  );
};

export default ExplorePage;
