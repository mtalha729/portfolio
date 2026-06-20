import React, { useEffect, useMemo, useState } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import {
  categories,
  getCategoryCounts,
  projects,
} from "../../data/projects";

function ProjectCard({ project, onSelect }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      onClick={() => onSelect(project)}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={`${project.title} project thumbnail`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {isComingSoon && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            <HiSparkles className="text-sm" />
            Coming Soon
          </span>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/75 via-black/45 to-black/20 px-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="translate-y-4 text-2xl font-bold text-white transition-transform duration-500 group-hover:translate-y-0 md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 translate-y-4 text-sm font-medium text-blue-100 transition-transform delay-75 duration-500 group-hover:translate-y-0 md:text-base">
            {project.category}
          </p>
          <p className="mt-3 max-w-xs translate-y-4 text-sm leading-relaxed text-gray-200 transition-transform delay-100 duration-500 group-hover:translate-y-0">
            {isComingSoon ? "In development" : "View project details"}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-600">
              {project.category}
            </p>
          </div>
          {!isComingSoon && project.live && (
            <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
              Live
            </span>
          )}
        </div>

        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const isComingSoon = project.status === "coming-soon";
  const hasLiveDemo = Boolean(project.live);

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl animate-slide-up flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
          />
          {isComingSoon && (
            <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Coming Soon
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {project.category}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
              aria-label="Close project details"
            >
              Close
            </button>
          </div>

          <p className="text-base leading-relaxed text-gray-600">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {hasLiveDemo ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 md:text-base"
              >
                <IoOpenOutline className="text-lg" />
                Visit Live Demo
              </a>
            ) : isComingSoon ? (
              <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-800 md:text-base">
                This project is currently in development. Check back soon for
                updates.
              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700 md:text-base">
                Live demo link will be available soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryCounts = useMemo(() => getCategoryCounts(projects), []);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div className="mt-20 h-auto w-full px-4 pb-16 pt-20 md:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-950 md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          A selection of live builds and upcoming work, from interactive React
          apps to future product concepts.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer rounded-3xl border px-3 py-2 text-sm font-bold transition-all duration-300 md:px-5 md:py-2.5 md:text-base ${
              activeCategory === category
                ? "scale-105 border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "border-gray-300 bg-gray-100 text-gray-900 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            {category === "All" ? "All Projects" : category}
            <span
              className={`ml-2 rounded-lg px-2 py-0.5 text-xs font-normal md:text-sm ${
                activeCategory === category
                  ? "bg-white/20 text-white"
                  : "bg-gray-300/50 text-gray-700"
              }`}
            >
              {categoryCounts[category]}
            </span>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-wrap justify-center gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="mt-12 text-center text-gray-500">
          No projects found in this category yet.
        </p>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
