'use client';

import type { ReactNode } from 'react';
import { Building2, DoorClosedLocked, KeyRound } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Sheet from './Sheet';

type DoorCodesDialogProps = {
  open: boolean;
  onClose: () => void;
};

type CodeCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

const CodeCard = ({ icon, title, description, children }: CodeCardProps) => {
  return (
    <div className="rounded-3xl border border-line bg-surface-2 p-4">
      <div className="flex items-center gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
          {icon}
        </span>

        <div>
          <h3 className="font-extrabold">{title}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-3xl leading-none font-extrabold tracking-wider tabular-nums">
        {children}
      </div>
    </div>
  );
};

const DoorCodesDialog = ({ open, onClose }: DoorCodesDialogProps) => {
  const t = useTranslations('DoorCodes');
  const tCommon = useTranslations('Common');

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={t('title')}
      closeLabel={t('close')}
    >
      <p className="mt-2 text-muted">{t('intro')}</p>

      <div className="mt-6 space-y-3">
        <CodeCard
          icon={<Building2 />}
          title={t('buildingTitle')}
          description={t('buildingText')}
        >
          <span>00</span>
          <span
            role="img"
            aria-label={tCommon('keyButton')}
            className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-surface text-accent"
          >
            <KeyRound className="size-5" />
          </span>
          <span>0000</span>
        </CodeCard>

        <CodeCard
          icon={<DoorClosedLocked />}
          title={t('lockboxTitle')}
          description={t('lockboxText')}
        >
          <span>0000</span>
        </CodeCard>
      </div>
    </Sheet>
  );
};

export default DoorCodesDialog;
