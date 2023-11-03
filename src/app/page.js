import Image from 'next/image'
import { Suspense } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

import ArrowIcon from './components/arrow-icon';
import Badge from './components/badge';
import ChannelSkeleton from './components/channel-skeleton';
import ChannelLink from './components/channel-link';
import { Tabs, Tab } from './components/tabs';
import ThemeImage from './components/theme-image';


// Static import of pictures 
import LibertyGlobalLogo from './images/company/lg-logo.png';
import avatar from './images/avatar.jpg'
import avatar2 from './images/avatar-2.png'
import JuniperDark from './images/company/juniper-dark.svg'
import JuniperLight from './images/company/juniper-light.svg'
import BodycapLight from './images/company/bodycap-light.svg'
import BodycapDark from './images/company/bodycap-dark.svg'
import LibertyGlobalDark from './images/company/libertyglobal-dark.svg'
import LibertyGlobalLight from './images/company/libertyglobal-light.svg'
import DejamobileLight from './images/company/dejamobile-light.svg'
import DejamobileDark from './images/company/dejamobile-dark.svg'

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
      {/*
      <div className="my-8 grid grid-flow-row xl:grid-cols-4 grid-cols-2 gap-4 w-full" role="tablist">
        <button id="tab-bodycap" className="fill border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4" role="tab" tabindex="-1" aria-controls='panel-bodycap'>
          <ThemeImage srcDark={BodycapDark} srcLight={BodycapLight} alt="BodyCap Logo" />
        </button>
        <button id="tab-juniper" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4" role="tab" tabindex="-1" aria-controls='panel-juniper'>
          <ThemeImage srcDark={JuniperDark} srcLight={JuniperLight} alt="Juniper Logo" />
        </button>
        <button id="tab-dejamobile" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4" role="tab" tabindex="-1" aria-controls='panel-dejamobile'>
          <ThemeImage srcDark={DejamobileDark} srcLight={DejamobileLight} alt="Dejamobile Logo" />
        </button>
        <button id="tab-libertyglobal" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4" role="tab" tabindex="0" aria-controls='panel-libertyglobal'>
          <ThemeImage srcDark={LibertyGlobalDark} srcLight={LibertyGlobalLight} alt="LibertyGlobal Logo" />
        </button>
      </div>
*/}

      <Tabs>
        <Tab image={<ThemeImage srcDark={BodycapDark} srcLight={BodycapLight} alt="BodyCap Logo" />} label="bodycap">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded justify-between px-3 py-4 w-full" >
            <p className="italic">{`Development of miniaturized sensors for the medical field, GUI applications using Qt C++ Framework and automation of technical process using Jenkins.`}
            </p>
            <a
              className=" mt-6 flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="https://bodycap.fr" target="_blank">
              <ArrowIcon />

              <p className="h-7 ml-2 underline">BodyCap</p>
            </a>
          </div>
        </Tab>
        <Tab image={<ThemeImage srcDark={JuniperDark} srcLight={JuniperLight} alt="Juniper Logo" />} label="juniper">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded justify-between px-3 py-4 w-full" >
            <p className="italic">{`Software development in Python3 with Django and setted-up a whole workflow based on git-flow, GitLab-CI to enable Continuous Integration,
                                    Delivery and Deployment of containerized applications for the Proof of Concept Lab in Juniper Networks Amsterdam. 
                                    Invited to show-case our PoC at Juniper Tech Summit in Berlin, 2016`}
            </p>
            <a
              className=" mt-6 flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="https://juniper.net" target="_blank">
              <ArrowIcon />

              <p className="h-7 ml-2 underline">Juniper Networks</p>
            </a>
          </div>
        </Tab>
        <Tab image={<ThemeImage srcDark={DejamobileDark} srcLight={DejamobileLight} alt="Dejamobile Logo" />} label="dejamobile">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded justify-between px-3 py-4 w-full" >
            <p className="italic">{`Leading redesign of internal processes with tools such as VSphere, Docker, Ansible and Vagrant to assist development and deployment of our Cloud-based Payment system against banking systems.`}
            </p>
            <a
              className=" mt-6 flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="https://dejamobile.com" target="_blank">
              <ArrowIcon />

              <p className="h-7 ml-2 underline">Dejamobile</p>
            </a>
          </div>
        </Tab>
        <Tab image={<ThemeImage srcDark={LibertyGlobalDark} srcLight={LibertyGlobalLight} alt="LibertyGlobal Logo" />} label="libertyglobal" defaultSelected>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded justify-between px-3 py-4 w-full" >
            <p className="italic">{`I've been the leader of the Data Automation Team responsible of many projects such as building and operating our CI/CD platform using Jenkins over Kubernetes,
              creation and maintenance of an in-house production monitoring tool using ReactJS, a GraphQL Hub and supporting many teams by advocating best-practices for software architecture.`}
            </p>
            <a
              className=" mt-6 flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="https://libertyglobal.com" target="_blank">
              <ArrowIcon />

              <p className="h-7 ml-2 underline">LibertyGlobal</p>
            </a>
          </div>
        </Tab>
      </Tabs>

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
          <Link
            key="/contact"
            href="/contact"
            className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle flex items-center'
          >
            <ArrowIcon />
            <p className="h-7 ml-2">contact me</p>
          </Link>
        </li>
      </ul>
    </section >
  )
}










