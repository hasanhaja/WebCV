import React from 'react';
import { render } from '@testing-library/react';

import GitHubSocial from './git-hub-social';

describe('GitHubSocial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GitHubSocial />);
    expect(baseElement).toBeTruthy();
  });
});
