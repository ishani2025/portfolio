/* ProjectCard.jsx */

export default function ProjectCard({ title, image, description, github, tech }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-row">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        
        {/* ADD rel="noopener noreferrer" HERE */}
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>
    </div>
  );
}