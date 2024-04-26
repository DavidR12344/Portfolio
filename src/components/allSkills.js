import React from "react";
import Card from "./card";

function AllSkills({ skills }) {
    return (
        <div className="project-grid">
            {skills.map((skill, index) => (
                <Card
                    key={index}
                    icon={skill.icon}
                    language={skill.language}
                />
            ))}
        </div>
    );
}

export default AllSkills;