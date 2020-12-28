import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import Hero from './Hero';



const Navbar = props => {
    
    const navStyle = {
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'right',
        fontSize: '17px',
        padding: '7px 13px',
        border_radius: '3px',   
    }
    const hover = {
        color: 'blue'
    }
    
    return(
        <div className="menu_bar">
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">ELVIS</label>
                <ul >
                    <Link style={navStyle} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link Link style={navStyle} to='/Blog'>
                    <li>Blog</li>
                    </Link>
                    <Link Link style={navStyle} to='/Portfolio'>
                    <li>Portfolio</li>
                    </Link>
                    <Link Link style={navStyle} to='/About'>
                    <li>About</li>
                    </Link>
                    <Link Link style={navStyle} to='/Contact'>
                    <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;