"use client";
import { IconBrandGithub } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { CodeXml } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  tags: string[];
  date: string;
  description: string;
  ariaLabelDate: string;
  GithubLink: string;
  SourceLink: string;
  id: number;
}

const ProjectData: ProjectProps[] = [
  {
    title: "RecycleMe",
    description:
      "Programmed a mobile application that determines the recyclability of an item based on a picture taken by a client.",
    ariaLabelDate: "September 2021 to April 2022",
    date: "Sep 2021 - Apr 2022",
    GithubLink: "https://github.com/Solutions-Challenge/Green-day-frontend",
    SourceLink: "https://youtu.be/L2lQazLPqOk",
    tags: [
      "React Native",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Python",
      "Flask",
      "Firebase",
    ],
    id: 1,
  },
  {
    title: "ReMedia",
    description:
      "Designed a mobile application that informs clients on when to use a certain drug based on the image taken, winning second place out of 46 teams for health-based software.",
    ariaLabelDate: "January 2022",
    date: "Jan 2022",
    tags: ["Typescript", "React Native", "Javascript", "Beautiful Soup"],
    GithubLink: "https://github.com/CruzHacks-2022/frontend",
    SourceLink: "https://devpost.com/software/cruzhacks-2022-9suva2",
    id: 2,
  },
  {
    title: "SlugSwap",
    description: "Achieved first place out of 87 teams for UX/UI design, designing a React Native food-delivery app that allows college students to donate surplus food.",
    ariaLabelDate: "January 2023",
    date: "Jan 2023",
    tags: ["Typescript", "React Native", "Firebase"],
    GithubLink: "https://github.com/Ankur-0429/cruzhacks2023",
    SourceLink: "https://devpost.com/software/slug-swap-g1uz0s",
    id: 3
  }
];

const Project = (project: ProjectProps) => {
  return (
    <div className="px-4 pt-4 pb-2 border rounded-lg">
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div>
            <div className="font-medium lg:text-4xl md:text-3xl">
              {project.title}
            </div>
            <div className="text-sm leading-relaxed font-light text-white/70">
              {project.tags.join(", ")}
            </div>
          </div>
          <div>
            <span
              aria-label={project.ariaLabelDate}
              className="hidden sm:block text-sm font-semibold uppercase tracking-wide text-white/70">
              {project.date}
            </span>
          </div>
        </div>
        <p className="mt-2 leading-relaxed">{project.description}</p>
      </div>
      <div className="scale-75 w-36 ml-[-1.2rem]">
        <FloatingDock
          items={[
            {
              href: project.GithubLink,
              icon: <IconBrandGithub color="black" />,
              title: "Github",
            },
            {
              href: project.SourceLink,
              title: "Source",
              icon: <CodeXml color="black" />,
            },
          ]}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 md:px-10 sm:text-2xl mb-20">
      <h1 className="mb-6 text-2xl font-semibold sm:text-3xl md:text-4xl">
        PROJECTS
      </h1>
      <div className="flex flex-col gap-y-6">
        {ProjectData.map((e) => (
          <Project key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
