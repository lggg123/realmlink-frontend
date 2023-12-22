// components/Register.tsx
import React, { useState } from 'react';

interface RegisterFormData {
    email: string;
    walletAddress: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        email: '',
        walletAddress: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add logic for form submission, e.g., sending data to a server
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        // Handle the response from the server
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
            <label htmlFor="email" className="block mb-2 text-gray-800">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="walletAddress" className="block mb-2 text-gray-800">Wallet Address:</label>
            <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-mb mb-4"
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;