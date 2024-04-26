import React from "react";

function Profile({ title, name, email, from, subtitle, education, language, optional, doing}) {
    return <div className="container">
    <main className="about-grid">
        <section>
            <h2>{title}</h2>
            <p>Name: <span>{name}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>From: <span>{from}</span></p>
        </section>
        <section>
            <h2>{subtitle}</h2>
            <p>Education: <span>{education}</span></p>
            <p>Languages: <span>{language}</span></p>
        </section>
        <section>
            <h2>{optional}</h2>
            <p>What I do: <span>{doing}</span></p>
        </section>
    </main>
</div>
}

export default Profile;