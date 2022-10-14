import '../styles/Navbar.css'
import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
 
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <div className='header'>
            <Link to='/'> <h1 id="logo">CG</h1> </Link>
            <ul className={click ? 'nav-menu active' :
                        'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <DropdownButton id="projects-button" title="Projects">
                        <Dropdown.Item><Link to="/project-orchestrate">Orchestrate</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/project-zotdiet">ZotDiet</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/project-insta">Instagram Redesign</Link></Dropdown.Item>
                    </DropdownButton>
                </li>
                <li className='nav-item'>
                    <Link to="/about">About</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact">Connect!</Link>
                </li>
                <li>
                    <a className="nav-item" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FJyHU0DuxtIPtWi8fSeAz8V-j2ziu2u-XXMmgaHKq8M/edit?usp=sharing">Resume</a>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color:'rgb(1, 70, 67)'}}/>)
                        : (<FaBars size={30} style={{color:'rgb(1, 70, 67)'}}/>)}
            </div>
        </div>
    );
};

export default Navbar;