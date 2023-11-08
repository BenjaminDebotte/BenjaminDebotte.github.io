import Image from 'next/image'
import { Suspense } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ArrowIcon from '../../components/arrow-icon';
import Badge from '../../components/badge';
import ChannelSkeleton from '../../components/channel-skeleton';
import ChannelLink from '../../components/channel-link';
import { Tabs, TabSection } from '../../components/tabs';
import ThemeImage from '../../components/theme-image';

// Static import of pictures 
import LibertyGlobalLogo from '../../images/company/lg-logo.png';
import avatar from '../../images/avatar.jpg'
import avatar2 from '../../images/avatar-2.png'
import JuniperDark from '../../images/company/juniper-dark.svg'
import JuniperLight from '../../images/company/juniper-light.svg'
import BodycapLight from '../../images/company/bodycap-light.svg'
import BodycapDark from '../../images/company/bodycap-dark.svg'
import LibertyGlobalDark from '../../images/company/libertyglobal-dark.svg'
import LibertyGlobalLight from '../../images/company/libertyglobal-light.svg'
import DejamobileLight from '../../images/company/dejamobile-light.svg'
import DejamobileDark from '../../images/company/dejamobile-dark.svg'
import { BadgeCheck } from 'lucide-react';



export default function Home() {
  const t = useTranslations('home');

  return (
    <section>
      <h1 className="font-semibold text-5xl mb-5 tracking-tighter">
        {t('h1')}
      </h1>
      <h4 className="font-semibold mb-8 tracking-tighter items-center justify-center">
        <BadgeCheck className="inline mr-2 " />
        {t('h4')}
      </h4>

      <p className="prose prose-neutral dark:prose-invert">
        {t('intro')}
        <span className="not-prose ">
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
        {t('second')}
      </p>

      <p className="my-9 prose prose-neutral dark:prose-invert">
        {t('tech')}
      </p>

      <div className="my-9 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <Suspense fallback={<ChannelSkeleton />}>
          <ChannelLink
            img={avatar}
            name="@BenjaminDebotte"
            link="https://github.com/BenjaminDebotte"
            brand="github"
            text={t('channels.public_repo')}
          />
          <ChannelLink
            img={avatar2}
            name="Benjamin Debotté"
            link="https://www.linkedin.com/in/benjamin-debotte/"
            brand="linkedin"
            text={t('channels.title')}
          />
        </Suspense>
      </div >

      <p className="prose prose-neutral dark:prose-invert">
        {t('growth')}
      </p>

      <Tabs>
        <TabSection
          image={<ThemeImage srcDark={BodycapDark} srcLight={BodycapLight} alt="BodyCap Logo" />}
          label={'bodycap'}
          text={t('companies.bodycap')}
          url={'https://bodycap.fr'}
        />
        <TabSection
          image={<ThemeImage srcDark={JuniperDark} srcLight={JuniperLight} alt="Juniper Logo" />}
          label='juniper'
          text={t('companies.juniper')}
          url={'https://juniper.net'}
        />
        <TabSection
          image={<ThemeImage srcDark={DejamobileDark} srcLight={DejamobileLight} alt="Dejamobile Logo" />}
          label='dejamobile'
          text={t('companies.dejamobile')}
          url="https://dejamobile.com"
        />
        <TabSection
          image={<ThemeImage srcDark={LibertyGlobalDark} srcLight={LibertyGlobalLight} alt="LibertyGlobal Logo" />}
          label='libertyglobal'
          text={t('companies.libertyglobal')}
          url='https://libertyglobal.com'
          defaultSelected
        />
      </Tabs>

      <p className="my-9 prose prose-neutral dark:prose-invert">
        {t('afk')}
      </p>

      <ul className="flex flex-col md:flex-row my-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benjamin-debotte/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">{t('bottomLinks.linkedin')}</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamindebotte"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">{t('bottomLinks.github')}</p>
          </a>
        </li>
        <li>
          <Link
            key="/contact"
            href="/contact"
            className='transition-all  [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle flex items-center hover:underline'
          >
            <ArrowIcon />
            <p className="h-7 ml-2">{t('bottomLinks.contact')}</p>
          </Link>
        </li>
      </ul>
    </section >
  )
}










