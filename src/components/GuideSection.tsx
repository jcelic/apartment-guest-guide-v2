import type { ReactNode } from 'react';

type GuideSectionProps = {
  title: string;
  children: ReactNode;
};

const GuideSection = ({ title, children }: GuideSectionProps) => {
  return (
    <section className="mx-5 mt-8">
      <h2 className="text-xs font-bold tracking-wider text-muted uppercase">
        {title}
      </h2>

      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
};

export default GuideSection;
