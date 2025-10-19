import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#ff6a00] via-[#ff00e0] via-40% to-[#00aaff] opacity-80 blur-2xl"
        style={{
          transform: "rotate(-2deg) scale(1.5)",
          transformOrigin: "center",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text Section */}
        <div className="max-w-2xl space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            Financial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] via-[#ff00e0] to-[#00aaff]">
              infrastructure
            </span>{" "}
            to grow your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] via-[#ff00e0] to-[#ff6a00]">
              revenue
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Join millions of companies using ChromoPay to accept payments
            online and in person, embed financial services, and grow faster.
          </p>

          <div className="flex justify-center lg:justify-start gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#635bff]"
            />
            <button className="px-5 py-3 bg-[#635bff] hover:bg-[#5146ff] text-white font-medium rounded-lg transition-all">
              Start now →
            </button>
          </div>
        </div>

        {/* Right Image  */}
        {/* <div className="relative">
          <img
            src="/mock-dashboard.png"
            alt="Dashboard"
            className="rounded-2xl shadow-2xl w-[450px] hover:scale-105 transition-transform duration-700"
          />
        </div> */}
      </div>
    </section>
  );
}
