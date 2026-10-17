import type { Metadata } from 'next';
import { Check, Moon, Sun, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'House rules',
};

const rules = [
  {
    allowed: false,
    title: 'No smoking inside',
    text: 'Smoking is fine on the terrace.',
  },
  {
    allowed: true,
    title: 'Keep the door locked',
    text: "Even when you're inside.",
  },
  {
    allowed: true,
    title: 'Tell us if something breaks',
    text: 'No stress — just let us know as soon as you can.',
  },
];

const HouseRulesPage = () => {
  return (
    <>
      <PageHeader title="House rules" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">House rules</h1>

        <p className="mt-2 text-muted">
          A few simple things that keep everyone happy.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-line bg-surface p-5">
            <dt className="text-xs font-bold tracking-wider text-muted uppercase">
              Check-in
            </dt>
            <dd className="mt-2 text-4xl font-extrabold tabular-nums">14:00</dd>
            <dd className="mt-1 text-sm text-muted">from</dd>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5">
            <dt className="text-xs font-bold tracking-wider text-muted uppercase">
              Check-out
            </dt>
            <dd className="mt-2 text-4xl font-extrabold tabular-nums">10:00</dd>
            <dd className="mt-1 text-sm text-muted">by</dd>
          </div>
        </dl>

        <p className="mt-3 text-center text-sm text-muted">
          These times give us enough time to prepare the apartment for the next
          guests.
        </p>

        <div className="mt-6 rounded-3xl border border-line bg-surface p-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
              <Moon />
            </span>

            <h2 className="font-extrabold">Quiet hours</h2>
          </div>

          <p className="mt-3 text-muted">
            It&apos;s a residential building with permanent neighbours — noise
            carries in the hallway, stairs and elevator.
          </p>

          <dl className="mt-4 divide-y divide-line rounded-2xl bg-surface-2 px-4">
            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="flex items-center gap-2 font-bold">
                <Sun className="size-5 text-accent" />
                Afternoon
              </dt>
              <dd className="text-xl font-extrabold whitespace-nowrap tabular-nums">
                14:00–16:00
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="flex items-center gap-2 font-bold">
                <Moon className="size-5 text-accent" />
                Night
              </dt>
              <dd className="text-xl font-extrabold whitespace-nowrap tabular-nums">
                23:00–07:00
              </dd>
            </div>
          </dl>

          <p className="mt-4 text-sm text-muted">
            Travelling with kids? Please keep running and loud play out of the
            hallway and elevator.
          </p>
        </div>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          In the apartment
        </h2>

        <ul
          role="list"
          className="mt-3 divide-y divide-line rounded-3xl border border-line bg-surface"
        >
          {rules.map((rule) => (
            <li key={rule.title} className="flex items-center gap-4 p-4">
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:size-6 ${
                  rule.allowed
                    ? 'bg-success-soft text-success'
                    : 'bg-danger-soft text-danger'
                }`}
              >
                {rule.allowed ? <Check /> : <X />}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-extrabold">{rule.title}</p>
                <p className="mt-0.5 text-sm text-muted">{rule.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HouseRulesPage;
