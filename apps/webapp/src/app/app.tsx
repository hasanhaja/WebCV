import React from 'react';

import styles from './app.module.scss';

import Header from './header/header';
import Hero from './hero/hero';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import Hobbies from './hobbies/hobbies';
import { Content } from '@webcv/core-components';
import Footer from './footer/footer';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content>
        <Hero profilePicPath="assets/hero/profile_pic.jpg"
              alt="Profile picture of a handsome devil."
              size={{width: "250", height: "250"}}
              greeting="Hi, I'm Hasan!"
              location="Dubai"
        />
        <Skills />
        <Education />
        <Experience/>
        <Hobbies />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
