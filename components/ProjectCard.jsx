"use client";

import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.id}`} className="project-card">
      <div className="project-card__image">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div className="img-placeholder" style={{ display: project.thumbnail ? "none" : "flex" }}>
          No Image
        </div>
      </div>
      <div className="project-card__info">
        <p className="project-card__title">{project.title}</p>
        <p className="project-card__category">{project.category}</p>
      </div>
    </Link>
  );
}
