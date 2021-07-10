import React from 'react';
import { InfoCard } from '@webcv/core-components';
import { ExperienceInformation} from '@webcv/data';

import './experience.module.scss';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface ExperienceProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export function Experience(props: ExperienceProps) {
  const classes = useStyles();

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
    <div>
      <Typography variant="h4">Experience</Typography>
      <Grid
      container
      className={classes.root}
      >
      {
        content.map(experience => (
          <Grid item>
            <InfoCard information={experience} />
          </Grid>
        ))
      }
      </Grid>
    </div>
  );
}

export default Experience;
