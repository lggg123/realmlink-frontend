// components/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWalletAddress(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add logic for form submission, e.g., sending data to a server
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
            />

            <label htmlFor="walletAddress">Wallet Address:</label>
            <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={walletAddress}
                onChange={handleWalletAddressChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;