import React from 'react';

import { Section, SkillsCard } from '@webcv/core-components';
import { SkillsData } from '@webcv/data';
import { Grid } from '@mui/material';

/* eslint-disable-next-line */
export interface SkillsProps {
  className?: string;
}

export function Skills({ className } : SkillsProps) {

  const frontend: SkillsData = {
    category: "Front-end",
    coreSkills: ["TypeScript", "React", "JavaScript", "Figma"],
    relatedSkills: ["ReasonML/ReScript", "MaterialUI", "SASS", "HTML", "CSS", "Functional Programming", "OOP"],
  };

  const backend: SkillsData = {
    category: "Back-end",
    coreSkills: ["Java", "Node.js", "Kotlin", "C++", "PostgreSQL", "MongoDB"],
    relatedSkills: ["NestJS", "Express", "Rust", "Functional Programming", "OOP", "ArrowKT", "KTor"],
  };

  const dataScience: SkillsData = {
    category: "Data Science",
    coreSkills: ["Python", "Pytorch", "Tensorflow", "MATLAB"],
    relatedSkills: ["D3", "Functional Programming", "WebGL", "Simulink", "TensorflowJS"],
  };

  const skillsCards = (
    <Grid container>
      <Grid item>
        <SkillsCard content={frontend} />
      </Grid>
      <Grid item>
        <SkillsCard content={backend} />
      </Grid>
      <Grid item>
        <SkillsCard content={dataScience} />
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
