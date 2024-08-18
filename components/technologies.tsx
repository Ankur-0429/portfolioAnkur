import Skills from "./skills";

const Technologies = () => {
  return (
    <div className="mb-20">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 md:px-10 sm:text-2xl mb-10">
        <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          TECHNOLOGIES
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic leading-relaxed text-white/70">
          My focus is on developing accessible web applications and automated deployment pipelines. I work with technologies that service business needs.
        </blockquote>
      </div>
      <Skills />
    </div>
  );
};

export default Technologies;
