"use client";

import { LinkPreview } from "./ui/link-preview";

const About = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 md:px-10 sm:text-2xl">
      <h1 className="mt-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
        WHAT I DO
      </h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic mb-4 leading-relaxed text-white/70">
        Back in 2017, I decided to build a pathfinding visualizer using HTML and
        CSS and realized my path for web development. Fast-forward to today, and
        I had the privilage to work for a{" "}
        <LinkPreview
          url="https://www.lockheedmartin.com/en-us/index.html"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          <span
            className="group text-white font-semibold transition-all duration-300 ease-in-out"
            aria-label="huge coorporation (opens in a new tab)">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              huge coorporation
            </span>
          </span>
        </LinkPreview>
        , a{" "}
        <LinkPreview
          url="https://nutanix.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          <span
            className="group text-white font-semibold transition-all duration-300 ease-in-out"
            aria-label="huge coorporation (opens in a new tab)">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              cloud infrastructure company
            </span>
          </span>
        </LinkPreview>
        , and for a{" "}
        <LinkPreview
          url="https://github.com/Solutions-Challenge/Green-day-frontend.git"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          <span
            className="group text-white font-semibold transition-all duration-300 ease-in-out"
            aria-label="huge coorporation (opens in a new tab)">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              university
            </span>
          </span>
        </LinkPreview>
        .
        <p className="text-white/70 mt-10">
          Today, my main focus is completing my masters in computer science and
          engineering, with emphasis on distributed systems and GPU programming.
        </p>
      </blockquote>
    </div>
  );
};

export default About;
