import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#173746',
};

export const metadata: Metadata = {
  title: {
    default: 'Al Belvedere di San Nicola Arcella',
    template: '%s | Al Belvedere',
  },

  description:
    'Boutique apartments in San Nicola Arcella, Calabria. Appartamenti mediterranei vicino all’Arcomagno e alla Riviera dei Cedri.',

  metadataBase: new URL('https://albelvederedisannicolaarcella.com'),

  alternates: {
    canonical: 'https://albelvederedisannicolaarcella.com',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  keywords: [
    'San Nicola Arcella',
    'Al Belvedere',
    'Appartamenti San Nicola Arcella',
    'Casa vacanze Calabria',
    'Apartments Calabria',
    'Arcomagno',
    'Riviera dei Cedri',
    'Praia a Mare',
    'Scalea',
  ],

  openGraph: {
    title: 'Al Belvedere di San Nicola Arcella',
    description:
      'Boutique apartments in San Nicola Arcella, Calabria, near Arcomagno and Riviera dei Cedri.',
    url: 'https://albelvederedisannicolaarcella.com',
    siteName: 'Al Belvedere di San Nicola Arcella',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Al Belvedere di San Nicola Arcella',
      },
    ],
  },

  other: {
    'fb:app_id': '948299761378923',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Al Belvedere di San Nicola Arcella',
    description:
      'Boutique apartments in Calabria between sea, Arcomagno and Riviera dei Cedri.',
    images: ['/images/hero.jpg'],
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