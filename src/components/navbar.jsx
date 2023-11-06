'use client';
import { LayoutGroup } from 'framer-motion';
import { Languages } from 'lucide-react';
import NavItem from './nav-item';
import { Suspense } from 'react';
import ThemeSwitch from './theme-switch';
import useTranslation from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/contact': {
    name: 'contact',
  }
};

export default function Navbar() {

  const { t, lang } = useTranslation()
  console.log(lang);
  // https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/app/%5Blang%5D/components/locale-switcher.tsx
  const pathName = usePathname()
  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const nextLocale = lang?.slice(0, 2).toLowerCase() === "fr" ? "en-US" : "fr-FR";

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={`/${lang}${path}`} name={name} />;
                })}
              </Suspense>
            </div>
            <ThemeSwitch className="flex ml-auto pt-1" />
            <Link href={redirectedPathName(nextLocale)}>
              <span className="flex ml-6 pt-1 text-xl bold align-middle uppercase">
                <Languages className="mr-2" />{nextLocale.slice(0, 2)}
              </span>
            </Link>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
