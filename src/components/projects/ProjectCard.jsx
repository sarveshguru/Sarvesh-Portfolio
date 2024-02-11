import React, { useState } from 'react';
import './ProjectCard.css'
import data from '../data'
import ModalCard from './ModalCard';

const ProjectCard = () => {

    const projects = data.projects;
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCard = (projectId) => {
        setSelectedProject(projectId);
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {projects.map((project) => (
                <div className="card" key={project.id} style={{
                    backgroundColor: hoveredProject === project.id ? project.h_color : project.color
                }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => { setShowModal(true); handleCard(project.id); }}
                >
                    <div className="textbox">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="picbox" >
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}

            {
                showModal && (
                    <ModalCard
                        project={projects.find((project) => project.id === selectedProject)}
                        closeModal={closeModal}
                    />
                )
            }

        </>
    )
}

export default ProjectCard
