import React from 'react';
import { DiAsterisk, DiDjango, DiFirebase, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I'm prolific and have worked with a number of tools and technologies in the web development space
      including:  
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with the React library. (This app is built with React and Next js)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAsterisk size="3rem" />
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>
            Experience with payment integration through daraja by Safaricom and iPay.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Python Django, php, mySQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
