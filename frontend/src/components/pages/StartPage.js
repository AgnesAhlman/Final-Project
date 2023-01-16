import Grid from 'blocks/Grid';
import Footer from 'components/Footer';
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
          <Grid>
            <Grid.Cell width={1} align="center">
              <h1>ANOTHER ONE</h1>
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Section>
      <Section bgColor="white">
        <Grid>
          <Grid.Cell width={1 / 2} align="center" padding="2rem">
            <h2>About</h2>
            <Text>
              Welcome to ArtByAhlman! My name is Agnes Ahlman and I have been
              passionate about painting since a young age. In 2022, I decided to
              expand my skillset and enrolled in a web development bootcamp.
              When it came time to choose a final project, I knew that I wanted
              to create a web shop to showcase and sell my paintings. I use a
              variety of techniques in my artwork, but currently, I am primarily
              focused on digital drawing using the Procreate app. I hope you
              enjoy browsing my collection and finding something that speaks to
              you. Thank you for visiting!
            </Text>
          </Grid.Cell>
          <Grid.Cell
            width={1 / 2}
            style={{
              backgroundImage: 'url(about.jpg)',
              backgroundSize: 'cover',
              aspectRatio: 1
            }}
          >
            {/* <img src="about.jpg" alt="img" /> */}
          </Grid.Cell>
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

export default StartPage;
