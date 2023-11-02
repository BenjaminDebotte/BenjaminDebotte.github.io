'use client';
import { LayoutGroup } from 'framer-motion';
import NavItem from './nav-item';
import { Suspense } from 'react';
import ThemeSwitch from './theme-switch';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'section',
  },
  '/guestbook': {
    name: 'another',
  },
};

export default function Navbar() {
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
            <ThemeSwitch className="flex ml-auto pt-1" />
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
