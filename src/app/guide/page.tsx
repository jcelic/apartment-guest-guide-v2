import {
  Coffee,
  DoorOpen,
  ListChecks,
  LogOut,
  Phone,
  Search,
  SquareParking,
  Tv,
  Utensils,
  Wifi,
} from 'lucide-react';
import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import ExploreCard from '@/components/ExploreCard';
import GuideRow from '@/components/GuideRow';
import GuideSection from '@/components/GuideSection';
import GuideTile from '@/components/GuideTile';
import Header from '@/components/Header';
import QuickActions from '@/components/QuickActions';
import ShareGuide from '@/components/ShareGuide';
import StayInfo from '@/components/StayInfo';
import { DOOR_CODES, WIFI_PASSWORD } from '@/lib/apartment';
import { SESSION_COOKIE, readSession } from '@/lib/session';
import PageTransition from '@/components/PageTransition';

const Page = async () => {
  const cookieStore = await cookies();
  const session = await readSession(cookieStore.get(SESSION_COOKIE)?.value);
  const t = await getTranslations('Home');

  return (
    <PageTransition>
      <main className="flex-1 pb-10">
        <section className="bg-deep pb-16 text-white">
          <div className="mx-auto max-w-xl">
            <Header />

            <div className="px-5 pt-4">
              <p className="text-sm font-bold tracking-wider text-blue-200 uppercase">
                {t('eyebrow')}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
                {session?.name
                  ? t('welcomeName', { name: session.name })
                  : t('welcome')}
              </h1>

              <p className="mt-3 text-lg text-white/85">{t('subtitle')}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-xl">
          <div className="relative z-10 mx-5 -mt-10">
            <StayInfo />
          </div>

          <QuickActions wifiPassword={WIFI_PASSWORD} doorCodes={DOOR_CODES} />

          {session && <ShareGuide token={session.token} />}

          <GuideSection title={t('gettingHere')}>
            <ul
              role="list"
              className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <li>
                <GuideRow
                  icon={<DoorOpen />}
                  title={t('arrival.title')}
                  description={t('arrival.description')}
                  href="/guide/arrival"
                />
              </li>
              <li>
                <GuideRow
                  icon={<SquareParking />}
                  title={t('parking.title')}
                  description={t('parking.description')}
                  href="/guide/parking"
                />
              </li>
            </ul>
          </GuideSection>

          <GuideSection title={t('inTheApartment')}>
            <ul role="list" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <li>
                <GuideTile
                  icon={<Wifi />}
                  title={t('wifi.title')}
                  description={t('wifi.description')}
                  href="/guide/wifi"
                />
              </li>
              <li>
                <GuideTile
                  icon={<Search />}
                  title={t('essentials.title')}
                  description={t('essentials.description')}
                  href="/guide/essentials"
                />
              </li>
              <li>
                <GuideTile
                  icon={<Tv />}
                  title={t('tv.title')}
                  description={t('tv.description')}
                  href="/guide/tv"
                />
              </li>
              <li>
                <GuideTile
                  icon={<Coffee />}
                  title={t('coffee.title')}
                  description={t('coffee.description')}
                  href="/guide/coffee"
                />
              </li>
              <li>
                <GuideTile
                  icon={<Utensils />}
                  title={t('dishwasher.title')}
                  description={t('dishwasher.description')}
                  href="/guide/dishwasher"
                />
              </li>
              <li>
                <GuideTile
                  icon={<ListChecks />}
                  title={t('houseRules.title')}
                  description={t('houseRules.description')}
                  href="/guide/house-rules"
                />
              </li>
            </ul>

            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <GuideRow
                icon={<LogOut />}
                title={t('checkOut.title')}
                description={t('checkOut.description')}
                href="/guide/check-out"
                variant="highlighted"
              />
            </div>
          </GuideSection>

          <GuideSection title={t('aroundYou')}>
            <ExploreCard />

            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <GuideRow
                icon={<Phone />}
                title={t('emergency.title')}
                description={t('emergency.description')}
                href="/guide/emergency"
                variant="emergency"
              />
            </div>
          </GuideSection>
        </div>
      </main>
    </PageTransition>
  );
};

export default Page;
