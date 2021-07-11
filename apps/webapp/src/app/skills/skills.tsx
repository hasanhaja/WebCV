import React from 'react';

import './skills.module.scss';
import { Grid} from '@material-ui/core';
import { Section, SkillsCard } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface SkillsProps {
  className?: string;
}

export function Skills({ className } : SkillsProps) {

  const skills = ["JavaScript", "HTML", "CSS", "Java", "Kotlin", "Python"]

  const secondarySkills = ["ReasonML/ReScript", "Rust", "MATLAB", "TypeScript", "ExpressJS", "Tensorflow/TensorflowJS", "Pytorch", "ArrowKT", "KTor"]

  const skillsCards = (
    <Grid container>
      <Grid item>
        <SkillsCard />
      </Grid>
      <Grid item>
        <SkillsCard />
      </Grid>
      <Grid item>
        <SkillsCard />
      </Grid>
    </Grid>
  );

  return (
    <Section title="Skills" className={className}>
      { skillsCards }
    </Section>
  );
}

export default Skills;
