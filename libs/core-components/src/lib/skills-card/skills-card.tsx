import React from 'react';

import { Chip, Divider, styled, Typography } from '@mui/material';
import BaseCard from '../base-card/base-card';
import { SkillsData } from '@webcv/data';

/* eslint-disable-next-line */
export interface SkillsCardProps {
  content: SkillsData;
  children?: React.ReactNode;
}

const SkillsContent = styled("div")`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin: 4px;
  }
`;

export function SkillsCard({ content: data, children }: SkillsCardProps) {
  const content = (
    <>
      <Typography variant="h5">
        {data.category}
      </Typography>
      <Divider />
      <SkillsContent>
        {
          data.coreSkills.map(skill => (

            <Typography>{skill}</Typography>

          ))
        }
      </SkillsContent>
    </>
  );

  const collapsedContent = (
    <>
      <Typography
        variant="h6"
      >
        Related skills
      </Typography>
      <SkillsContent>
        {
          data.relatedSkills.map(skill => (

            <Chip label={skill}/>

          ))
        }
      </SkillsContent>
    </>
  )

  return (
    <BaseCard content={content} collapsedContent={collapsedContent}>
      { children }
    </BaseCard>
  );
}

export default SkillsCard;
