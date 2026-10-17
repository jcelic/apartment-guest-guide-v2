import type { Metadata } from 'next';
import { LockKeyhole } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('NoAccess');

  return { title: t('pageTitle') };
};

const Page = () => {
  const t = useTranslations('NoAccess');

  return (
    <main className="flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-6 text-center shadow-card">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <LockKeyhole className="size-7" />
        </span>

        <h1 className="mt-5 text-2xl font-extrabold">{t('title')}</h1>

        <p className="mt-2 text-muted">{t('text')}</p>
      </div>
    </main>
  );
};

export default Page;
