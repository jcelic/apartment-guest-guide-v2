'use client';

import { useState } from 'react';
import { LockKeyhole, MessageCircle, Wifi } from 'lucide-react';
import { toast } from 'sonner';
import DoorCodesDialog from './DoorCodesDialog';
import QuickAction from './QuickAction';

const WIFI_PASSWORD = 'example-password';
const WHATSAPP_URL = 'https://wa.me/YOUR_PHONE_NUMBER';

const QuickActions = () => {
  const [codesDialogOpen, setCodesDialogOpen] = useState(false);

  const onCopyWifi = async () => {
    try {
      await navigator.clipboard.writeText(WIFI_PASSWORD);
      toast.success('Wi-Fi password copied');
    } catch {
      toast.error(`Could not copy. Password: ${WIFI_PASSWORD}`);
    }
  };

  const onShowCodes = () => {
    setCodesDialogOpen(true);
  };

  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-3 gap-3">
        <QuickAction icon={<Wifi />} label="Copy Wi-Fi" onClick={onCopyWifi} />

        <QuickAction
          icon={<LockKeyhole />}
          label="Door codes"
          onClick={onShowCodes}
        />

        <QuickAction
          icon={<MessageCircle />}
          label="Message us"
          href={WHATSAPP_URL}
          variant="success"
        />
      </div>

      <DoorCodesDialog
        open={codesDialogOpen}
        onClose={() => setCodesDialogOpen(false)}
      />
    </>
  );
};

export default QuickActions;
