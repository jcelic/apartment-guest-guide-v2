import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import seaOrgan from '@/assets/home/sea-organ.webp';

const ExploreCard = () => {
  const t = useTranslations('ExploreCard');
  const highlights = [
    t('beaches', { count: 3 }),
    t('restaurants', { count: 6 }),
    t('sights', { count: 8 }),
  ];

  return (
    <Link
      href="/guide/explore"
      transitionTypes={['nav-forward']}
      prefetch
      className="block overflow-hidden rounded-3xl bg-deep text-white transition-colors duration-200 hover:bg-deep/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-12/5 bg-white/10">
        <Image
          src={seaOrgan}
          alt={t('imageAlt')}
          fill
          placeholder="blur"
          sizes="(min-width: 576px) 536px, calc(100vw - 40px)"
          className="object-cover object-[50%_75%]"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-extrabold">{t('title')}</h3>

        <p className="mt-2 text-white/85">{t('text')}</p>

        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-xl bg-white/15 px-3 py-1.5 text-sm font-bold"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ExploreCard;
