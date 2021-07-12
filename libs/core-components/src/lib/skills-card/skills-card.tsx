import React from 'react';

import './skills-card.module.scss';
import { Avatar, Chip, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import BaseCard from '../base-card/base-card';
import { SkillsData } from '@webcv/data';

/* eslint-disable-next-line */
export interface SkillsCardProps {
  content: SkillsData;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

export function SkillsCard({ content: data, children }: SkillsCardProps) {
  const classes = useStyles();

  const content = (
    <>
      <Typography variant="h5">
        {data.category}
      </Typography>
      <div className={classes.root}>
        {
          data.coreSkills.map(skill => (

            <Typography>{skill}</Typography>

          ))
        }
      </div>
    </>
  );

  const collapsedContent = (
    <>
      <Typography
        variant="h6"
      >
        Related skills
      </Typography>
      <div className={classes.root}>
        {
          data.relatedSkills.map(skill => (

            <Chip label={skill}/>

          ))
        }
      </div>
    </>
  )

  return (
    <BaseCard content={content} collapsedContent={collapsedContent}>
      { children }
    </BaseCard>
  );
}

export default SkillsCard;
