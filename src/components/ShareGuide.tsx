'use client';

import { Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

type ShareGuideProps = {
  token: string;
};

const ShareGuide = ({ token }: ShareGuideProps) => {
  const t = useTranslations('Share');

  const onShare = async () => {
    const url = `${window.location.origin}/guide/${token}`;

    if ('share' in navigator) {
      try {
        await navigator.share({
          title: t('shareTitle'),
          text: t('shareText'),
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success(t('copied'));
    } catch {
      toast.error(t('copyFailed', { url }));
    }
  };

  return (
    <div className="mx-5 mt-3 overflow-hidden rounded-3xl border border-line bg-surface">
      <button
        type="button"
        onClick={onShare}
        className="group flex w-full cursor-pointer items-center gap-4 p-4 text-left transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6">
          <Share2 />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-extrabold">{t('title')}</span>
          <span className="mt-0.5 block text-sm text-muted">{t('text')}</span>
        </span>
      </button>
    </div>
  );
};

export default ShareGuide;
