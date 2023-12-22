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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md flex flex-col md:flex-row md:items-start">
            <div className="mb-4 md:mb-0 md:mr-4">
                <label htmlFor="email" className="block mb-2 text-gray-800">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300"
                />
            </div>

            <div className="mb-7 md:mb-0">
                <label htmlFor="walletAddress" className="block mb-2 text-gray-800">Wallet Address</label>
                <input
                    type="text"
                    id="walletAddress"
                    name="walletAddress"
                    value={formData.walletAddress}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 mt-8 md:ml-4">Submit</button>
        </form>
    );
};

export default Register;