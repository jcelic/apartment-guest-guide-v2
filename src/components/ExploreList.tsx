'use client';

import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import { Navigation } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PhotoButton from './PhotoButton';

type Place = {
  name: string;
  badge: string;
  text: string;
  mapsUrl: string;
  image: StaticImageData;
};

type Category = {
  id: string;
  name: string;
  places: Place[];
};

type ExploreListProps = {
  categories: Category[];
};

const ExploreList = ({ categories }: ExploreListProps) => {
  const t = useTranslations('ExploreList');
  const tCommon = useTranslations('Common');
  const [selectedId, setSelectedId] = useState(categories[0].id);

  const selected =
    categories.find((category) => category.id === selectedId) ?? categories[0];
  const [featured, ...rest] = selected.places;
  const photos = selected.places.map((place) => ({
    src: place.image,
    caption: `${place.name} · ${place.text}`,
  }));

  return (
    <>
      <div
        role="group"
        aria-label={t('categories')}
        className="-mx-5 mt-6 flex [scrollbar-width:none] gap-2 overflow-x-auto px-5 pb-1 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isSelected = category.id === selected.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedId(category.id)}
              aria-pressed={isSelected}
              className={`h-11 shrink-0 cursor-pointer rounded-full border px-4 text-sm font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isSelected
                  ? 'border-foreground bg-foreground text-surface'
                  : 'border-line bg-surface hover:bg-surface-2'
              }`}
            >
              {category.name} · {category.places.length}
            </button>
          );
        })}
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-line bg-surface">
        <div className="relative">
          <PhotoButton
            photos={photos}
            index={0}
            sizes="(min-width: 576px) 536px, calc(100vw - 40px)"
            className="aspect-16/10 w-full"
          />
          <span className="pointer-events-none absolute top-3 left-3 rounded-xl bg-surface px-3 py-1.5 text-sm font-bold">
            {featured.badge}
          </span>
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-extrabold">{featured.name}</h2>
          <p className="mt-2 text-muted">{featured.text}</p>

          <a
            href={featured.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-xl bg-accent-soft px-4 font-bold text-accent-ink transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Navigation className="size-5" />
            {tCommon('directions')}
          </a>
        </div>
      </div>

      <ul role="list" className="mt-3 space-y-3">
        {rest.map((place, index) => (
          <li
            key={place.name}
            className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-3"
          >
            <PhotoButton
              photos={photos}
              index={index + 1}
              sizes="192px"
              className="size-24 shrink-0 rounded-2xl"
            />

            <div className="min-w-0 flex-1">
              <span className="inline-block rounded-xl bg-surface-2 px-2.5 py-1 text-xs font-bold">
                {place.badge}
              </span>
              <h2 className="mt-1.5 font-extrabold">{place.name}</h2>
              <p className="mt-0.5 text-sm text-muted">{place.text}</p>
            </div>

            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tCommon('directionsTo', { place: place.name })}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Navigation className="size-5" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExploreList;
