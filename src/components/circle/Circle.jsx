import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { Tooltip as ReactTooltip } from 'react-tooltip'

import './Circle.css';


const Circle = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <>
            <div className="solid-box">
                <div className="menu" >
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 0, '--clr': '#563d7c' }}>
                        <span data-data-tooltip-id='bs' ><FontAwesomeIcon icon={faBootstrap} /></span>
                        <ReactTooltip
                            id='bs'
                            variant='info'
                            place='bottom'
                            content='BootStrap'
                        />
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 1, '--clr': 'black' }}>
                        <span><FontAwesomeIcon icon={faCode} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 2, '--clr': '#264de4' }}>
                        <span><FontAwesomeIcon icon={faCss3Alt} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 3, '--clr': '#f0db4f' }}>
                        <span><FontAwesomeIcon icon={faJs} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 4, '--clr': '#f06529' }}>
                        <span><FontAwesomeIcon icon={faHtml5} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 5, '--clr': '#171515' }}>
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 6, '--clr': '#61dafb' }}>
                        <span><FontAwesomeIcon icon={faReact} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 7, '--clr': '#3c873a' }}>
                        <span><FontAwesomeIcon icon={faNodeJs} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 8, '--clr': '#cb3837' }}>
                        <span><FontAwesomeIcon icon={faNpm} /></span>
                    </li>
                    <li ref={ref} className={`icon-list ${inView ? 'activeted ' : ''}`} style={{ '--i': 9, '--clr': '#cb3837' }}>
                        <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                        </svg></span>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Circle;
