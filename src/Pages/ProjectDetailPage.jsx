import { useParams } from "react-router-dom";
import projects from "./projects"; // Assuming this is your project data

const ProjectDetailsPage = () => {
  const { id } = useParams(); // Get the project ID from the URL
  console.log(id)

  // Find the project by its ID
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <h1>{project.project}</h1>
      <img src={project.img} alt={project.project} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectDetailsPage;
