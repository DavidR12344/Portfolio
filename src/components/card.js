import React from "react";

function Card({ icon, language }) {
    return (
        <div className="project-card">
            <div className="icon">{icon}</div>
            <p className="language">{language}</p>
        </div>
    );
}

export default Card;
