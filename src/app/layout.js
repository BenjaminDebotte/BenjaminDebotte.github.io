import './globals.css'

import Navbar from './components/navbar';
import { ThemeProvider } from './components/theme-provider';
import { GeistSans, GeistMono } from 'geist/font';
import clsx from 'clsx';

export const metadata = {
  metadataBase: new URL('https://benjamindebotte.github.io'),
  title: {
    default: 'Benjamin Debotté',
    template: '%s | Benjamin Debotté',
  },
  description: 'DevOps Engineer, Freelancer, Pizza maker.',
  openGraph: {
    title: 'Benjamin Debotté',
    description: 'DevOps Engineer, Freelancer, Pizza maker.',
    url: 'https://benjamindebotte.github.io',
    siteName: 'BDBT',
    locale: 'en_US',
    type: 'website',
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
    <html suppressHydrationWarning
      lang="en"
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={clsx(
            'text-black bg-white dark:text-white dark:bg-[#111010]',
            GeistSans.variable,
            GeistMono.variable
          )}>
          <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );

}
