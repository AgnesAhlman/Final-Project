import StyledFooter from 'blocks/Footer';
import Grid from 'blocks/Grid';
import { Wrapper } from 'elements/Wrapper';

import React from 'react';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Grid>
          <Grid.Cell width={1 / 2}>
            <img src="/logo.svg" alt="logo-artbyahlman" />
          </Grid.Cell>

          <Grid.Cell width={1 / 4}>
            <h3>Links</h3>
            <p>Contact</p>
            <p>Terms & Conditions</p>
            <p>Customer Support</p>
          </Grid.Cell>
          <Grid.Cell width={1 / 4}>
            <h3> Socials </h3>
            <StyledFooter.Icon
              href="https://www.instagram.com/artbyahlman/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/instagram.svg" alt="instagram-icon" />
            </StyledFooter.Icon>
          </Grid.Cell>
        </Grid>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
