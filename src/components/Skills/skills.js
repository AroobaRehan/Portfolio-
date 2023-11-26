import React from 'react';
import'./skills.css';
import webDesign from '../../assets/webDesign.png';
import illustrate from'../../assets/illustrate.png';
import content from'../../assets/content.png';

const Skills = () =>{
    return(
        <section id='skills'>
            <span className='skillTitle'>Specialities</span>
            <span className='skillDesc'>Proficient in HTML,CSS and Javascript,I have constructed some projects .In Addition to that I am also skilled in Illustrations using the Medibang Software</span>
            <div className='skillBars'>

                <div className="skillBarSingle">
                    <img src={webDesign} alt='' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                    </div>
                </div>

                <div className="skillBarSingle">
                    <img src={illustrate} alt='' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>Illustrations</h2>
                    </div>
                </div>

                <div className="skillBarSingle">
                    <img src={content} alt='' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>Content Writing</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;