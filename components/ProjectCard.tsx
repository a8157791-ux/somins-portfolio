"use client";

import type { SyntheticEvent } from "react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    thumbnail?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const next = target.nextElementSibling as HTMLElement | null;
    if (next) next.style.display = "flex";
  };

  return (
    <Link href={`/project/${project.id}`} className="project-card">
      <div className="project-card__image">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={handleImageError}
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
