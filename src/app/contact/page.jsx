"use client"

import { useState, useCallback } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";

import ArrowIcon from '../components/arrow-icon';


export default function Contact() {

  const [mailStatus, setMailStatus] = useState("NONE");

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();


      const formData = new FormData(e.currentTarget);

      // Generate ReCaptcha token
      const token = await executeRecaptcha("form_submit");
      console.log("token", token);

      let object = {};
      formData.forEach((value, key) => object[key] = value);

      // Attach generated token to your API requests and validate it on the server
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token, ...object }),

      });

      setMailStatus(res.ok ? "SUCCESS" : "ERROR");


    },
    [executeRecaptcha],
  );

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`Contact`}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`Tell me about your project, so we can make it happen.`}
      </p>

      <form className="my-10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+31612341234)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 h-36 max-h-36 group">
          <textarea name="message" id="message" className="w-full h-full resize-none form-textarea block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explain me what you want to achieve together.</label>
        </div>
        <div className="relative z-0 w-full mt-14 group">
          <button disabled={mailStatus === "NONE" ? false : true} type="submit" className="h-8 border flex inline-flex items-center text-center bg-slab-700 hover:bg-slab-800 focus:ring-4 focus:outline-none focus:ring-slab-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-slab-600 dark:hover:bg-slab-700 dark:focus:ring-slab-800">
            <ArrowIcon />
            <p className="ml-2 h-5">Submit</p>
          </button>
        </div>
        <div className="relative z-0 w-full mt-6 group">
          {mailStatus === "ERROR" && <p className="prose prose-neutral dark:prose-invert decoration-red">An error occured sending the email. Please contact me at contact@bdbt.dev</p>}
          {mailStatus === "SUCCESS" && <p className="prose prose-neutral dark:prose-invert italic">Thanks, I will come back to you as soon as possible.</p>}
        </div>
      </form>

      {/* reCaptcha debug: <p className="text-sm underline decoration-pink-500">{`reCaptcha: loaded=${loaded} error=${error}`}</p>*/}
    </section >
  );
}
