// components/Hero.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import '@testing-library/jest-dom'

test('renders Hero component', () => {
    render(<Hero />);

    // Check if the text content is rendered
    expect(screen.getByText(/Welcome to RealmLink/i)).toBeInTheDocument();
    expect(screen.getByText(/Where your virtual adventures transcend boundaries!/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Your Journey/i)).toBeInTheDocument();
});