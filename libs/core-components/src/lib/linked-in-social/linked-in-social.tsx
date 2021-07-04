import React from 'react';

import './linked-in-social.module.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Social, { SocialProps } from '../social/social';

export function LinkedInSocial({ href, label="LinkedIn Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<LinkedInIcon />} label={label}/>
  );
}

export default LinkedInSocial;
