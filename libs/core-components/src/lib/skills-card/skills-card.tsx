import React from 'react';

import './skills-card.module.scss';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BaseCard from '../base-card/base-card';

/* eslint-disable-next-line */
export interface SkillsCardProps {
  children?: React.ReactNode;
}

export function SkillsCard({ children }: SkillsCardProps) {

  const content = (
    <>
      <Typography>Back end</Typography>
    </>
  );

  const collapsedContent = (
    <>
      <Typography>Additional skills</Typography>
    </>
  )

  return (
    <BaseCard content={content} collapsedContent={collapsedContent}>
      { children }
    </BaseCard>
  );
}

export default SkillsCard;
