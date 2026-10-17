import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Explore Zadar',
};

const categories = [
  {
    id: 'beaches',
    name: 'Beaches',
    places: [
      {
        name: 'Kolovare Beach',
        badge: '14 min walk',
        text: 'The most popular city beach with crystal-clear water, shaded areas and cafés nearby.',
        mapsUrl: 'https://maps.google.com/?q=Kolovare+Beach+Zadar',
        image: kolovare,
      },
      {
        name: 'Borik Beach',
        badge: '13 min drive',
        text: 'Family-friendly beach with shallow water, nearby restaurants and plenty of amenities.',
        mapsUrl: 'https://maps.google.com/?q=Borik+Beach+Zadar',
        image: borik,
      },
      {
        name: 'Uskok Beach',
        badge: '13 min drive',
        text: 'A lively beach in the Puntamika area, popular for swimming, sunbathing and beach bars.',
        mapsUrl: 'https://maps.app.goo.gl/WmZobm7i33KhZTTR8',
        image: uskok,
      },
    ],
  },
  {
    id: 'food',
    name: 'Food & drinks',
    places: [
      {
        name: 'Butler Gourmet & Cocktails',
        badge: 'Cocktails & dining',
        text: 'Modern restaurant and cocktail bar with a stylish atmosphere and creative dishes.',
        mapsUrl:
          'https://maps.google.com/?q=Butler+Gourmet+Cocktails+Garden+Zadar',
        image: butler,
      },
      {
        name: 'Harbor CookHouse',
        badge: 'Waterfront dining',
        text: 'Popular waterfront restaurant known for excellent burgers, steaks and cocktails.',
        mapsUrl: 'https://maps.google.com/?q=Harbor+CookHouse+Zadar',
        image: harbor,
      },
      {
        name: 'Bruschetta',
        badge: 'Mediterranean cuisine',
        text: 'One of Zadar’s best-known restaurants, serving Mediterranean cuisine by the sea.',
        mapsUrl: 'https://maps.google.com/?q=Restaurant+Bruschetta+Zadar',
        image: bruschetta,
      },
      {
        name: 'Foša',
        badge: 'Fine dining',
        text: 'Fine dining restaurant located beside the historic city walls and harbour.',
        mapsUrl: 'https://maps.google.com/?q=Restaurant+Fosa+Zadar',
        image: fosa,
      },
      {
        name: '4 Kantuna',
        badge: 'Dalmatian cuisine',
        text: 'Traditional Dalmatian restaurant offering local dishes in the heart of the Old Town.',
        mapsUrl: 'https://maps.google.com/?q=4+Kantuna+Zadar',
        image: kantuna,
      },
      {
        name: 'The Garden Lounge',
        badge: 'Sunset cocktails',
        text: 'The perfect place for sunset cocktails with panoramic sea views.',
        mapsUrl: 'https://maps.google.com/?q=The+Garden+Lounge+Zadar',
        image: garden,
      },
    ],
  },
  {
    id: 'sights',
    name: 'Sights',
    places: [
      {
        name: 'Sea Organ',
        badge: 'Must visit',
        text: 'A unique architectural installation that creates music using sea waves.',
        mapsUrl: 'https://maps.google.com/?q=Sea+Organ+Zadar',
        image: seaOrgan,
      },
      {
        name: 'Greeting to the Sun',
        badge: 'Sunset spot',
        text: 'A solar-powered light installation best experienced at sunset.',
        mapsUrl: 'https://maps.google.com/?q=Greeting+to+the+Sun+Zadar',
        image: greetingSun,
      },
      {
        name: 'St. Donatus Church',
        badge: 'Historic landmark',
        text: 'The symbol of Zadar and one of Croatia’s most important pre-Romanesque churches.',
        mapsUrl: 'https://maps.google.com/?q=St+Donatus+Church+Zadar',
        image: donat,
      },
      {
        name: 'Roman Forum',
        badge: 'Ancient ruins',
        text: 'The largest Roman forum on the eastern Adriatic coast.',
        mapsUrl: 'https://maps.google.com/?q=Roman+Forum+Zadar',
        image: forum,
      },
      {
        name: 'People’s Square',
        badge: 'City centre',
        text: 'The historic heart of Zadar surrounded by cafés and local life.',
        mapsUrl: 'https://maps.google.com/?q=Narodni+Trg+Zadar',
        image: peoplesSquare,
      },
      {
        name: 'Kalelarga',
        badge: 'Old Town',
        text: 'Zadar’s most famous street and the centre of city life.',
        mapsUrl: 'https://maps.app.goo.gl/zJ7NSCbcneK7XWR47',
        image: kalelarga,
      },
      {
        name: 'St. Anastasia Cathedral',
        badge: 'Cathedral',
        text: 'The largest cathedral in Dalmatia with a bell tower offering city views.',
        mapsUrl: 'https://maps.google.com/?q=St+Anastasia+Cathedral+Zadar',
        image: cathedral,
      },
      {
        name: 'Land Gate',
        badge: 'Historic gate',
        text: 'The historic entrance to the Old Town and part of Zadar’s Venetian fortifications.',
        mapsUrl: 'https://maps.google.com/?q=Land+Gate+Zadar',
        image: landGate,
      },
    ],
  },
  {
    id: 'stores',
    name: 'Stores',
    places: [
      {
        name: 'Supernova Zadar',
        badge: 'Shopping centre',
        text: 'The largest shopping centre in Zadar, with a supermarket, cafés, McDonald’s and many stores.',
        mapsUrl: 'https://maps.google.com/?q=Supernova+Zadar',
        image: supernova,
      },
      {
        name: 'Lidl',
        badge: 'Everyday groceries',
        text: 'Popular supermarket for groceries, drinks and everyday essentials.',
        mapsUrl: 'https://maps.google.com/?q=Lidl+Zadar',
        image: lidl,
      },
      {
        name: 'Kaufland',
        badge: 'Wide selection',
        text: 'Large supermarket offering groceries, household items and fresh produce.',
        mapsUrl: 'https://maps.google.com/?q=Kaufland+Zadar',
        image: kaufland,
      },
      {
        name: 'City Galleria',
        badge: 'Shopping & market',
        text: 'Shopping centre with stores, cafés and a local market.',
        mapsUrl: 'https://maps.google.com/?q=City+Galleria+Zadar',
        image: cityGalleria,
      },
      {
        name: 'Farmacia City Galleria',
        badge: 'No prescriptions',
        text: 'For pain relief, vitamins, cosmetics, sunscreen and everyday health essentials. Prescription medication is not available.',
        mapsUrl: 'https://maps.google.com/?q=Farmacia+City+Galleria+Zadar',
        image: farmacia,
      },
    ],
  },
];

const ExplorePage = () => {
  return (
    <>
      <PageHeader title="Explore Zadar" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Our Zadar picks</h1>

        <p className="mt-2 text-muted">Places we&apos;d send our friends to.</p>

        <ExploreList categories={categories} />
      </main>
    </>
  );
};

export default ExplorePage;
