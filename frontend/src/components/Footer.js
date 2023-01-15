import StyledFooter from 'blocks/Footer';

import React from 'react';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div>
        <h3> Socials </h3>
        <a
          href="https://www.instagram.com/artbyahlman/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/instagram.svg" alt="instagram-icon" />
        </a>
      </div>
      <div>
        <h3>Links</h3>
        <p>Contact</p>
        <p>Purchase conditions</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
