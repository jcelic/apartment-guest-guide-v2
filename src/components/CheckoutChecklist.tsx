'use client';

import { useSyncExternalStore } from 'react';
import { Check } from 'lucide-react';

type ChecklistItem = {
  id: string;
  title: string;
  text: string;
};

type CheckoutChecklistProps = {
  items: ChecklistItem[];
};

const STORAGE_KEY = 'checkout-checklist';

const listeners = new Set<() => void>();
let snapshot: string | null = null;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => {
  if (snapshot === null) {
    try {
      snapshot = localStorage.getItem(STORAGE_KEY) ?? '[]';
    } catch {
      snapshot = '[]';
    }
  }
  return snapshot;
};

const getServerSnapshot = () => '[]';

const saveDone = (done: string[]) => {
  snapshot = JSON.stringify(done);
  try {
    localStorage.setItem(STORAGE_KEY, snapshot);
  } catch {}
  listeners.forEach((listener) => listener());
};

const CheckoutChecklist = ({ items }: CheckoutChecklistProps) => {
  const done: string[] = JSON.parse(
    useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot),
  );

  const doneCount = items.filter((item) => done.includes(item.id)).length;

  const toggle = (id: string) => {
    saveDone(
      done.includes(id)
        ? done.filter((doneId) => doneId !== id)
        : [...done, id],
    );
  };

  return (
    <>
      <section className="rounded-3xl bg-deep p-6 text-white">
        <h1 className="text-sm font-bold tracking-wider text-blue-200 uppercase">
          Check-out by
        </h1>
        <p className="mt-2 text-6xl font-extrabold tabular-nums">10:00</p>
        <p className="mt-3 text-white/85">
          Next guests arrive the same day — thank you for leaving on time.
        </p>

        <p className="mt-5 text-sm font-bold">
          {doneCount} of {items.length} done
        </p>
        <div
          role="progressbar"
          aria-label="Checklist progress"
          aria-valuemin={0}
          aria-valuemax={items.length}
          aria-valuenow={doneCount}
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15"
        >
          <div
            className="h-full rounded-full bg-white transition-[width] duration-300"
            style={{ width: `${(doneCount / items.length) * 100}%` }}
          />
        </div>
      </section>

      <ul
        role="list"
        className="mt-4 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface"
      >
        {items.map((item) => {
          const isDone = done.includes(item.id);

          return (
            <li key={item.id}>
              <label className="flex cursor-pointer items-center gap-4 p-4 transition-colors duration-200 hover:bg-accent-soft">
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggle(item.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`flex size-7 shrink-0 items-center justify-center rounded-lg border-2 transition-colors duration-200 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent ${
                    isDone
                      ? 'border-success-soft bg-success-soft text-success'
                      : 'border-line bg-surface'
                  }`}
                >
                  {isDone && <Check className="size-4" strokeWidth={3} />}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-extrabold ${isDone ? 'text-muted line-through' : ''}`}
                  >
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {item.text}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CheckoutChecklist;
