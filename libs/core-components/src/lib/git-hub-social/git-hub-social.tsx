import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import Social, { SocialProps } from '../social/social';

export function GitHubSocial({ href, label="GitHub Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<GitHubIcon />} label={label}/>
  );
}

export default GitHubSocial;
