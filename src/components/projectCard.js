import React from "react";

function ProjectCard({ title, language, githubLink }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>Language: {language}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
        </div>
    );
}

export default ProjectCard;
