import React from "react";
import { projects, ProjectType } from "../constants/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.scss";

const ProjectLinks: React.FC<Pick<ProjectType, "links">> = ({ links }) => {
  const { github, preview } = links;
  return (
    <div className="project-links">
      <a href={preview} rel="noopener" target="_blank" className="project-link">
        Live Demo <FontAwesomeIcon icon="external-link-alt" />
      </a>
      <a href={github} rel="noopener" target="_blank" className="project-link secondary">
        <FontAwesomeIcon icon={["fab", "github"]} /> View Source
      </a>
    </div>
  );
};

interface ProjectSkillProps {
  skill: string;
}

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill }) => {
  return <span className="project-skill">{skill}</span>;
};

const ProjectSkills: React.FC<Pick<ProjectType, "skills">> = ({ skills }) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => {
        return <ProjectSkill skill={skill} key={index} />;
      })}
    </div>
  );
};

const ProjectCard: React.FC<ProjectType> = ({ description, image, title, skills, links }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} />
      <div className="project-background" />
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <ProjectSkills skills={skills} />
        <ProjectLinks links={links} />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((proj) => (
        <ProjectCard {...proj} />
      ))}
    </div>
  );
};

export default Projects;
