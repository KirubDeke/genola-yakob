import React from 'react';
import Image from './assets/pic-41.jpg';
import './style/home.css'; 
import Counting from './counter';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Transition from './Transition';
import Contact from './Contact';
import { FooterSection } from './FooterSection';

function Home() {
  return (
    <>
      <div className="background-image">
        <img src={Image} alt="Cool Background" className="fluid" />
        <div className='homepage'>
          <div className='content'>
            <h2>Welcome to Genola and Yakob Construction</h2>
            <p>Building Dreams, One Brick at a Time</p>
            <button className="about-button">About Us</button>
          </div>
        </div>
      </div>
      <Counting />
      <About/>
      <Transition/>
      <Contact/>
    </>
  );
}

export default Home;