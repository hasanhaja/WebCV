import React from 'react';

import './hero.module.scss';

import { Location } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface HeroProps {
  profilePicPath: string,
  alt: string,
  size: {
    width: string,
    height: string,
  },
  greeting: string,
  location: string,
}

/**
 #profile-pic {
    width: 70%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    grid-area: picture;
    margin: 0 auto;
}
 */

export function Hero({ profilePicPath, alt, size, greeting, location }: HeroProps) {

  return (
    <div id="hero-container" className="container">
      <img src={profilePicPath} alt={alt} width={size.width} height={size.height} id="profile-pic"/>
      <h2 id="greeting">{greeting}</h2>
      {/* TODO location component*/}
      <Location location={location} />
    </div>
  );
}

export default Hero;
