'use client';

import { useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CarouselStep = {
  title: string;
  text: string;
  image: StaticImageData;
};

type StepCarouselProps = {
  steps: CarouselStep[];
};

const StepCarousel = ({ steps }: StepCarouselProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller || index < 0 || index >= steps.length) return;

    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: 'smooth',
    });
  };

  const onPickStep = (index: number) => {
    goTo(index);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section
        ref={cardRef}
        aria-label="Steps"
        className="mt-6 rounded-3xl border border-line bg-surface p-5"
      >
        <p className="text-sm font-bold text-accent">
          Step {current + 1} of {steps.length}
        </p>

        <div
          role="progressbar"
          aria-label="Progress"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={current + 1}
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-line"
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${((current + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div
          ref={scrollerRef}
          onScroll={(e) =>
            setCurrent(
              Math.round(
                e.currentTarget.scrollLeft / e.currentTarget.clientWidth,
              ),
            )
          }
          className="mt-4 flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              aria-hidden={index !== current}
              className="w-full shrink-0 snap-center"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-line">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 576px) 496px, calc(100vw - 80px)"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 flex size-10 items-center justify-center rounded-full bg-surface font-extrabold">
                  {index + 1}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold">{step.title}</h2>
              <p className="mt-2 text-muted">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[auto_1fr] gap-3">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex h-14 cursor-pointer items-center gap-2 rounded-2xl bg-surface-2 px-5 font-bold transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft className="size-5" />
            Back
          </button>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === steps.length - 1}
            className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent font-bold text-on-accent transition-colors duration-200 hover:bg-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next step
            <ChevronRight className="size-5" />
          </button>
        </div>
      </section>

      <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
        All steps
      </h2>

      <ol
        role="list"
        className="mt-3 space-y-1 rounded-3xl border border-line bg-surface p-2"
      >
        {steps.map((step, index) => {
          const isCurrent = index === current;
          const isDone = index < current;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => onPickStep(index)}
                aria-current={isCurrent ? 'step' : undefined}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl px-3 py-2.5 text-left font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isCurrent
                    ? 'bg-accent-soft text-accent-ink'
                    : 'hover:bg-surface-2'
                } ${isDone ? 'text-muted' : ''}`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                    isCurrent
                      ? 'bg-accent text-on-accent'
                      : isDone
                        ? 'bg-success-soft text-success'
                        : 'bg-surface-2'
                  }`}
                >
                  {index + 1}
                </span>
                {step.title}
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default StepCarousel;
