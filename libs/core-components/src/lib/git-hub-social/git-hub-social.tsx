import React from 'react';

import './git-hub-social.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Social, { SocialProps } from '../social/social';

export function GitHubSocial({ href, label="GitHub Profile" }: SocialProps) {
  return (
    <Social href={href} icon={<GitHubIcon />} label={label}/>
  );
}

export default GitHubSocial;
