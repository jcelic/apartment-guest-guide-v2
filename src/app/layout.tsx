import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Toaster from '@/components/Toaster';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guest Guide | Apartment Matea',
  robots: {
    index: false,
    follow: false,
  },
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
