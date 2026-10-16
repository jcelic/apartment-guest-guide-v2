import Image from 'next/image';
import Link from 'next/link';

const highlights = ['3 beaches', '6 restaurants', '8 sights'];

const ExploreCard = () => {
  return (
    <Link
      href="/explore"
      className="block overflow-hidden rounded-3xl bg-deep text-white transition-colors duration-200 hover:bg-deep/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[12/5] bg-white/10">
        <Image
          src="/sea-organ.webp"
          alt="Aerial view of the Zadar waterfront with the Sea Organ and the Greeting to the Sun"
          fill
          sizes="100vw"
          className="object-cover object-[50%_75%]"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-extrabold">Explore Zadar</h3>

        <p className="mt-2 text-white/85">
          Beaches, food and sights we recommend.
        </p>

        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold"
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
