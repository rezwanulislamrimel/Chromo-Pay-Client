import React from "react";

export default function Logos() {
  const logos = [
    { name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Anthropic", src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Anthropic_logo.svg" },
    { name: "Marriott", src: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Marriott_logo.svg" },
    { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Shopify_Logo.svg" },
    { name: "Airbnb", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
    { name: "URBN", src: "https://upload.wikimedia.org/wikipedia/commons/1/13/URBN_logo.svg" },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-16 text-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-6 border-r border-dotted border-gray-200 dark:border-gray-700 last:border-r-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
