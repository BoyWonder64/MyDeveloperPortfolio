import Project from "./Project";
import { myProjects } from "../constants";
import { FaLocationArrow } from "react-icons/fa6";
import type { MyProject } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-15 min-h-screen mt-20 md:mt-30 max-w-7xl mx-auto"
    >
      <h2 className="font-bold text-3xl md:text-4xl">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project: MyProject) => (
        <Project
          key={project.href}
          {...project}
          subDescription={project.subDescription ?? []}
        />
      ))}
      {/* GitHub Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/BoyWonder64"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Visit GitHub for More Projects</span>
          <FaLocationArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full"></div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
