'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type Photo = {
  src: StaticImageData;
  caption: string;
};

type LightboxProps = {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
};

const Lightbox = ({ photos, initialIndex, onClose }: LightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const dialog = dialogRef.current;
    const scroller = scrollerRef.current;
    if (!dialog || !scroller) return;

    dialog.showModal();
    scroller.scrollTo({
      left: initialIndex * scroller.clientWidth,
      behavior: 'instant',
    });
  }, [initialIndex]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller || index < 0 || index >= photos.length) return;

    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: 'smooth',
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
    }
  };

  const hasMany = photos.length > 1;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={onKeyDown}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-white backdrop:bg-black/90 backdrop:backdrop-blur-sm"
    >
      <div
        ref={scrollerRef}
        onScroll={(e) =>
          setCurrent(
            Math.round(
              e.currentTarget.scrollLeft / e.currentTarget.clientWidth,
            ),
          )
        }
        className="flex h-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-contain [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <figure
            key={photo.src.src}
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
            className="flex h-full w-full shrink-0 snap-center flex-col items-center justify-center gap-4 px-4 py-20 sm:px-20"
          >
            <Image
              src={photo.src}
              alt=""
              placeholder="blur"
              sizes="100vw"
              className="h-auto max-h-[70dvh] w-auto max-w-full rounded-3xl object-contain shadow-2xl"
            />
            <figcaption className="max-w-md text-center text-lg text-white/85">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span
          className={`rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold tabular-nums ${hasMany ? '' : 'invisible'}`}
        >
          {current + 1} / {photos.length}
        </span>

        <button
          type="button"
          aria-label="Close photo viewer"
          onClick={onClose}
          className="pointer-events-auto flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/15 transition-colors duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="size-5" />
        </button>
      </div>

      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="absolute top-1/2 left-4 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goTo(current + 1)}
            disabled={current === photos.length - 1}
            className="absolute top-1/2 right-4 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}
    </dialog>
  );
};

export default Lightbox;
