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
            <Typography>
              {location.city}
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
  );
}

export default Location;
