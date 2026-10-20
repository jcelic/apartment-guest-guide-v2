import type { ReactNode } from 'react';

type StatusCardProps = {
  illustration: ReactNode;
  title: string;
  text: string;
  children?: ReactNode;
};

const StatusCard = ({
  illustration,
  title,
  text,
  children,
}: StatusCardProps) => {
  return (
    <main className="flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-line bg-surface text-center shadow-card">
        <div className="bg-accent-soft px-6 pt-8 pb-5">{illustration}</div>

        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-balance">{title}</h1>

          <p className="mt-2 text-pretty text-muted">{text}</p>

          {children}
        </div>
      </div>
    </main>
  );
};

export default StatusCard;
