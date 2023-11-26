import React from 'react';
import './navbar.css';
import logo from'../../assets/logo.png';

import{Link} from 'react-scroll';


const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="" className='logo'/>
            <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            
    
        </nav>
    )
}

export default Navbar;

