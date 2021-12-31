import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Social, { SocialProps } from '../social/social';

export function LinkedInSocial({ href, label="LinkedIn Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<LinkedInIcon />} label={label}/>
  );
}

export default LinkedInSocial;
