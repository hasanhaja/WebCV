import React from 'react';
import { render } from '@testing-library/react';

import Hobbies from './hobbies';

describe('Hobbies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hobbies />);
    expect(baseElement).toBeTruthy();
  });
});
