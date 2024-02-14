import React from 'react'
import './ProjectCard.css'

function ModalCard({ project, closeModal }) {

    return (
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="card-modal">
                <div className='modal-img-box'>
                    <img src={project.image} alt="" className="modal-img" />
                </div>
                <h1 style={{color:"#c770f0"}}>{project.title}</h1>
                <p style={{ textAlign: 'left' }}><b style={{color:"#c770f0"}}>Description: </b>{project.desc}</p>
                <p style={{ textAlign: 'left' }}><b style={{color:"#c770f0"}}>IDE & Tech. used: </b>{project.tech_used}</p>

                <div className="pro-link-card">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer"><button className='modal-btn' onClick={closeModal}>Demo</button></a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><button className='modal-btn' onClick={closeModal}>Code </button></a>

                </div>
            </div>
        </>
    )
}

export default ModalCard
