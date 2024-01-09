'use client';
import { LayoutGroup } from 'framer-motion';
import { Languages } from 'lucide-react';
import NavItem from './nav-item';
import { Suspense } from 'react';
import ThemeSwitch from './theme-switch';
import { Link, usePathname } from '../navigation';

import { useLocale } from "next-intl";



export default function Navbar() {

  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = ((l) => l === "fr" ? "en" : "fr");

  const navItems = {
    '/': {
      name: "home",
    },
    '/contact': {
      name: 'contact',
    }
  };

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
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </Suspense>
            </div>
            <Suspense fallback={null}>
              <ThemeSwitch className="flex ml-auto pt-1 pl-2 !mb-0 border-b border-transparent hover:border-neutral-50 hover:dark:borer-neutral-700" />
            </Suspense>
            <Link href={pathname} locale={nextLocale(locale)}>
              <span className="!mb-0 flex ml-6 pt-1 text-xl bold align-middle uppercase border-b border-transparent hover:border-neutral-50 hover:dark:borer-neutral-700">
                <Languages className="mr-2" />{locale}
              </span>
            </Link>
          </nav>
        </LayoutGroup>
      </div>
    </aside >
  );
}
