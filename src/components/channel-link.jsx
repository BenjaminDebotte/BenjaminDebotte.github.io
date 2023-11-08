import Image from 'next/image';
import ArrowIcon from './arrow-icon';

import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';


export default async function ChannelLink({ img, link, name, text, brand }) {
  const Icon = ({ name, ...props }) => {
    const LucideIcon = dynamic(dynamicIconImports[name])

    return <LucideIcon {...props} />;
  };

  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 hover:border-neutral-700 hover:dark:border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-7 w-7 items-center -top-6 -right-10">
            <Icon name={brand} color="black" strokeWidth={1} />

            {/*tinyImg ? <Image
            alt="Logo"
            src={tinyImg}
            width="15"
            height="11"
          /> :  */}

          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {text}
          </p>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}
