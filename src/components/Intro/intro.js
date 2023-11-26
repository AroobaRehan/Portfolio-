import React from 'react'
import'./intro.css';
import bg from '../../assets/pic2.jpg';
import { Link } from 'react-scroll';
import resImg from '../../assets/resume.jpg'

const Intro = () =>{
    return (
        <section id="intro">
            <div className="introContent">
            <span className='hello'>Hello</span>
            <span className='introText'>I'm<span className='introName'> Arooba,</span><br/>
            Front End Developer</span>
            <p className='introPara'>As a dedicated student and aspiring front end developer<br/>
            ,I am enthusiastic about creating visually appealing and user friendly 
            applications</p>
            <a href='https://drive.google.com/file/d/1E4rr-nsiCn67M0s3WuMY1geWKWMC8Nls/view?usp=drivesdk'><Link><button className='btn'><img src={resImg} alt="" className='btnImg'/> Resume</button></Link></a>
            </div>
            <img src={bg} alt="" className='bg'/>
        </section>
    )
}

export default Intro