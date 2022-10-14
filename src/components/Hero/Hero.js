import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hey there, I'm Zack <br />
      and I'm a Django developer.
    </SectionTitle>
    <SectionText>
      I use Python as my go-to backend language. 
      I have also used php through technologies such as CodeIgniter and Wordpress.
      I help your business handle online payments through daraja by Safaricom API and iPay WooCommerce plugin.
      I also use the React library and Next js to do frontend work.
    </SectionText>
    <Button onClick={() => window.location = '#tech'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;