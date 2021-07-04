import React from 'react';
import { render } from '@testing-library/react';

import TwitterSocial from './twitter-social';

describe('TwitterSocial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TwitterSocial />);
    expect(baseElement).toBeTruthy();
  });
});
