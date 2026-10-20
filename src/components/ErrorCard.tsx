'use client';

import { RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ErrorIllustration from './ErrorIllustration';
import StatusCard from './StatusCard';

type ErrorCardProps = {
  retry: () => void;
};

const ErrorCard = ({ retry }: ErrorCardProps) => {
  const t = useTranslations('Error');

  return (
    <StatusCard
      illustration={<ErrorIllustration />}
      title={t('title')}
      text={t('text')}
    >
      <button
        type="button"
        onClick={retry}
        className="mt-6 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent px-5 font-bold text-on-accent transition-colors duration-200 hover:bg-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <RotateCcw className="size-5" />
        {t('retry')}
      </button>
    </StatusCard>
  );
};

export default ErrorCard;
