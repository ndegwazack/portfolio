import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello there, I'm Zack <br />
      and I'm a Fullstack Developer.
    </SectionTitle>
    <SectionText>
      I use the Django web framework for backend development. 
      I have also used PHP through technologies such as CodeIgniter and Wordpress.
      I help your business handle online payments through payment system integration.
      {/* I also use the React library and Next.js to do frontend work. */}
    </SectionText>
    <Button onClick={() => window.location = '#tech'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;