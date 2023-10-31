import Image from 'next/image'
import { Suspense } from 'react';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelSkeleton() {
  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px] !ml-0" />
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px]" />
    </>
  );
}

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

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
              src="/lg-logo.png"
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
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Over the past decade, I've written apps in multitude of programming languages, interacted with people for all around the world and
          always been passionated with my work. You'll find me always hacking new stuff, learning and growing.`}
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
    </section>
  )
}
