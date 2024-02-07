import React from 'react'
import Navbar from '../Navbar'
import StarrySky from '../starrysky/StarrySky'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <>
      <StarrySky />
      <Navbar />
      <div className="container a">
        <div className="card-container">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects
