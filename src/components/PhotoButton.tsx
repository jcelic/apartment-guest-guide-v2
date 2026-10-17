'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Lightbox, { type Photo } from './Lightbox';

type PhotoButtonProps = {
  photos: Photo[];
  index: number;
  sizes: string;
  className?: string;
};

const PhotoButton = ({
  photos,
  index,
  sizes,
  className = '',
}: PhotoButtonProps) => {
  const t = useTranslations('Photos');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const photo = photos[index];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenIndex(index)}
        aria-label={t('open', { caption: photo.caption })}
        className={`group relative block cursor-pointer overflow-hidden bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
      >
        <Image
          src={photo.src}
          alt=""
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </button>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default PhotoButton;
