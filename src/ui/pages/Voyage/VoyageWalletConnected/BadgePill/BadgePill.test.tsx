import { render, screen } from '@testing-library/react';
import React from 'react';

import { BadgePill } from './BadgePill';

describe('<BadgePill />', () => {
  it('renders skeleton when loading is true', () => {
    render(<BadgePill loading={true} variant={1} />);
    expect(screen.getByTestId('BadgePill-Skeleton')).toBeInTheDocument();
  });

  it('renders the correct badge pill text when loading is false', () => {
    render(<BadgePill loading={false} variant={1} />);
    expect(screen.getByText('Week 1')).toBeInTheDocument();
  });

  it('renders the correct color token based on the tier', () => {
    render(<BadgePill loading={false} variant={1} />);
    expect(screen.getByTestId(`BadgePill-Pill-1`)).toBeInTheDocument();
  });
});
