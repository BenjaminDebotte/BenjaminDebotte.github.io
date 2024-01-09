"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import ArrowIcon from '../../../components/arrow-icon';


export default function Contact({ params: { locale } }) {

  const t = useTranslations('contact');

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`Contact`}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {t('intro')}
      </p>

      <form className="my-10" action={process.env.NEXT_PUBLIC_FORMSPREE_ACTION} method="POST">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("fn")}</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("ln")}</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("pn")}</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("cn")}</label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("email")}</label>
        </div>
        <div className="relative z-0 w-full mb-6 h-36 max-h-36 group">
          <textarea name="message" id="message" className="w-full h-full resize-none form-textarea block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("txt")}</label>
        </div>
        <button type="submit" className="flex items-center relative z-0 mt-14 transition-all group transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:underline" >
          <ArrowIcon />
          <p className="h-7 ml-2">{t("submit")}</p>
        </button>

      </form>

    </section >
  );
}
