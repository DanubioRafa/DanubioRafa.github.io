import React, { Component } from 'react'
import ProjectCard from '../../components/ProjectCard'
import projectsDone from '../../data/dataProjects'
import './styleProjects.css'
export default class Projects extends Component {
  render() {
    return (
      <div className='projectPage'>
        {projectsDone.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    )
  }
}
