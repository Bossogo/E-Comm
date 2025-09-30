'use client';
import SearchBar from '@/components/home/SearchBar';

export default function ContactPage() {
  return (
    <>
      <div className="flex justify-center bg-white py-12 px-4">
        <div className="w-full max-w-5xl rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 min-h-[420px] md:min-h-[560px] flex items-center justify-center">
            <img
              src="/images/union.png"
              alt="Background shape"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <img
              src="/images/call 1.png"
              alt="Contact girl"
              className="relative hidden sm:block md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-30 w-60 sm:w-72 md:w-[480px] max-w-none pointer-events-none"
            />

            <div className="absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 text-white text-center md:text-left mt-6 md:mt-0 px-4">
              <h2 className="text-3xl md:text-4xl font-extralight leading-tight mb-5 md:absolute md:-top-32">
                Get in touch
              </h2>

              <div className="space-y-4 max-w-xs mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-lg">contact@e-comm.org</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-lg">+234 456 0985 14</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-lg leading-snug">
                    29 Prince Hakeem Lekki Phase 1, Lagos.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12">
            <form className="w-full max-w-md space-y-6">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <textarea
                placeholder="Type your message"
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <SearchBar />
      </div>
    </>
  );
}
