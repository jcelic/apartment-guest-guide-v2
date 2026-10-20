import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { MessageCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import CheckoutChecklist from '@/components/CheckoutChecklist';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import { SESSION_COOKIE, getStayKey, readSession } from '@/lib/session';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('CheckOut');

  return { title: t('pageTitle') };
};

const itemIds = ['ac', 'windows', 'lights', 'door', 'key', 'parking'] as const;

const CheckoutPage = async () => {
  const cookieStore = await cookies();
  const session = await readSession(cookieStore.get(SESSION_COOKIE)?.value);
  const stayKey = session ? await getStayKey(session.token) : 'unknown';
  const t = await getTranslations('CheckOut');
  const tCommon = await getTranslations('Common');

  const items = itemIds.map((id) => ({
    id,
    title: t(`items.${id}.title`),
    text: t(`items.${id}.text`),
  }));

  return (
    <PageTransition>
      <PageHeader title={t('pageTitle')} />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <CheckoutChecklist items={items} stayKey={stayKey} />

        <div className="mt-4 rounded-3xl border border-line bg-surface p-5">
          <h2 className="text-lg font-extrabold">{t('goodbyeTitle')}</h2>
          <p className="mt-1 text-muted">{t('goodbyeText')}</p>

          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-2xl bg-success-soft font-bold text-success transition-colors duration-200 hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MessageCircle className="size-5" />
            {tCommon('messageOnWhatsApp')}
          </a>
        </div>
      </main>
    </PageTransition>
  );
};

export default CheckoutPage;
