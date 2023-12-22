// components/__tests__/Register.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../buttons/Register';

test('renders Register component with form fields', () => {
    render(<Register />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/wallet address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('allows users to enter email and wallet address', () => {
    render(<Register />);
    const emailInput = screen.getByLabelText(/email/i);
    const walletInput = screen.getByLabelText(/wallet address/i);

    fireEvent.change(emailInput, { target: { value: 'user@example.com'} });
    fireEvent.change(walletInput, { target: { value: '0x1234567890abcdef'} });

    expect(emailInput).toHaveValue('user@example.com');
    expect(walletInput).toHaveValue('0x1234567890abcdef');
})