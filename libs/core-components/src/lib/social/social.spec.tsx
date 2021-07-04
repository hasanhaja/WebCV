import React from 'react';
import { render } from '@testing-library/react';

import Social from './social';

describe('Social', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Social />);
    expect(baseElement).toBeTruthy();
  });
});
