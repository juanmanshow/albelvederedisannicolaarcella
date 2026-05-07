import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Al Belvedere di San Nicola Arcella',
  description:
    'Boutique apartments in San Nicola Arcella, Calabria. Mediterranean stays between sea, relaxation and Riviera dei Cedri.',

  keywords: [
    'San Nicola Arcella',
    'Al Belvedere',
    'Apartments Calabria',
    'Holiday house Calabria',
    'Arcomagno',
    'Riviera dei Cedri',
    'Praia a Mare',
    'Scalea',
    'Vacation rental Calabria',
  ],

  metadataBase: new URL('https://albelvederedisannicolaarcella.com'),

  openGraph: {
    title: 'Al Belvedere di San Nicola Arcella',
    description:
      'Boutique apartments in San Nicola Arcella, Calabria.',
    url: 'https://albelvederedisannicolaarcella.com',
    siteName: 'Al Belvedere di San Nicola Arcella',
    locale: 'it_IT',
    type: 'website',

    images: [
      {
        url: '/images/hero.jpg',
        width: 1600,
        height: 900,
        alt: 'Al Belvedere di San Nicola Arcella',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Al Belvedere di San Nicola Arcella',
    description:
      'Boutique apartments in Calabria between sea and Riviera dei Cedri.',
    images: ['/images/hero.jpg'],
  },

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}