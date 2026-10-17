'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

type Item = {
  title: string;
  text: string;
  image: StaticImageData;
};

type Group = {
  name: string;
  items: Item[];
};

type EssentialsListProps = {
  groups: Group[];
};

const EssentialsList = ({ groups }: EssentialsListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = groups.flatMap((group) => group.items);
  const photos = items.map((item) => ({
    src: item.image,
    caption: `${item.title} · ${item.text}`,
  }));

  return (
    <>
      {groups.map((group) => (
        <section key={group.name} className="mt-8 first:mt-6">
          <h2 className="text-xs font-bold tracking-wider text-muted uppercase">
            {group.name}
          </h2>

          <ul
            role="list"
            className="mt-3 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface"
          >
            {group.items.map((item) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(items.indexOf(item))}
                  className="flex w-full cursor-pointer items-center gap-4 p-4 text-left transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-line">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="128px"
                      className="object-cover"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-extrabold">{item.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {item.text}
                    </span>
                  </span>

                  <Maximize2 className="size-5 shrink-0 text-muted" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

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

export default EssentialsList;
