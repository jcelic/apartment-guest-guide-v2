import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import largeRemote from '@/assets/tv/large-remote.webp';
import smallRemote from '@/assets/tv/small-remote.webp';
import PageHeader from '@/components/PageHeader';
import PhotoButton from '@/components/PhotoButton';
import PageTransition from '@/components/PageTransition';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Tv');

  return { title: t('pageTitle') };
};

const apps = ['YouTube', 'Netflix', 'HBO Max'];

const remotes = [
  { id: 'smallRemote', src: smallRemote },
  { id: 'largeRemote', src: largeRemote },
] as const;

const TvPage = () => {
  const t = useTranslations('Tv');

  const photos = remotes.map((remote) => ({
    src: remote.src,
    caption: t(`photos.${remote.id}`),
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('subtitle')}</p>

        <div className="mt-6 rounded-3xl border border-line bg-surface p-4">
          <dl className="grid grid-cols-2 gap-3">
            {remotes.map((remote, index) => (
              <div
                key={remote.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-surface-2"
              >
                <dt className="px-4 pt-4 font-extrabold">{t(remote.id)}</dt>
                <dd className="mt-0.5 px-4 pb-4 text-sm text-pretty text-muted">
                  {t(`${remote.id}Text`)}
                </dd>
                <dd className="order-first">
                  <PhotoButton
                    photos={photos}
                    index={index}
                    sizes="(min-width: 576px) 240px, calc(50vw - 46px)"
                    className="aspect-3/5 w-full"
                  />
                </dd>
              </div>
            ))}
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
              <h2 className="text-lg font-extrabold">{t('step1Title')}</h2>
              <p className="mt-1 text-muted">{t('step1Text')}</p>
            </div>
          </li>

          <li className="flex gap-4 py-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-on-accent">
              2
            </span>
            <div>
              <h2 className="text-lg font-extrabold">{t('step2Title')}</h2>
              <p className="mt-1 text-muted">{t('step2Text')}</p>
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
              <h2 className="text-lg font-extrabold">{t('step3Title')}</h2>
              <p className="mt-1 text-muted">{t('step3Text')}</p>
            </div>
          </li>
        </ol>
      </main>
    </PageTransition>
  );
};

export default TvPage;
