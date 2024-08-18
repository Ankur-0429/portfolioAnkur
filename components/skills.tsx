import Image from "next/image";
import Docker from "@/public/skills/Docker.svg";
import Spring from "@/public/skills/Spring.svg";
import React from "@/public/skills/React.svg";
import AWS from "@/public/skills/AWS.svg";
import PostgreSQl from "@/public/skills/PostgreSQL.svg";
import Typescript from "@/public/skills/Typescript.svg";
import Python from "@/public/skills/Python.svg";
import Git from "@/public/skills/Git.svg";
import Kubernetes from "@/public/skills/Kubernetes.svg";
import Helm from "@/public/skills/Helm.svg";
import OpenAPI from "@/public/skills/OpenAPI.svg";

export default function Skills() {
  const logos = [
    { src: Docker, alt: "Docker" },
    { src: Kubernetes, alt: "Kubernetes" },
    { src: Helm, alt: "Helm" },
    { src: Spring, alt: "Spring" },
    { src: React, alt: "React" },
    { src: AWS, alt: "AWS" },
    { src: PostgreSQl, alt: "PostgreSQL" },
    { src: Typescript, alt: "Typescript" },
    { src: OpenAPI, alt: "OpenAPI" },
    { src: Python, alt: "Python" },
    { src: Git, alt: "Git" },
  ];

  return (
    <div className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="group-hover:paused flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={80} loading="lazy" />
          </li>
        ))}
      </ul>
      <ul
        className="group-hover:paused flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true">
        {logos.map((logo, index) => (
          <li aria-hidden key={index}>
            <Image src={logo.src} alt={logo.alt} height={80} />
          </li>
        ))}
      </ul>
    </div>
  );
}
