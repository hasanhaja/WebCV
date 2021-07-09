import React from 'react';
import { render } from '@testing-library/react';

import SkillsCard from './skills-card';

describe('SkillsCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsCard />);
    expect(baseElement).toBeTruthy();
  });
});
