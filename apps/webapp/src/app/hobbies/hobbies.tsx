import React from 'react';

import { Section } from '@webcv/core-components';
import { Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface HobbiesProps {
  className?: string;
}

export function Hobbies({ className }: HobbiesProps) {
  const content = [
    "I enjoy spending most of time programming, and I work on projects in a variety of areas. I like learning about web technologies and I have been experiementing with WebAssembly and Progressive Web Apps.",
  "In my free time, I enjoy listening to Tech podcasts like 'CppCast', 'Corecursive' by Adam Gordon Bell, 'Javascript Jabber', 'Talking Kotlin' by Hari Hadidi or 'New Rustacean'. I'm passionate about writing and developing my blog right now. Get in touch if you want to find out more."
  ]

  return (
    <Section title="Hobbies" className={className}>
      {
        content
          .map(paragraph=>
            <Typography paragraph>{paragraph}</Typography>
          )
      }
    </Section>
  );
}

export default Hobbies;
