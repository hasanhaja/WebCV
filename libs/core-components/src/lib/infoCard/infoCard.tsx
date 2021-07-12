import React from 'react';

import './infoCard.module.scss';
import {
  Avatar,
  Chip,
  createStyles,
  Grid, makeStyles, Theme, Typography
} from '@material-ui/core';
import { Information } from '@webcv/data';
import { Location } from '@webcv/core-components';
import BaseCard from '../base-card/base-card';

/* eslint-disable-next-line */
export interface InfoCardProps {
  information: Information,
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    title: {
      padding: 0,
    },
  }),
);

export function InfoCard({ information, children }: InfoCardProps) {
  const classes = useStyles();

  // TODO years should be date objects so they can hold month
  const { startYear, endYear, organization, title, descriptions } = information;

  const avatarInitial = (name) => name.replace(/of|University/gi, "")
    .trim()
    .charAt(0)
    .toUpperCase();

  const content = (
    <>
      <Typography variant="subtitle2" noWrap={true}>
        {`${startYear} to ${endYear}`}
      </Typography>
      <Grid container wrap="nowrap" alignItems="center" spacing={2}>
        <Grid item xs>
          <Avatar className={classes.large}>
            { avatarInitial(organization.name) }
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" alignItems="flex-start" spacing={1}>
            <Grid item>
              <Typography variant="h5" className={classes.title}>
                { organization.name }
              </Typography>
            </Grid>
            <Grid item>
              <Location location={organization} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">
        { title }
      </Typography>
    </>
  );

  const collapsedContent = (
    <>
      {
        descriptions.map(description => (
          <Grid
            container
            wrap="nowrap"
            direction="column"
            spacing={2}
          >
            <Grid item xs>
              <Chip label={description.title} />
            </Grid>
            <Grid item xs={12}>
              <Typography paragraph>
                { description.note }
              </Typography>
            </Grid>
          </Grid>
        ))
      }
    </>
  );

  return (
    <BaseCard content={content} collapsedContent={collapsedContent}>
      {children}
    </BaseCard>
  );
}

export default InfoCard;
