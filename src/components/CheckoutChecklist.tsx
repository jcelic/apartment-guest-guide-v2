'use client';

import { useSyncExternalStore } from 'react';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ChecklistItem = {
  id: string;
  title: string;
  text: string;
};

type CheckoutChecklistProps = {
  items: ChecklistItem[];
  stayKey: string;
};

const STORAGE_PREFIX = 'checkout-checklist';

const listeners = new Set<() => void>();
let cache: { key: string; value: string } | null = null;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const readDone = (key: string) => {
  if (cache?.key !== key) {
    let value = '[]';
    try {
      value = localStorage.getItem(key) ?? '[]';
    } catch {}
    cache = { key, value };
  }
  return cache.value;
};

const getServerSnapshot = () => '[]';

const removeOtherStays = (key: string) => {
  const staleKeys = Object.keys(localStorage).filter(
    (storedKey) =>
      storedKey !== key &&
      (storedKey === STORAGE_PREFIX ||
        storedKey.startsWith(`${STORAGE_PREFIX}:`)),
  );
  staleKeys.forEach((staleKey) => localStorage.removeItem(staleKey));
};

const saveDone = (key: string, done: string[]) => {
  cache = { key, value: JSON.stringify(done) };
  try {
    localStorage.setItem(key, cache.value);
    removeOtherStays(key);
  } catch {}
  listeners.forEach((listener) => listener());
};

const CheckoutChecklist = ({ items, stayKey }: CheckoutChecklistProps) => {
  const t = useTranslations('Checklist');
  const storageKey = `${STORAGE_PREFIX}:${stayKey}`;
  const done: string[] = JSON.parse(
    useSyncExternalStore(
      subscribe,
      () => readDone(storageKey),
      getServerSnapshot,
    ),
  );

  const doneCount = items.filter((item) => done.includes(item.id)).length;

  const toggle = (id: string) => {
    saveDone(
      storageKey,
      done.includes(id)
        ? done.filter((doneId) => doneId !== id)
        : [...done, id],
    );
  };

  return (
    <>
      <section className="rounded-3xl bg-deep p-6 text-white">
        <h1 className="text-sm font-bold tracking-wider text-blue-200 uppercase">
          {t('checkOutBy')}
        </h1>
        <p className="mt-2 text-6xl font-extrabold tabular-nums">10:00</p>
        <p className="mt-3 text-white/85">{t('nextGuests')}</p>

        <p className="mt-5 text-sm font-bold">
          {t('doneCount', { done: doneCount, total: items.length })}
        </p>
        <div
          role="progressbar"
          aria-label={t('progress')}
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
                      : 'border-muted/50 bg-surface'
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
