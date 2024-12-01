import React from 'react';
import './Footer.css';
import main_log from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';
import footer_i from '../../assets/footer_img/footer_i.png'
import footer_u from '../../assets/footer_img/footer_u.png'
import footer_f from '../../assets/footer_img/footer_f.png'
import footer_e from '../../assets/footer_img/footer_e.png'
import footer_gmail from '../../assets/footer_img/footer_gmail.png'

const Footer = () => {
  return (
    <div className="containeroo pt-4" id="whole">
      <hr className="featurette-divider" />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="text-secondary mb-2">Brilliant solutions for your ideas of creation</h3>
              <p className="lead mb-0 text-white opacity-8">
                Create modern-looking arts using some basic fundamentals.
              </p>
            </div>
            <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
              <a
                href="URL_TO_DOCUMENTATION" // Provide a valid URL
                className="btn btn-white btn-icon my-2"
                id="button_margin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-inner--text" style={{ color: 'black' }}>Documentation</span>
              </a>
              <Link to="/art_class/Formenroll">
                <button
                  className="btn btn-primary my-2 ml-0 ml-sm-3"
                  id="enroll_btn"
                >
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider divider-fade divider-dark my-5" />
      <div className="row">
        <div className="col-lg-4 mb-5 mb-lg-0" id="footer-logo-section">
          <a href="index.html">
            <img alt="Main logo of the art class" src={main_log} id="footer-logo" />
          </a>
          <span id="art_love">Love the Art :) It Loves you back</span>
          <p className="mt-4 text-sm opacity-8 pr-lg-4">
            An art class provides a creative space for individuals to explore and express their imagination
            through various mediums like painting, drawing, and sculpture.
          </p>
          <ul className="list-inline mb-0 mt-3">
  <li className="list-inline-item">
    <a className="btn btn-white btn-sm shadow px-2" href="https://www.instagram.com/taraartclass2912/">
      <img src={footer_i} alt="Facebook" className="social-logo" />
    </a>
  </li>
  <li className="list-inline-item">
    <a className="btn btn-white btn-sm shadow px-2" href="https://www.facebook.com/YourFBPage">
      <img src={footer_f} alt="Instagram" className="social-logo" />
    </a>
  </li>
  <li className="list-inline-item">
    <a className="btn btn-white btn-sm shadow px-2" href="https://www.youtube.com/@Taraartclass">
      <img src={footer_u} alt="Twitter" className="social-logo" />
    </a>
  </li>
  <li className="list-inline-item">
    <a className="btn btn-white btn-sm shadow px-2" href="mailto:taraartclass@gmail.com">
      <img src={footer_gmail} alt="LinkedIn" className="social-logo" />
    </a>
  </li>
</ul>
        </div>

        <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0" id="account_section">
          <h6 className="heading mb-3">About</h6>
          <ul className="list-unstyled" id="account_links">
            <li><Link to="/profile">Services</Link></li>
            <li><Link to="/settings">Prices</Link></li>
            <li><Link to="/notifications">Contact</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0" id="about_section">
          <h6 className="heading mb-3">Teaching</h6>
          <ul className="list-unstyled" id="about_links">
            <li><Link to="/services">Become a teacher</Link></li>
            <li><Link to="/pricing">Ho</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/careers">Careers</Link></li> */}
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0" id="company_section">
          <h6 className="heading mb-3">Company</h6>
          <ul className="list-unstyled" id="company_links">
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/help">Help center</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
      </div>
      <hr className="divider divider-fade divider-dark my-4" />
      <div className="row align-items-center justify-content-md-between pb-4">
        <div className="col-md-6">
          <div className="copyright text-sm font-weight-bold text-center text-md-left">
            © 2024 <a className="font-weight-bold" target="_blank" rel="noopener noreferrer">Suraj</a>. All rights reserved
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0" id="footer_links">
            <li className="nav-item"><Link className="nav-link" to="/terms">Terms</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/privacy">Privacy</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
