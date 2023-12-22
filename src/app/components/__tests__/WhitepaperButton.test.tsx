// components/__tests__/WhitepaperButton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperButton from '../buttons/WhitepaperButton'

test('renders WhitepaperButton component as a link', () => {
    render(<WhitepaperButton />);
    const whitepaperLink = screen.getByRole('link', { name: /whitepaper/i });
    expect(whitepaperLink).toBeInTheDocument();
    expect(whitepaperLink).toHaveAttribute('href', '/path/to/whitepaper');
})