import React from 'react';

import './location.module.scss';
import { Grid, Tooltip, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LocationInformation } from '@webcv/data';

/* eslint-disable-next-line */
export interface LocationProps {
  location: LocationInformation,
}

export function Location({ location }: LocationProps) {
  return (
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs>
          <LocationOnIcon/>
        </Grid>
        <Grid item xs={11}>
          <Tooltip
            title={`${location.city}, ${location.country}`}
            placement="top-start"
            enterDelay={1000}
            enterNextDelay={750}
            enterTouchDelay={500}
          >
            <Typography variant="h6">
              {location.city}
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
  );
}

export default Location;
