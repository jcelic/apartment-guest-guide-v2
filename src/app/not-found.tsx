import type { Metadata } from 'next';
import Link from 'next/link';
import { House } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SignpostIllustration from '@/components/SignpostIllustration';
import StatusCard from '@/components/StatusCard';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('NotFound');

  return { title: t('pageTitle') };
};

const NotFoundPage = () => {
  const t = useTranslations('NotFound');

  return (
    <StatusCard
      illustration={<SignpostIllustration />}
      title={t('title')}
      text={t('text')}
    >
      <Link
        href="/guide"
        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-5 font-bold text-on-accent transition-colors duration-200 hover:bg-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <House className="size-5" />
        {t('back')}
      </Link>
    </StatusCard>
  );
};

export default NotFoundPage;
