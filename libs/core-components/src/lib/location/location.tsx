import React from 'react';

import './location.module.scss';
import { Grid, Paper, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

/* eslint-disable-next-line */
export interface LocationProps {
  location: string
}

export function Location({ location }: LocationProps) {
  return (
    // <Paper elevation={0}>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs>
          <LocationOnIcon/>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h6">
            {location}
          </Typography>
        </Grid>
      </Grid>
    // {/*</Paper>*/}
  );
}

export default Location;
