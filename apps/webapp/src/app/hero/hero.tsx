import React from 'react';

import './hero.module.scss';

import { Location } from '@webcv/core-components';
import { LocationInformation } from '@webcv/data';
import { Avatar, Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface HeroProps {
  profilePicPath: string,
  alt: string,
  size: {
    width: number,
    height: number,
  },
  greeting: string,
  location: LocationInformation,
}

const useStyles = (width: number, height: number) => {
  return makeStyles((theme: Theme) =>
    createStyles({
      // root: {
      //   display: 'flex',
      //   '& > *': {
      //     margin: theme.spacing(1),
      //   },
      // },
      large: {
        width: theme.spacing(width),
        height: theme.spacing(height),
      },
    }),
  );
}

export function Hero({ profilePicPath, alt, size, greeting, location }: HeroProps) {
  const classes = useStyles(size.width, size.height)();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Avatar className={classes.large} src={profilePicPath} alt={alt} id="profile-pic"/>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
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
  );
}

export default Hero;
