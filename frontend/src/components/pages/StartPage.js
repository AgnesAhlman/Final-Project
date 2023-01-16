import Grid from 'blocks/Grid';
import Footer from 'components/Footer';
import { LineTitle } from 'elements/LineTitle';
import { Section } from 'elements/Section';
import { Text } from 'elements/Text';
import { Wrapper } from 'elements/Wrapper';
import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../Navbar';

const StartPage = () => {
  return (
    <>
      <Navbar shadow />
      <Header>
        <Wrapper>
          <Grid justify="flex-end" align="center">
            <Grid.Cell width={1 / 3} justify="center" align="center">
              <img src="logo.svg" alt="logo" width="200" />
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Header>
      <Section>
        <Wrapper>
          <h1>INSPIRATION FROM GALLERY</h1>
          <Grid column>
            <Grid.Cell width={1 / 3} align="center">
              <img src="gallery1.jpg" alt="posterimg" width="200" />
            </Grid.Cell>
            <Grid.Cell width={1 / 3} align="center">
              <img src="gallery2.jpg" alt="posterimg" width="200" />
            </Grid.Cell>
            <Grid.Cell width={1 / 3} align="center">
              <img src="gallery3.jpg" alt="posterimg" width="200" />
            </Grid.Cell>
          </Grid>
          <Section>
            <LineTitle>
              <span> About</span>
            </LineTitle>
            <Text>
              Welcome to ArtByAhlman! My name is Agnes Ahlman and I have been
              passionate about painting since a young age. I use a variety of
              techniques in my artwork, but currently, I am primarily focused on
              digital drawing using the Procreate app. I hope you enjoy browsing
              my collection and finding something that speaks to you. Thank you
              for visiting!
            </Text>
          </Section>
        </Wrapper>
      </Section>

      <Footer />
    </>
  );
};

export default StartPage;
