import React, { Component } from 'react'
import './projectCard.css'

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="projectCard">
        <h3>{project.name}</h3>
        <a href={project.link} target="_blank">
        <img className="project-img" src={project.imgSrc} alt={project.name}/>
        </a>
        
        <section className="skills">
          <h4>Tecnologias utilizadas:</h4>
        <ul className="skills-list">
          { project.skills.map((skill) => (
            <li key={ skill + project.key }>{skill}</li>
          ))}
        </ul>
        </section>

      </div>
    )
  }
}
