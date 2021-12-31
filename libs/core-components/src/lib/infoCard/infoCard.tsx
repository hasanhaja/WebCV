import React from 'react';

import {
  Avatar,
  Chip,
  Grid, styled, Typography
} from '@mui/material';
import { Information } from '@webcv/data';
import BaseCard from '../base-card/base-card';
import Location from "../location/location";

/* eslint-disable-next-line */
export interface InfoCardProps {
  information: Information,
  children?: React.ReactNode;
}

const InfoAvatar = styled(Avatar)`
  width: ${10*8}px;
  height: ${10*8}px;
`;

const OrganizationTitle = styled(Typography)`
  padding: 0;
`;

export function InfoCard({ information, children }: InfoCardProps) {
  // TODO years should be date objects so they can hold month
  const { startYear, endYear, organization, title, descriptions } = information;

  const avatarInitial = (name) => name.replace(/of|University/gi, "")
    .trim()
    .charAt(0)
    .toUpperCase();

  const content = (
    <>
      <Typography variant="subtitle2" noWrap={true}>
        {`${startYear} to ${endYear}`}
      </Typography>
      <Grid container wrap="nowrap" alignItems="center" spacing={2}>
        <Grid item xs>
          <InfoAvatar>
            { avatarInitial(organization.name) }
          </InfoAvatar>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" alignItems="flex-start" spacing={1}>
            <Grid item>
              <OrganizationTitle variant="h5" >
                { organization.name }
              </OrganizationTitle>
            </Grid>
            <Grid item>
              <Location location={organization} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">
        { title }
      </Typography>
    </>
  );

  const collapsedContent = (
    <>
      {
        descriptions.map(description => (
          <Grid
            container
            wrap="nowrap"
            direction="column"
            spacing={2}
          >
            <Grid item xs>
              <Chip label={description.title} />
            </Grid>
            <Grid item xs={12}>
              <Typography paragraph>
                { description.note }
              </Typography>
            </Grid>
          </Grid>
        ))
      }
    </>
  );

  return (
    <BaseCard content={content} collapsedContent={collapsedContent}>
      {children}
    </BaseCard>
  );
}

export default InfoCard;
