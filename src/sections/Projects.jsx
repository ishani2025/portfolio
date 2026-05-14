import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section" id="projects">

      <h2>Selected Works</h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}

      </div>

    </section>
  );
}