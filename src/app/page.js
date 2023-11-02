import Image from 'next/image'
import { Suspense } from 'react';
import { Server } from 'lucide-react'

import ArrowIcon from './components/arrow-icon';
import Badge from './components/badge';
import ChannelSkeleton from './components/channel-skeleton';
import ChannelLink from './components/channel-link';
import ThemeImage from './components/theme-image';

import { Poppins } from 'next/font/google';

// Static import of pictures 
import LibertyGlobalLogo from './images/lg-logo.png';
import avatar from './images/avatar.jpg'
import avatar2 from './images/avatar-2.png'
import JuniperDark from './images/juniper-dark.svg'
import JuniperLight from './images/juniper-light.svg'
import BodycapLight from './images/bodycap-light.svg'
import BodycapDark from './images/bodycap-dark.svg'
import LibertyGlobalDark from './images/libertyglobal-dark.svg'
import LibertyGlobalLight from './images/libertyglobal-light.svg'
import DejamobileLight from './images/dejamobile-light.svg'
import DejamobileDark from './images/dejamobile-dark.svg'

// WIP : i18n

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  style: ['normal']
});

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`hey, I'm ben 👋`}
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a DevOps engineer, team-player, and solution oriented person. 
          I spent 6 years working as the head of Data Automation at `}
        <span className="not-prose">
          <Badge href="https://www.libertyglobal.com/">
            <Image
              alt="LibertyGlobal Logomark"
              src={LibertyGlobalLogo}
              className="!mr-1"
              width="14"
              height="10"
            />
            LibertyGlobal
          </Badge>
        </span>
        {` in Amsterdam, where I managed the automation of solutions for our worldwide internal Big Data platform "Operational Data Hub".`}

      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I develop automated solutions meeting entire teams needs, teach about best practices, architect complex software in NodeJS, Python and more. This comes in all form of project like Full-stack technical apps, CI/CD infrastructure, hands-on trainings, security improvements or automating any redudant work. You can check out some of my project below, as I love to optimize my operating system firsthand.`}
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <Suspense fallback={<ChannelSkeleton />}>
          <ChannelLink
            img={avatar}
            name="@BenjaminDebotte"
            link="https://github.com/BenjaminDebotte"
            brand="github"
            text="35 public repositories"
          />
          <ChannelLink
            img={avatar2}
            name="Benjamin Debotté"
            link="https://www.linkedin.com/in/benjamin-debotte/"
            brand="linkedin"
            text="Freelance DevOps Engineer"
          />
        </Suspense>
      </div >

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Over the past decade, I've grown from a Software developer to a DevOps Leader in the largest international telecom company. Having learnt extensively from all my acquintances is one of my most valuable asset, on the human and technical level. `}
        </p>
      </div>

      <div className="my-8 grid grid-cols-4 gap-4 space-x-2 w-full h-14">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.bodycap-medical.com/" target="_blank">
            <ThemeImage srcDark={BodycapDark} srcLight={BodycapLight} alt="BodyCap Logo" sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.juniper.net" target="_blank">
            <ThemeImage srcDark={JuniperDark} srcLight={JuniperLight} alt="Juniper Logo" sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://dejamobile.com/" target="_blank">
            <ThemeImage srcDark={DejamobileDark} srcLight={DejamobileLight} alt="LibertyGlobal Logo" sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.libertyglobal.com/" target="_blank">
            <ThemeImage srcDark={LibertyGlobalDark} srcLight={LibertyGlobalLight} alt="LibertyGlobal Logo" sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </a>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`When I'm not delving into tech, you'll find me scaling boulders, cooking for my friends or pedaling on my bike, seeking inspiration and balance beyond the screen, as environment and social values are very dear to me.`}
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benjamin-debotte/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamindebotte"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">check my github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:contact@bdbt.dev"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">contact me</p>
          </a>
        </li>
      </ul>
    </section >
  )
}










