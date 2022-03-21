import React from 'react';

import { Location } from '@webcv/core-components';
import { LocationInformation } from '@webcv/data';
import { Avatar, Grid, styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface HeroProps {
  profilePicPath: string;
  alt: string;
  size: {
    width: number,
    height: number,
  };
  greeting: string;
  location: LocationInformation;
  className?: string;
}

// TODO fix this new styling
const generateHeroAvatar = (width: number, height: number) => {
  return styled(Avatar)`
    width: ${width}px;
    height: ${height}px;
  `;
};

export function Hero({ profilePicPath, alt, size, greeting, location, className }: HeroProps) {
  const HeroAvatar = generateHeroAvatar(size.width, size.height);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={className}
    >
      <Grid item>
        <HeroAvatar src={profilePicPath} alt={alt} id="profile-pic"/>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" spacing={0}>
          <Grid item>
            <Typography
              variant="h4"
              id="greeting"
              noWrap={true}
            >
              {greeting}
            </Typography>
          </Grid>
          <Grid item>
            <Location location={location} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;
