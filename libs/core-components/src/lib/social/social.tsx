import React from 'react';

import './social.module.scss';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

/* eslint-disable-next-line */
export interface SocialProps {
  label?: string,
  href?: string,
  icon?: React.ReactNode,
}

export function Social({ href, label, icon=<PersonIcon/> }: SocialProps) {
  return (
    <IconButton color="inherit" aria-label={label} href={href}>
      {icon}
    </IconButton>
  );
}

export default Social;
