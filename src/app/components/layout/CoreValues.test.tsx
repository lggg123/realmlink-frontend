// __tests__/CoreValues.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import CoreValues from './CoreValues';

test('renders CoreValues component', () => {
    const { getByText } = render(<CoreValues />);

    // Check if headings are rendered
    const freedomHeading = getByText('Freedom');
    const communityHeading = getByText('Community');
    const innovationHeading = getByText('Innovation');
    const immersionHeading = getByText('Immersion');

    expect(freedomHeading).toBeInTheDocument();
    expect(communityHeading).toBeInTheDocument();
    expect(innovationHeading).toBeInTheDocument();
    expect(immersionHeading).toBeInTheDocument();
})