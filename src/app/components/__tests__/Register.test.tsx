// components/__tests__/Register.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../buttons/Register';

describe('Register Component', () => {
    test('renders Register component with form fields', () => {
        render(<Register walletAddress={''} />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/wallet address/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('allows users to enter email and wallet address', () => {
        render(<Register walletAddress={''} />);
        const emailInput = screen.getByLabelText(/email/i);
        const walletInput = screen.getByLabelText(/wallet address/i);

        fireEvent.change(emailInput, { target: { value: 'user@example.com'} });
        fireEvent.change(walletInput, { target: { value: '0x1234567890abcdef'} });

        expect(emailInput).toHaveValue('user@example.com');
        expect(walletInput).toHaveValue('0x1234567890abcdef');
    })

    test('submits the form with valid data', async () => {
        render(<Register walletAddress={''} />);

        // Mock the fetch function
        global.fetch = jest.fn().mockResolvedValueOnce({
            json: async () => ({ message: 'Registration successful!' }),
        });

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/wallet address/i), { target: { value: '12345' } });

        // Submit the form
        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /register/i }));
        });

        // Expect fetch to be called with the correct data
        expect(global.fetch).toHaveBeenCalledWith('http://realmlink-backend-production.up.railway.app/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'test@example.com', walletAddress: '12345' }),
        });

        // Expect the success message to be displayed
        expect(screen.getByText(/registration successful/i)).toBeInTheDocument();
    });
})