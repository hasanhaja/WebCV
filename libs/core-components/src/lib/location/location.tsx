import React from 'react';

import './location.module.scss';
import { createStyles, Grid, makeStyles, Theme, Tooltip, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LocationInformation } from '@webcv/data';

/* eslint-disable-next-line */
export interface LocationProps {
  location: LocationInformation,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
  })
);

export function Location({ location }: LocationProps) {
  const classes = useStyles();

  return (
      <Grid direction="row" container spacing={0} wrap="nowrap">
        <Grid item>
          <LocationOnIcon/>
        </Grid>
        <Grid item>
          <Tooltip
            title={`${location.city}, ${location.country}`}
            placement="top-start"
            enterDelay={1000}
            enterNextDelay={750}
            enterTouchDelay={500}
          >
            <Typography
              className={classes.root}
            >
              {location.city}
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
  );
}

export default Location;
