import Image from 'next/image'
import { Suspense } from 'react';
import ArrowIcon from './components/arrow-icon';
import Badge from './components/badge';
import ChannelSkeleton from './components/channel-skeleton';
import ChannelLink from './components/channel-link';

// Static import of pictures 
import lgLogo from './images/lg-logo.png';
import avatar from './images/avatar.jpg'
import avatar2 from './images/avatar-2.png'

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`hey, I'm ben 👋`}
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a DevOps engineer, XXX, and freelancer. Worked for 4 years in France then 6 years in Netherlands at `}
        <span className="not-prose">
          <Badge href="https://www.libertyglobal.com/">
            <Image
              alt="LibertyGlobal Logomark"
              src={lgLogo}
              className="!mr-1"
              width="14"
              height="10"
            />
            LibertyGlobal
          </Badge>
        </span>
        {`, where I built CI/CD platform, fullstack applications, big-data pipelines and led teams of smart minds.`}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`With a rich background in CI/CD, full-stack development, software engineering, and system architectural design,
          I am your catalyst for optimizing and accelerating your development and deployment processes.`}
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
          {`Over the past decade, I've written apps in multitude of programming languages, interacted with people for all around the world and
          always been passionated with my work. You'll find me always hacking new stuff, learning and growing.`}
        </p>
      </div>

      { /* -- Terminal section 
      <div class="mx-auto my-10">
        <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-[#2A2A2A] border-black mx-auto">
          <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
            </div>
            <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
            </div>
            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
            </div>
            <div class="mx-auto pr-16" id="terminaltitle">
              <p class="text-center text-sm">Terminal</p>
            </div>
          </div>
          <div class="pl-1 pt-1 h-auto  text-slate-50 font-mono text-xs bg-[#2A2A2A]" id="console">
            <p class="pb-1">{`Last login: ${new Date().toLocaleString()} on ttys002`}</p>
            <p class="pb-1">{`ben@bdbt:~$ echo "$(< skills)"`}</p>
            <p class="pb-1">{`# Programming: Python, NodeJS, C, C++`}</p>
            <p class="pb-1">{`# Technologies: Kubernetes, Kafka, ElasticSearch, Ansible`}</p>
            <p class="pb-1">{`# Tech. Knowledge: Security, Networking, System, Design Patterns`}</p>
            <p class="pb-1">{`# Knowledge: Problem-solving, Architecture, Teamwork, Lazy-but-clever mindset`}</p>
            <p class="pb-1">{`ben@bdbt:~$`}</p>
          </div>
        </div>
      </div>
      */}

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










