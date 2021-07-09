import React from 'react';

import './skills.module.scss';
import { Typography } from '@material-ui/core';
import { SkillsCard } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {

  const skills = ["JavaScript", "HTML", "CSS", "Java", "Kotlin", "Python"]

  const secondarySkills = ["ReasonML/ReScript", "Rust", "MATLAB", "TypeScript", "ExpressJS", "Tensorflow/TensorflowJS", "Pytorch", "ArrowKT", "KTor"]

  return (
    <div>
      <Typography variant="h4">Skills</Typography>
      {/*<ul className="skills-content-list" id="skills-primary">*/}
      {/*  {*/}
      {/*    skills.map(skill => <li>{skill}</li>)*/}
      {/*  }*/}
      {/*</ul>*/}
      {/*<ul className="skills-content-list" id="skills-secondary">*/}
      {/*  {*/}
      {/*    secondarySkills.map(skill => <li>{skill}</li>)*/}
      {/*  }*/}
      {/*</ul>*/}
      <SkillsCard />
    </div>
  );
}

export default Skills;
