import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="projectCard">
        <h3>{project.name}</h3>
        <img src={project.imgSrc} alt={project.name}/>

        <ul>
          Skills utilizadas:
          { project.skills.map((skill) => (
            <li key={ skill + project.key }>{skill}</li>
          ))}
        </ul>

      </div>
    )
  }
}
