import React from 'react';
import { render } from '@testing-library/react';

import BaseCard from './base-card';

describe('BaseCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseCard />);
    expect(baseElement).toBeTruthy();
  });
});
