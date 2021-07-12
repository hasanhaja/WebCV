import React from 'react';

import Header from './header/header';
import Hero from './hero/hero';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import Hobbies from './hobbies/hobbies';
import { Content } from '@webcv/core-components';
import Footer from './footer/footer';
import { useDefaultSpacingStyles } from '../theme';


export function App() {
  const classes = useDefaultSpacingStyles();

  return (
      <>
        <Header />
        {/*TODO Refactor sizing. This might not be a good way to do it.*/}
        <Content width="lg">
          <Hero profilePicPath="assets/hero/profile_pic.jpg"
                alt="Profile picture of a handsome devil."
                size={{width: 35, height: 35}}
                greeting="Hi, I'm Hasan 👋🏾"
                location={{city: "Dubai", country: "United Arab Emirates"}}
                className={classes.root}
          />
          <Skills className={classes.root} />
          <Education className={classes.root} />
          <Experience className={classes.root}/>
          <Hobbies className={classes.root} />
        </Content>
        <Footer />
      </>
  );
}

export default App;
