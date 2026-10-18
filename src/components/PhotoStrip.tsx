'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Lightbox, { type Photo } from './Lightbox';

type PhotoStripProps = {
  label: string;
  photos: Photo[];
};

const arrowClassName =
  'absolute top-[calc(5.5rem-1.25rem)] hidden size-10 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-foreground shadow-card backdrop-blur-sm transition-colors duration-200 hover:bg-surface pointer-fine:flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const PhotoStrip = ({ label, photos }: PhotoStripProps) => {
  const t = useTranslations('Photos');
  const stripRef = useRef<HTMLUListElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const hasMany = photos.length > 1;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const update = () => {
      setCanScrollBack(strip.scrollLeft > 4);
      setCanScrollForward(
        strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 4,
      );
    };

    const observer = new ResizeObserver(update);
    observer.observe(strip);
    strip.addEventListener('scroll', update, { passive: true });

    return () => {
      observer.disconnect();
      strip.removeEventListener('scroll', update);
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const strip = stripRef.current;
    if (!strip) return;

    strip.scrollBy({
      left: direction * (strip.clientWidth - 48),
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
        {hasMany ? t('stripTitle', { label, count: photos.length }) : label}
      </h3>

      <div className="relative">
        <ul
          ref={stripRef}
          role="list"
          aria-label={t('stripAria', { label })}
          className="mt-3 flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, index) => (
            <li
              key={photo.src.src}
              className="max-w-[calc(100%-1.75rem)] shrink-0 snap-start"
            >
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
                  className="h-44 w-auto max-w-full object-cover transition-transform duration-200 group-hover:scale-105"
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

        {canScrollBack && (
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={t('previous')}
            className={`${arrowClassName} left-2`}
          >
            <ChevronLeft className="size-5" />
          </button>
        )}

        {canScrollForward && (
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={t('next')}
            className={`${arrowClassName} right-2`}
          >
            <ChevronRight className="size-5" />
          </button>
        )}
      </div>

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
