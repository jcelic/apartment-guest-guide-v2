'use client';

import { CircleAlert, CircleCheck, Info } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      position="top-center"
      className="max-[600px]:w-auto!"
      icons={{
        success: <CircleCheck />,
        error: <CircleAlert />,
        info: <Info />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'inset-x-0 mx-auto flex w-fit! max-w-full items-center gap-3 rounded-2xl border border-line bg-surface p-3 pr-4 font-sans text-foreground shadow-card',
          icon: 'flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent [&_svg]:size-5',
          content: 'flex min-w-0 flex-col gap-0.5',
          title: 'text-sm font-extrabold',
          description: 'text-sm text-muted',
          actionButton:
            'ml-auto shrink-0 cursor-pointer rounded-xl bg-accent px-3 py-1.5 text-sm font-bold text-on-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        },
      }}
    />
  );
};

export default Toaster;
