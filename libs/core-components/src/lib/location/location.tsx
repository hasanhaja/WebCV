import React from 'react';

import { Grid, styled, Tooltip, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationInformation } from '@webcv/data';

/* eslint-disable-next-line */
export interface LocationProps {
  location: LocationInformation,
}

const City = styled(Typography)`
  padding: 0;
`;

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
            <City>
              {location.city}
            </City>
          </Tooltip>
        </Grid>
      </Grid>
  );
}

export default Location;
