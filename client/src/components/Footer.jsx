import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#008080',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 'auto',
  };

  const linkStyle = {
    color: 'lightgray',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 E-Commerce Platform</p>
      <div>
        <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        <a href="/terms-of-service" style={linkStyle}>Terms of Service</a>
        <a href="/contact-us" style={linkStyle}>Contact Us</a>
      </div>
      <p>
        Follow us on 
        <a href="https://facebook.com" style={linkStyle}>
          <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: '5px', marginRight: '5px' }} />
        </a>
        <a href="https://twitter.com" style={linkStyle}>
          <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '5px', marginRight: '5px' }} />
        </a>
        <a href="https://instagram.com" style={linkStyle}>
          <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '5px', marginRight: '5px' }} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
