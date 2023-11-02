import ArrowIcon from '../components/arrow-icon';

export default function Contact() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`Contact`}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`Tell me about your project, so we can make it happen.`}
      </p>

      <form className="my-10">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+31612341234)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
            <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 h-36 group">
          <textarea name="floating_message" id="floating_message" className="form-textarea block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slab-500 focus:outline-none focus:ring-0 focus:border-slab-600 peer" placeholder=" " required />
          <label for="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slab-600 peer-focus:dark:text-slab-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explain me what you want to achieve together.</label>
        </div>
        <button type="submit" className="flex inline-flex items-center text-center ext-black bg-slab-700 hover:bg-slab-800 focus:ring-4 focus:outline-none focus:ring-slab-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-slab-600 dark:hover:bg-slab-700 dark:focus:ring-slab-800">
          <ArrowIcon />
          <p className="ml-2 h-5">Submit</p>
        </button>
      </form>
    </section >
  );
}
