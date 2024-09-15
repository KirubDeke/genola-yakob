import React, { useState } from 'react';
import './style/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
      <Link to="/" className="logo">Genola &<span>Yakob C.</span></Link>
        <button className="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <ul className={isMenuOpen ? 'active' : ''}>
          <div className='center'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li> 
            <li><Link to="/services">SERVICES</Link></li>   
            <li><Link to="/projects">PROJECTS</Link></li>
          </div>
          <div className='right'>
            <li className="contact"><Link to="/contact">CONTACT</Link></li>
            <li className='plus-icon'><Link to="/admin"><FontAwesomeIcon icon={faUserPlus} /></Link></li>
          </div>   
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;