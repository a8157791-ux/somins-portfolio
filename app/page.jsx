import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/index";

export default function HomePage() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
