import type { Metadata } from 'next';
import { ImageIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'TV',
};

const apps = ['YouTube', 'Netflix', 'HBO Max'];

const TvPage = () => {
  return (
    <>
      <PageHeader title="TV" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Watching TV</h1>

        <p className="mt-2 text-muted">
          Two remotes, two jobs. Here&apos;s which is which.
        </p>

        <div className="mt-6 rounded-3xl border border-line bg-surface p-4">
          <div className="flex aspect-16/10 flex-col items-center justify-center gap-2 rounded-2xl bg-line text-sm font-bold text-muted">
            <ImageIcon className="size-6" />
            Photo of both remotes
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-surface-2 p-4">
              <dt className="font-extrabold">Small remote</dt>
              <dd className="mt-0.5 text-sm text-muted">
                Everything: power, apps, Netflix
              </dd>
            </div>

            <div className="rounded-2xl bg-surface-2 p-4">
              <dt className="font-extrabold">Large remote</dt>
              <dd className="mt-0.5 text-sm text-muted">Only inside EON</dd>
            </div>
          </dl>
        </div>

        <ol
          role="list"
          className="mt-4 divide-y divide-line rounded-3xl border border-line bg-surface px-5"
        >
          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              1
            </span>
            <div>
              <h2 className="text-lg font-extrabold">Turn on the TV</h2>
              <p className="mt-1 text-muted">
                Press power on the small remote.
              </p>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              2
            </span>
            <div>
              <h2 className="text-lg font-extrabold">Streaming</h2>
              <p className="mt-1 text-muted">Pick an app on the home screen.</p>
              <ul role="list" className="mt-3 flex flex-wrap gap-2">
                {apps.map((app) => (
                  <li
                    key={app}
                    className="rounded-xl bg-surface-2 px-3 py-1.5 text-sm font-bold"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              3
            </span>
            <div>
              <h2 className="text-lg font-extrabold">TV channels (EON)</h2>
              <p className="mt-1 text-muted">
                Select the HDMI icon to open EON — live channels and the EON
                library.
              </p>
            </div>
          </li>
        </ol>
      </main>
    </>
  );
};

export default TvPage;
