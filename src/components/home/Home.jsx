import './Home.css'
import Navbar from '../Navbar'
import home_idle from '../../Assets/home-main.svg'
import Type from './Type'
import StartSky from "../starrysky/StarrySky"

const Home = () => {

    return (
        <>
            <Navbar />
            <StartSky />
            <div className="outer">
                <div className='opa'>
                    <div className="container" style={{ marginTop: '0%' }}>
                        <div className='home-box'>
                            <div className="box1">
                                <h1>Hi There! <span className='wave'>👋🏻</span></h1>
                                <h1>I'm Sarvesh Choudhary</h1>
                                <h1><span className='text'><Type /></span></h1>
                            </div>
                            <div className="box2">
                                <img src={home_idle} alt="home-pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
