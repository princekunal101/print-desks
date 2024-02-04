import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Just Print & Design your Cover Page on your Desk as PrintDesk. Now only Availabe for printing service 
              in IEC College, But u can design your cover page everywhere. 
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              Email: <a href="mailto:info@printdesk.xyz">info@printdesk.xyz</a>
            </p>
            <p>
              Phone: <a href="tel:+9196315238**">+91 963 1523 8** </a>
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/design">Design</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Print Desk | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
