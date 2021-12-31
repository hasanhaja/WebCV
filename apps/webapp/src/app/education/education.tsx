import React from 'react';

import { InfoCard, Section } from '@webcv/core-components';
import { Description, EducationInformation, OrganizationInformation } from '@webcv/data';
import { Grid } from '@mui/material';

/* eslint-disable-next-line */
export interface EducationProps {
  className?: string;
}

export function Education({ className }: EducationProps) {

  const cranfield = {
    dates: "2019 to 2020",
    title: "MSc Computational and Software Techniques in Engineering (Computer and Machine Vision)",
    institute: "Cranfield University, UK",
    description: [
      "Thesis: Evaluation of 2D Semantic Segmentation Methods for Scene Understanding for Autonomous Driving Applications.",
      "Group Project: Detecting COVID-19 in Chest X-Ray images."]
  };

  const brighton = {
    dates: "2014 to 2019",
    title: "MEng Mechanical Engineering",
    institute: "University of Brighton, UK",
    description: [
      "Key modules: Advanced Design, Product Innovation and Management, Renewable Technologies (PV and Biomass)"
    ]
  };

  const cranfieldOrg: OrganizationInformation = {
    name: "Cranfield University",
    city: "Cranfield",
    country: "United Kingdom",
  };

  const cranfieldDescriptions: Array<Description> = [
    {
      title: "Thesis",
      note: "Evaluation of 2D Semantic Segmentation Methods for Scene Understanding for Autonomous Driving Applications",
    },
    {
      title: "Group Thesis",
      note: "Detecting COVID-19 in Chest X-Ray images",
    }
  ];

  const cranfieldEducation = new EducationInformation(
    2019,
    2020,
    cranfield.title,
    cranfieldOrg,
    cranfieldDescriptions);

  const brightonOrg: OrganizationInformation = {
    name: "University of Brighton",
    city: "Brighton",
    country: "United Kingdom",
  };

  const brightonDescriptions: Array<Description> = [
    {
      title: "Key modules",
      note: "Advanced Design, Product Innovation and Management, Renewable Technologies (PV and Biomass)",
    },
  ];

  // TODO years should be date objects so they can hold month
  const brightonEducation = new EducationInformation(
    2014,
    2019,
    brighton.title,
    brightonOrg,
    brightonDescriptions);

  const content = [cranfieldEducation, brightonEducation]

  return (
    <Section title="Education" className={className}>
      <Grid
        container
      >
      {
        content.map(education => (
          <Grid item>
            <InfoCard information={education} />
          </Grid>
        ))
      }
      </Grid>
    </Section>
  );
}

export default Education;
