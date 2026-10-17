import type { ReactNode } from 'react';

type StepVariant = 'default' | 'success';

type StepProps = {
  number: number;
  title: string;
  variant?: StepVariant;
  children: ReactNode;
};

const circleColors: Record<StepVariant, string> = {
  default: 'bg-accent text-on-accent',
  success: 'bg-success-soft text-success',
};

const Step = ({ number, title, variant = 'default', children }: StepProps) => {
  return (
    <li className="relative flex gap-4 before:absolute before:top-12 before:-bottom-4 before:left-5.25 before:w-0.5 before:bg-line last:before:hidden">
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-full font-extrabold ${circleColors[variant]}`}
      >
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
