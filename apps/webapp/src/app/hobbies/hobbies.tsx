import React from 'react';

import './hobbies.module.scss';
import { Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface HobbiesProps {}

export function Hobbies(props: HobbiesProps) {
  const content = [
    "I enjoy spending most of time programming, and I work on projects in a variety of areas. I like learning about web technologies and I have been experiementing with WebAssembly and Progressive Web Apps.",
  "In my free time, I enjoy listening to Tech podcasts like 'CppCast', 'Corecursive' by Adam Gordon Bell, 'Javascript Jabber', 'Talking Kotlin' by Hari Hadidi or 'New Rustacean'. I'm passionate about writing and developing my blog right now. Get in touch if you want to find out more."
  ]

  return (
    <div>
      <Typography variant="h4">Hobbies</Typography>
      {
        content
          .map(paragraph=>
            <Typography className="hobbies-content">{paragraph}</Typography>
          )
      }
    </div>
  );
}

export default Hobbies;
