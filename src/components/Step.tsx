import type { ReactNode } from 'react';

type StepProps = {
  number: number;
  title: string;
  children: ReactNode;
};

const Step = ({ number, title, children }: StepProps) => {
  return (
    <li className="relative flex gap-4 before:absolute before:top-12 before:-bottom-4 before:left-[21px] before:w-0.5 before:bg-line last:before:hidden">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-extrabold text-on-accent">
        {number}
      </span>

      <div className="min-w-0 flex-1 rounded-3xl border border-line bg-surface p-5">
        <h2 className="text-lg font-extrabold">{title}</h2>
        <div className="mt-1 space-y-5">{children}</div>
      </div>
    </li>
  );
};

export default Step;
