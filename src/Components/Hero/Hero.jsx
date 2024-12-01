import React from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link for navigation
import arrow_icon from '../../assets/arrow_icon.svg';
import newbkimg from '../../assets/new_background.png'
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero-container" className="container-fluid p-0 position-relative">
      <div className="row g-0">
        <div className="col-12">
          <img 
            src={newbkimg} 
            id="hero-image" 
            className="img-fluid" 
            alt="Art & Craft" 
          />
          <div id="hero-text-container" className="mt-3 position-absolute top-50 start-0 translate-middle-y text-white p-4">
            <p className="hero-lead">Art & Craft</p>
            <p className='hero-orange'>Shape Your Vision</p>
            <p className='hero-blue'>Into Arts</p>
            <p className='hero-blue'>at Our Art Classes</p>
            
            <div id="hero-button-container">
              <Link to="/art_class/about" id="about-link">
                <button type="button" id="about-button" className="btn btn-primary">
                  About Us
                  <img id='arrow-icon' src={arrow_icon} alt="arrow icon" />
                </button>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
