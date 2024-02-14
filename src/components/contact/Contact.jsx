import React from 'react'
import { faEnvelope, faLocationDot, faPhone, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <>
            <div className="solid-box">
                <div className="cont-box">

                    <div className="normal-cont">
                        <div className="info-box">
                            <div className="info-logo"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div className="info">
                                <h4 className='info-head'>Location</h4>
                                <p className='info-text'>Bhopal, Madhya Pradesh, Bharat</p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-logo"><FontAwesomeIcon icon={faShareNodes} /></div>
                            <div className="info">
                                <h4 className="info-head">Social Profiles</h4>
                                <p className="info-social info-text">
                                    <a href="https://wa.me/+919406113397" target="_blank" rel="noopener noreferrer" className='a-tag'><FontAwesomeIcon icon={faWhatsapp} style={{ '--clr': '#075E54' }} /></a>
                                    <a href="https://www.linkedin.com/in/sarvesh-choudhary-7571a6126/" target="_blank" rel="noopener noreferrer" className='a-tag'><FontAwesomeIcon icon={faLinkedinIn} style={{ '--clr': '#0077b5 ' }} /></a>
                                    <a href="https://github.com/sarveshguru" target="_blank" rel="noopener noreferrer" className='a-tag'><FontAwesomeIcon icon={faGithub} style={{ '--clr': '#171515  ' }} /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="normal-cont">
                        <div className="info-box">
                            <div className="info-logo"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="info">
                                <h4 className='info-head'>Email Me</h4>
                                <p className='info-text'><a href="mailto:csarvesh288@gmail.com">csarvesh288@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-logo"><FontAwesomeIcon icon={faPhone} /></div>
                            <div className="info">
                                <h4 className='info-head'>Call Me</h4>
                                <p className='info-text'><a href="tel:+919406113397">+91 9406 113397</a></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div >

            <div className="form-box">
                <form action="https://formspree.io/f/mgegaybb" method='POST' >
                    <input type="text" name="username" id="" placeholder='Full Name' autoComplete='off' required />
                    <input type="email" name="email" id="" placeholder='Email' autoComplete='off' required />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Comment or Suggestion!' required></textarea>
                    <button type="submit" value="send" className='submit-btn' >Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact
