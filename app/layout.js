// app/layout.js
import { Lato } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/layouts/client-layout';
export const metadata = {
  verification: {
    google: 'gKEg7ThRAHUGvwMjdnXn3kSQcv65GNIQ5_lgoT6d0jY',
  },
  title: {
    template: 'Indigo Consulting %s',
    default: 'Indigo Consulting',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Greece real estate',
    'luxury real estate development',
    'real estate consulting',
    'market analysis Greece',
    'redevelopment projects',
    'Golden Visa consulting',
    'case studies Greece',
    'real estate case studies',
    'Indigo Consulting services',
    'real estate investment',
    'Greece property market',
  ],
  description:
    "Discover Indigo Consulting's expertise through a curated selection of case studies...",
  authors: [{ name: 'Adam Kirwan' }, { name: 'Kasia Kruk' }],
  creator: 'A & k Fullstack Development',
  publisher: 'A & k Fullstack Development',
};

const lato = Lato({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
