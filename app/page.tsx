import { projects } from "@/data/index";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "design.somin — Portfolio",
};

export default function HomePage() {
  return (
    <div className="page-container">
      <main>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
