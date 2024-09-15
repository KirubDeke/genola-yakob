import React from 'react';
import './style/aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faTrophy, faFirstAid, faBrain } from '@fortawesome/free-solid-svg-icons';
import { FooterSection } from './FooterSection';
import image from './assets/pic-5.jpg';
const AboutUs = () => {
    return (
        <>
        <div className='aboutus-page-container'>
        <div className='container-projects'>
                <img src={image} alt='image' className="fluidproject" />
                <div className='top-half'>
                    <div className='top-half-content'>
                        <h1 className='heading-projects'>About Us</h1>
                    </div>
                </div>
            </div>
        <div className="about-us">
            <p>
                Welcome to [Your Company Name], your trusted partner in construction. With over 20 years of experience, we specialize in residential and commercial projects. Our mission is to deliver high-quality construction services while ensuring customer satisfaction.
            </p>
            <h3 className='aboutsub'>Our Vision</h3>
            <p>
                To be the leading construction company in the region, known for our commitment to quality, safety, and sustainability.
            </p>
            <h3 className='aboutsub'>Our Values</h3>
            <ul className='about'>
                <li><span className='icon'><FontAwesomeIcon icon={faShield} style={{ color: "#333" }} size="1x" /></span>Integrity</li>
                <li><span className='icon'><FontAwesomeIcon icon={faTrophy} style={{ color: "#333" }} size="1x" /></span>Quality</li>
                <li><span className='icon'><FontAwesomeIcon icon={faFirstAid} style={{ color: "#333" }} size="1x" /></span>Safety</li>
                <li><span className='icon'><FontAwesomeIcon icon={faBrain} style={{ color: "#333" }} size="1x" /></span>Innovation</li>
            </ul>
            <h3 className='aboutsub'>Our Team</h3>
            <p>
                Our team comprises skilled professionals dedicated to making your vision a reality. We work closely with clients to ensure every project meets their specific needs and expectations.
            </p>
            <h3 className='aboutsub'>Contact Us</h3>
            <p className="contact-info">
                If you’re looking for a reliable construction partner, don’t hesitate to reach out to us at [Your Contact Information].
            </p>
        </div>
        <FooterSection/>
        
        </div>
        </>
    );
};

export default AboutUs;