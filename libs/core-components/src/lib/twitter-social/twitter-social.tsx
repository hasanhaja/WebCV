import React from 'react';

import './twitter-social.module.scss';
import Social, { SocialProps } from '../social/social';
import TwitterIcon from '@material-ui/icons/Twitter';

export function TwitterSocial({ href, label="Twitter Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<TwitterIcon/>} label={label}/>
  );
}

export default TwitterSocial;
