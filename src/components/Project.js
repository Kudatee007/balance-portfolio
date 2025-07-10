// ProjectHero.jsx
import React from "react";
import "./styles/Project.css"

const Project = ({ backgroundClass, title }) => (
  <section className={`project-hero ${backgroundClass}`}>
    <h2 className="project-title">{title}</h2>
  </section>
);

export default Project;