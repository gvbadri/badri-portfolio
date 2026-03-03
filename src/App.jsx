import React from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">BADRINATH</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>GUNDA VENKATA BADRINATH</h1>
        <p>Full Stack Developer | AI Enthusiast | Problem Solver</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="https://github.com/gvbadri" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="about-text">
          I am a Computer Science Engineering student based in Chennai, passionate about
          building scalable web applications and exploring artificial intelligence.
          I enjoy turning ideas into responsive digital products using clean UI design
          and efficient backend logic.
        </p>
      </section>

      <section id="skills" className="section dark">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <span>JavaScript</span>
          <span>Python</span>
          <span>Java</span>
          <span>Node.js</span>
          <span>ExpressJS</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>School Website</h3>
            <p>
              Developed a responsive academic website providing structured
              information, announcements, and user-friendly navigation using
              HTML, CSS, and JavaScript.
            </p>
          </div>

          <div className="project-card">
            <h3>Food App UI Design</h3>
            <p>
              Designed a modern food ordering application prototype using
              Figma focusing on intuitive layout, user experience principles,
              and clean interface design.
            </p>
          </div>
        </div>
      </section>

      <section id="certificates" className="section dark">
        <h2>Certificates</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Artificial Intelligence Internship</h3>
            <p>Corizo – Aug 2024 to Sep 2024</p>
          </div>
          <div className="project-card">
            <h3>UI/UX Designing Internship</h3>
            <p>Pearl Tech Solutions – Food App Design</p>
          </div>
          <div className="project-card">
            <h3>Frontend Web Development Internship</h3>
            <p>Pearl Tech Solutions – School Website</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-box">
          <p><strong>Email:</strong> badrinathgv2005@gmail.com</p>
          <p><strong>Phone:</strong> 9703448003</p>
          <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/badrinath2005</p>
          <p><strong>GitHub:</strong> https://github.com/gvbadri</p>
        </div>
      </section>

      <footer className="footer">
        © 2026 GUNDA VENKATA BADRINATH
      </footer>
    </div>
  );
}
