import React from 'react';

import './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="card">
      { children }
    </div>
  );
}

export default Card;
