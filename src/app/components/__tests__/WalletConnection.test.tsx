// components/__tests__/WalletConnection.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import WalletConnection from '../buttons/WalletConnection';
import '@testing-library/jest-dom'

// Mock ethers for testing purposes
jest.mock('ethers', () => ({
    ...jest.requireActual('ethers'),
    BrowserProvider: jest.fn(),
}));

describe('WalletConnection component', () => {
    test('renders correctly', () => {
        const { getByText } = render(<WalletConnection />);
        expect(getByText('Connect Wallet')).toBeInTheDocument();
    });
    
    test('connects wallet on button click', async () => {
        const { getByText } = render(<WalletConnection />);
        const button = getByText('Connect Wallet');

        fireEvent.click(button);

        // Assuming ethers is mocked, add assertions for the expected behavior
        // For example, you can check if the wallet if connected after the click
        // await waitFor(() => {
        //     expect(getByText('Disconnect Wallet')).toBeInTheDocument();
        // });
    });
})