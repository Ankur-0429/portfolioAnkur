"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { FileText, LinkedinIcon, Mail } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import MovableBlurGradient from "./movable-gradient";

const dockItemDesktop = [
  {
    title: "Github",
    icon: <IconBrandGithub color="black" />,
    href: "https://github.com/ankur-0429",
  },
  {
    title: "Linkedin",
    icon: <LinkedinIcon color="black" />,
    href: "https://www.linkedin.com/in/ankur-ahir-93b041211",
  },
  {
    title: "Resume",
    icon: <FileText color="black" />,
    href: "https://drive.google.com/file/d/1lyxDJP1tqZW0tiW1eAgl5Pj0ROYnQRz6/view?usp=sharing",
  },
];
const dockItemMobile = [
  {
    title: "Github",
    icon: <IconBrandGithub color="black" />,
    href: "https://github.com/ankur-0429",
  },
  {
    title: "Linkedin",
    icon: <LinkedinIcon color="black" />,
    href: "https://www.linkedin.com/in/ankur-ahir-93b041211",
  },
  {
    title: "Resume",
    icon: <FileText color="black" />,
    href: "https://drive.google.com/file/d/1lyxDJP1tqZW0tiW1eAgl5Pj0ROYnQRz6/view?usp=sharing",
  },
  {
    title: "Mail",
    icon: <Mail color="black" />,
    href: "mailto:ahir.ankur0429@gmail.com",
  },
];
const Intro = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px");
  return (
    <MovableBlurGradient>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-80 md:opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0">
          <div className="flex w-screen justify-between px-10">
            <div className="flex-1" />
            <div className="mb-5">
              <FloatingDock
                items={isLargeScreen ? dockItemDesktop : dockItemMobile}
              />
            </div>
            <div className="flex flex-1 justify-end">
              <div className="hidden lg:flex items-center justify-center mb-5">
                <a href="mailto:ahir.ankur0429@gmail.com" className="z-10">
                  <div className="bg-[#FFFFE3] rounded-full p-3">
                    <Mail color="black" />
                  </div>
                </a>
                <div className="pr-3 lg:block pl-8 py-3 bg-[#171717] ml-[-1.5rem] rounded-2xl">
                  <p>ahir.ankur0429@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-center">
          <div className="p-2 px-4 border rounded-full border-muted-foreground lg:py-4 mr-auto flex items-center gap-x-3">
            <div className="text-white text-md sm:text-xl">I&apos;m Ankur</div>
            <div className="bg-green-500 w-2 h-2 rounded-full sm:w-3 sm:h-3 md:h-4 md:w-4">
              <div className="bg-green-500 w-2 h-2 rounded-full sm:w-3 sm:h-3 md:h-4 md:w-4 animate-ping" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-5xl font-semibold text-[#FFD074] md:text-6xl lg:text-8xl">
              FULLSTACK
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-5xl font-semibold text-[#16F1D1] md:text-6xl lg:text-8xl">
              <span className="text-white">&</span> MOBILE
            </div>
            <div>
              <p>Based in Santa</p>
              <p>Cruz, CA</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-5xl font-semibold text-[#A273FE] md:text-6xl lg:text-8xl">
              DEVELOPER
            </div>
          </div>
        </div>
      </div>
    </MovableBlurGradient>
  );
};

export default Intro;
