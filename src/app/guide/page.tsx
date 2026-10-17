import {
  Coffee,
  DoorOpen,
  ListChecks,
  LogOut,
  Phone,
  Search,
  SquareParking,
  Tv,
  WashingMachine,
  Wifi,
} from 'lucide-react';
import { cookies } from 'next/headers';
import ExploreCard from '@/components/ExploreCard';
import GuideRow from '@/components/GuideRow';
import GuideSection from '@/components/GuideSection';
import GuideTile from '@/components/GuideTile';
import Header from '@/components/Header';
import QuickActions from '@/components/QuickActions';
import StayInfo from '@/components/StayInfo';
import { SESSION_COOKIE, readSession } from '@/lib/session';

const Page = async () => {
  const cookieStore = await cookies();
  const session = await readSession(cookieStore.get(SESSION_COOKIE)?.value);

  return (
    <main className="flex-1 pb-10">
      <section className="bg-deep pb-16 text-white">
        <div className="mx-auto max-w-xl">
          <Header />

          <div className="px-5 pt-4">
            <p className="text-sm font-bold tracking-wider text-blue-200 uppercase">
              Your guest guide
            </p>

            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              {session?.name ? `Welcome, ${session.name}` : 'Welcome'}
            </h1>

            <p className="mt-3 text-lg text-white/85">
              Everything for your stay, in one place.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-xl">
        <div className="relative z-10 mx-5 -mt-10">
          <StayInfo />
        </div>

        <QuickActions />

        <GuideSection title="Getting here">
          <ul
            role="list"
            className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <li>
              <GuideRow
                icon={<DoorOpen />}
                title="Arrival"
                description="Building entry, lockbox, 3 steps"
                href="/guide/arrival"
              />
            </li>
            <li>
              <GuideRow
                icon={<SquareParking />}
                title="Parking"
                description="Free with the apartment card"
                href="/guide/parking"
              />
            </li>
          </ul>
        </GuideSection>

        <GuideSection title="In the apartment">
          <ul role="list" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <li>
              <GuideTile
                icon={<Wifi />}
                title="Wi-Fi"
                description="Network & password"
                href="/guide/wifi"
              />
            </li>
            <li>
              <GuideTile
                icon={<Search />}
                title="Essentials"
                description="Where is everything"
                href="/guide/essentials"
              />
            </li>
            <li>
              <GuideTile
                icon={<Tv />}
                title="TV"
                description="Netflix, EON"
                href="/guide/tv"
              />
            </li>
            <li>
              <GuideTile
                icon={<Coffee />}
                title="Coffee"
                description="Dolce Gusto, 10 steps"
                href="/guide/coffee"
              />
            </li>
            <li>
              <GuideTile
                icon={<WashingMachine />}
                title="Dishwasher"
                description="Programs P1–P4"
                href="/guide/dishwasher"
              />
            </li>
            <li>
              <GuideTile
                icon={<ListChecks />}
                title="House rules"
                description="Quiet hours"
                href="/guide/house-rules"
              />
            </li>
          </ul>

          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <GuideRow
              icon={<LogOut />}
              title="Check-out checklist"
              description="6 quick things before 10:00"
              href="/guide/check-out"
              variant="highlighted"
            />
          </div>
        </GuideSection>

        <GuideSection title="Around you">
          <ExploreCard />

          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <GuideRow
              icon={<Phone />}
              title="Emergency · 112"
              description="Numbers, 24/7 pharmacy, hospital"
              href="/guide/emergency"
              variant="emergency"
            />
          </div>
        </GuideSection>
      </div>
    </main>
  );
};

export default Page;
