import React from 'react';

import './content.module.scss';

/* eslint-disable-next-line */
export interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className={"content-container"}>
      { children }
    </div>
  );
}

export default Content;
