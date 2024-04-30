import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';
import AllProjects from '../components/allProjects';
import AllSkills from '../components/allSkills';
import profileImg from '../images/profil.jpg';
import MyResume from '../components/myResume';
import ContactForm from '../components/contactForm';
import { Container, Row, Col } from 'react-bootstrap';
import { projects, skills } from '../data/data';

function Home() {
    return (
        <div className="page-content">
            <Header title="Welcome to my Portfolio" />
            <Container>
                <main>
                    <section>
                        <h2 className="subtitle">About Me</h2>
                        <Profile
                            title="Personal Information"
                            name="David Ruland"
                            email="david.ruland1@gmail.com"
                            from="Sweden"
                            subtitle="Education & Languages"
                            education="App developer/System developer"
                            language="Swedish, English"
                            optional="Experience"
                            doing="Develop and construct apps and websites for customer requirements"
                        />
                    </section>
                    <section>
                        <h2 className="subtitle">My Projects</h2>
                        <AllProjects projects={projects} />
                    </section>
                    <section>
                        <h2 className="subtitle">My Skills</h2>
                        <AllSkills skills={skills} />
                    </section>
                    <section>
                        <h2 className="subtitle">My Resume</h2>
                        <MyResume profile={profileImg} link="www.linkedin.com/in/david-ruland-4931b9189" />
                    </section>
                    <section>
                        <h2 className="subtitle">Contact Me</h2>
                        <ContactForm firstName="First name" lastName="Last name" email="Email" message="Subject" />
                    </section>
                </main>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default Home;
