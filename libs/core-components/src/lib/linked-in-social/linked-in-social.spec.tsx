import React from 'react';
import { render } from '@testing-library/react';

import LinkedInSocial from './linked-in-social';

describe('LinkedInSocial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkedInSocial />);
    expect(baseElement).toBeTruthy();
  });
});
