import React from 'react';
import { InfoCard, Section } from '@webcv/core-components';
import { ExperienceInformation} from '@webcv/data';

import { Grid } from '@mui/material';

/* eslint-disable-next-line */
export interface ExperienceProps {
  className?: string;
}

export function Experience({ className }: ExperienceProps) {

  const eschmannExperience = new ExperienceInformation(
    2016,
    2017,
    "Product Support Engineer",
    {
      name: "Eschmann Equipment",
      city: "Lancing",
      country: "United Kingdom",
    },
    [
      {
        title: "Project Management",
        note: "Carried out a risk assessment project of the operating table production line.",
      },
      {
        title: "Tool Design",
        note: "Designed tool to aid assembly of handsets more consistently in the production line.",
      }
    ]
  );

  const content = [eschmannExperience]

  return (
    <Section title="Experience" className={className} id="experience-section">
      <Grid
      container
      >
      {
        content.map(experience => (
          <Grid item>
            <InfoCard information={experience} />
          </Grid>
        ))
      }
      </Grid>
    </Section>
  );
}

export default Experience;
