import React from 'react';
import { render } from '@testing-library/react';

import MenuDrawer from './menu-drawer';

describe('MenuDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
