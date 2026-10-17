'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Lightbox, { type Photo } from './Lightbox';

type PhotoStripProps = {
  label: string;
  photos: Photo[];
};

const PhotoStrip = ({ label, photos }: PhotoStripProps) => {
  const t = useTranslations('Photos');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hasMany = photos.length > 1;

  return (
    <div>
      <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
        {hasMany ? t('stripTitle', { label, count: photos.length }) : label}
      </h3>

      <ul
        role="list"
        aria-label={t('stripAria', { label })}
        className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1"
      >
        {photos.map((photo, index) => (
          <li key={photo.src.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={t('openNumbered', {
                number: index + 1,
                caption: photo.caption,
              })}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={photo.src}
                alt=""
                placeholder="blur"
                sizes="240px"
                className="h-44 w-auto object-cover transition-transform duration-200 group-hover:scale-105"
              />

              {hasMany && (
                <span className="absolute top-2 left-2 rounded-full bg-foreground/70 px-2 py-0.5 text-xs font-bold text-surface">
                  {index + 1}/{photos.length}
                </span>
              )}
            </button>

            <p className="mt-2 w-0 min-w-full text-sm text-muted">
              {photo.caption}
            </p>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
};

export default PhotoStrip;
