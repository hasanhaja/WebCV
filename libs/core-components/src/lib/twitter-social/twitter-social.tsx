import React from 'react';

import Social, { SocialProps } from '../social/social';
import TwitterIcon from '@mui/icons-material/Twitter';

export function TwitterSocial({ href, label="Twitter Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<TwitterIcon/>} label={label}/>
  );
}

export default TwitterSocial;
