'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { Building2, DoorClosedLocked, KeyRound, X } from 'lucide-react';

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
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="door-codes-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="mx-0 mt-auto mb-0 max-h-[90dvh] w-full max-w-none rounded-t-3xl border border-line bg-surface text-foreground shadow-card backdrop:bg-black/55 sm:m-auto sm:max-w-md sm:rounded-3xl"
    >
      <div className="p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 id="door-codes-title" className="text-2xl font-extrabold">
            Door codes
          </h2>

          <button
            type="button"
            aria-label="Close door codes"
            className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-surface-2 transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={onClose}
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mt-2 text-muted">You&apos;ll need both, in this order.</p>

        <div className="mt-6 space-y-3">
          <CodeCard
            icon={<Building2 />}
            title="1 · Building entrance"
            description="Keypad at the building entrance"
          >
            <span>00</span>
            <span
              role="img"
              aria-label="key button"
              className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-surface text-accent"
            >
              <KeyRound className="size-5" />
            </span>
            <span>0000</span>
          </CodeCard>

          <CodeCard
            icon={<DoorClosedLocked />}
            title="2 · Key lockbox"
            description="On the wall next to the apartment door"
          >
            <span>0000</span>
          </CodeCard>
        </div>
      </div>
    </dialog>
  );
};

export default DoorCodesDialog;
