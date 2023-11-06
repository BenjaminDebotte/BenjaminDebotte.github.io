import './globals.css'
import Providers from './providers';
import Navbar from '../../components/navbar';
import { GeistSans, GeistMono } from 'geist/font';
import clsx from 'clsx';

import ogImage from '../../images/logo.png'

export const metadata = {
  metadataBase: new URL('https:/bdbt.dev'),
  title: {
    default: 'Benjamin Debotté',
    template: '%s | Benjamin Debotté',
  },
  description: 'DevOps Engineer, Freelancer, Pizza maker.',
  openGraph: {
    title: 'Benjamin Debotté',
    description: 'DevOps Engineer, Freelancer, Pizza maker.',
    url: 'https://bdbt.dev',
    siteName: 'BDBT',
    locale: 'en_US',
    type: 'website',
    app_id: '715928357054455'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
      )}>
        <Providers>
          <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
            </main>
          </div>
        </Providers>
      </body >
    </html >
  );

}
