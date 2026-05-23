"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

import { PROJECTS_DATA, Project } from "@/shared/data/projects";

const WorkProjects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section>
      <h2 className="section-title work__section-title">Personal Projects</h2>
      <div className="projects__grid">
        {PROJECTS_DATA.map((project) => (
          <button
            key={project.id}
            className="projects__card"
            onClick={() => setSelected(project)}
            aria-label={`View ${project.title} details`}
          >
            <div className="projects__card-image-wrapper">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="projects__card-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="projects__card-body">
              <p className="projects__card-title">{project.title}</p>
              <p className="projects__card-desc">{project.shortDesc}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="projects__modal-backdrop" onClick={() => setSelected(null)}>
          <div className="projects__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="projects__modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faX} style={{ width: "16px", height: "16px" }} />
            </button>

            <div className="projects__modal-image-wrapper">
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="projects__modal-image"
                priority
              />
            </div>

            <div className="projects__modal-body">
              <div className="projects__modal-header">
                <h3 className="projects__modal-title">{selected.title}</h3>
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__modal-github"
                  aria-label="View on GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} style={{ width: "18px", height: "18px" }} />
                  <span>GitHub</span>
                </a>
              </div>
              <p className="projects__modal-short-desc">{selected.shortDesc}</p>

              <div className="projects__modal-tags">
                {selected.tags.map((tag) => (
                  <span key={tag} className="projects__modal-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="projects__modal-story">
                <p className="projects__modal-story-label">What I learned</p>
                {selected.story.map((paragraph, i) => (
                  <p key={i} className="projects__modal-story-para">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkProjects;
