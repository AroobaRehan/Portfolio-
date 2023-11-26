import  React from 'react'
import './works.css'
import img1 from '../../assets/photo.png';
import img2 from '../../assets/calc1.png';
import img3 from '../../assets/to-do1.jpg';


const Works = () => {
    return (
    <section id='Works'>
        <h2 className='workstitle'>Projects</h2>
        <span className='worksDesc'>Some of projects have been listed below</span>
        <div className='worksImgs'>
            <a href='https://github.com/AroobaRehan/JavaScript/tree/main/photography'><img src={img1} alt='' className='worksImg1'/></a>
            <a href='https://github.com/AroobaRehan/JavaScript/tree/84c37264c6fc3728cc58bc078c65bf5937943d46/calculator'><img src={img2} alt='' className='worksImg'/></a>
            <a href='https://github.com/AroobaRehan/JavaScript/tree/main/to-do%20list'><img src={img3} alt='' className='worksImg'/></a>
        </div>
    
    </section>


    );
}

export default Works