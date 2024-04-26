import React from "react";
import ProjectCard from "./projectCard";

function AllProjects({ projects }) {
    return (
        <div className="project-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    language={project.language}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    );
}

export default AllProjects;