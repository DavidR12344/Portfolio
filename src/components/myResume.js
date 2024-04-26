import React from 'react';

function MyResume({ profile, link }) {
    return (
        <div className="resume-card">
            <img className="profile-image" src={profile} alt="Profile" />
            <a className="resume-link" href={link} target="_blank" rel="noopener noreferrer">View My Resume</a>
        </div>
    );
}

export default MyResume;
