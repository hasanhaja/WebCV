import React from 'react';
import { render } from '@testing-library/react';

import InfoCard from './infoCard';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoCard />);
    expect(baseElement).toBeTruthy();
  });
});
