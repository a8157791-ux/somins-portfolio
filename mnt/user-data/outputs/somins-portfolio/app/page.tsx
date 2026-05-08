import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div
      style={{
        padding: "0 var(--container-px)",
        paddingTop: "clamp(32px, 5vw, 60px)",
        paddingBottom: "clamp(60px, 8vw, 120px)",
        maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
        margin: "0 auto",
      }}
    >
      {/* ── 3-column grid (1 col on mobile, 2 on tablet, 3 on desktop) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(32px, 4vw, 60px) clamp(16px, 2.5vw, 25px)",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ReturnType<typeof getAllProjects>[number];
  index: number;
}) {
  return (
    <Link
      href={`/project/${project.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        animationDelay: `${index * 0.1}s`,
      }}
      className="project-card-link"
    >
      {/* Thumbnail */}
      <div
        className="project-card-img"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          background: "#f0f0f0",
        }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1070px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
          className="project-card-image"
        />
        {/* Hover overlay */}
        <div
          className="project-card-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(34,34,34,0.04)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "clamp(14px, 1.8vw, 17px)",
            letterSpacing: "-0.012em",
            color: "var(--color-text)",
            lineHeight: 1.4,
          }}
        >
          {project.title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            color: "var(--color-text-sub)",
            lineHeight: 1.3,
          }}
        >
          {project.category}
        </p>
      </div>

      <style>{`
        .project-card-link:hover .project-card-image {
          transform: scale(1.04);
        }
        .project-card-link:hover .project-card-overlay {
          opacity: 1;
        }
      `}</style>
    </Link>
  );
}
