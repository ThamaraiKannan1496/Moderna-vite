function NewsLetter() {
  return (
    <div className="bg-[#25495B] py-20 text-center text-white">
      <h2 className="pb-5 font-raleway text-2xl font-bold leading-9">
        Join our Newsletter
      </h2>
      <p className="font-roboto text-lg font-extralight">
        Subscribe to our newsletter and receive the latest news about our
        products and services!
      </p>
      <div className="mx-auto mt-6 flex max-w-md gap-x-4 font-roboto">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-3.5 py-2 text-center text-white shadow-sm focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex-none rounded-full bg-[#68A4C4] px-3.5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-[#3e95c4]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
