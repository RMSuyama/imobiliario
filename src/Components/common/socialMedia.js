import React from 'react';

import instagramLogo from '../../Assets/Img/instagram.svg';
import whatsappLogo from '../../Assets/Img/whatsapp.svg';
import twitterLogo from '../../Assets/Img/twitter.svg';
import facebookLogo from '../../Assets/Img/facebook.svg';

const socialMedia = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" style={{ width: '30px', height: '40px' }} /> 
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" style={{ width: '30px', height: '40px' }} /> 
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" style={{ width: '30px', height: '40px' }} /> 
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" style={{ width: '30px', height: '40px' }} /> 
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default socialMedia;
