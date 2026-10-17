'use client';

import { Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

type CopyPasswordButtonProps = {
  password: string;
};

const CopyPasswordButton = ({ password }: CopyPasswordButtonProps) => {
  const t = useTranslations('Common');

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast.success(t('wifiCopied'));
    } catch {
      toast.error(t('copyFailed', { password }));
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent font-bold text-on-accent transition-colors duration-200 hover:bg-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Copy className="size-5" />
      {t('copyPassword')}
    </button>
  );
};

export default CopyPasswordButton;
