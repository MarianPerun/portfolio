import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        This portfolio shows an example of a web page using modern technologies
      </SectionText>
      <Button onClick = {()=>window.location = 'https://google.com'}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;