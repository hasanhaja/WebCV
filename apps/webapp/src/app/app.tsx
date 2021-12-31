import React from 'react';

import Header from './header/header';
import Hero from './hero/hero';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import Hobbies from './hobbies/hobbies';
import { Content } from '@webcv/core-components';
import Footer from './footer/footer';
import { styled } from '@mui/material';

const StyledHero = styled(Hero)`
  flex-grow: 1;
  padding: 8px 0 48px 0;
`;

const StyledSkills = styled(Skills)`
  flex-grow: 1;
  padding: 8px 0 48px 0;
`;

const StyledEducation = styled(Education)`
  flex-grow: 1;
  padding: 8px 0 48px 0;
`;

const StyledExperience = styled(Experience)`
  flex-grow: 1;
  padding: 8px 0 48px 0;
`;

const StyledHobbies = styled(Hobbies)`
  flex-grow: 1;
  padding: 8px 0 48px 0;
`;

export function App() {
  return (
      <>
        <Header />
        {/*TODO Refactor sizing. This might not be a good way to do it.*/}
        <Content width="lg">
          <StyledHero profilePicPath="assets/hero/profile_pic.jpg"
                alt="Profile picture of a handsome devil."
                size={{width: 32, height: 32}}
                greeting="Hi, I'm Hasan 👋🏾"
                location={{city: "Dubai", country: "United Arab Emirates"}}
          />
          <StyledSkills />
          <StyledEducation />
          <StyledExperience />
          <StyledHobbies />
        </Content>
        <Footer />
      </>
  );
}

export default App;
