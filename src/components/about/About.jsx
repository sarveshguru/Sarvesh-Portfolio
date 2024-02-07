import React from 'react'
import Navbar from '../Navbar'
import Circle from '../circle/Circle'
import StarrySky from '../starrysky/StarrySky'
import Contact from '../contact/Contact'

import './About.css'
import dp from '../../Assets/dp1.png'
import Interest from '../interest/Interest'

const About = () => {
    return (
        <>
            <Navbar />
            <StarrySky />
            <div className="container">
                <div className="back-box">
                    <div className="head-line-box">
                        <h2>LET'S GET TO KNOW ME</h2>
                        <p className='head-line'></p>
                    </div>

                    <div className="cant-box">
                        <div className='ab-box1'>
                            <p>
                                Hello,<br/>
                                I'm Sarvesh Choudhary, a Computer Application graduate fueled by enthusiasm and a passionate Front-End Developer with a profound foundation in web development. My journey is defined by academic excellence, hands-on projects, and immersive internships, shaping my zeal for crafting captivating user interfaces and seamless user experiences. My commitment extends to continuous learning, collaborative teamwork, and the unwavering pursuit of delivering impactful solutions.<br/><br/>

                                In the realm of academia, I'm currently embarking on a Master of Computer Applications journey with a focus on Computer Science at LNCT University, Bhopal. Prior to this, I navigated the academic landscape at Christ College, Jagdalpur—my alma mater affiliated with Shaheed Mahendra Karma Vishwavidyalaya. The foundations of my educational journey were laid at Vidya Jyoti Hr. Sec. School in Jagdalpur.<br/><br/>

                                This diverse educational background, spanning different institutions and regions, has not only enriched my academic knowledge but also provided me with a holistic perspective on problem-solving and innovation.

                            </p>
                        </div>
                        <div className="ab-box2">
                            <img src={dp} alt="Sarvesh Choudhary" />
                        </div>
                    </div>
                    <div className="head-line-box">
                        <h2>MY SKILLS</h2>
                        <p className='head-line'></p>
                    </div>

                    <div className="skill-box">
                        <div className="skills">
                            <Circle />

                        </div>
                    </div>
                    <div className="head-line-box">

                        <h2>INTEREST</h2>
                        <p className='head-line'></p>
                    </div>
                    <div className="skill-box">
                        <div className="skills">
                            <Interest />

                        </div>
                    </div>
                    <div className="head-line-box">

                        <h2>CONTACT ME</h2>
                        <p className='head-line'></p>
                    </div>
                    <div className="skill-box">
                        <div className="skills">
                            <Contact />

                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default About
