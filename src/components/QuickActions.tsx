'use client';

import { useState } from 'react';
import { LockKeyhole, MessageCircle, Wifi } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import type { DoorCodes } from '@/lib/apartment';
import DoorCodesDialog from './DoorCodesDialog';
import QuickAction from './QuickAction';

const WHATSAPP_URL = 'https://wa.me/YOUR_PHONE_NUMBER';

type QuickActionsProps = {
  wifiPassword: string;
  doorCodes: DoorCodes;
};

const QuickActions = ({ wifiPassword, doorCodes }: QuickActionsProps) => {
  const t = useTranslations('QuickActions');
  const tCommon = useTranslations('Common');
  const [codesDialogOpen, setCodesDialogOpen] = useState(false);

  const onCopyWifi = async () => {
    try {
      await navigator.clipboard.writeText(wifiPassword);
      toast.success(tCommon('wifiCopied'));
    } catch {
      toast.error(tCommon('copyFailed', { password: wifiPassword }));
    }
  };

  const onShowCodes = () => {
    setCodesDialogOpen(true);
  };

  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-3 gap-3">
        <QuickAction
          icon={<Wifi />}
          label={t('copyWifi')}
          onClick={onCopyWifi}
        />

        <QuickAction
          icon={<LockKeyhole />}
          label={t('doorCodes')}
          onClick={onShowCodes}
        />

        <QuickAction
          icon={<MessageCircle />}
          label={t('messageUs')}
          href={WHATSAPP_URL}
          variant="success"
        />
      </div>

      <DoorCodesDialog
        open={codesDialogOpen}
        codes={doorCodes}
        onClose={() => setCodesDialogOpen(false)}
      />
    </>
  );
};

export default QuickActions;
