// components/Register.tsx
import React, { useState } from 'react';

interface RegisterProps {
  walletAddress: string;
}

interface RegisterFormData {
    email: string;
}

const Register: React.FC<RegisterProps> = ({ walletAddress }) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Combine formData and walletAddress into a new object
        const requestBody = {
          ...formData,
          walletAddress,
        };
        // Add logic for form submission, e.g., sending data to a server
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })

        // Handle the response from the server
        const data = await response.json();
        console.log(data);
    };

    return (
        <>
            <div className="bg-white p-10 rounded-t-md shadow-md flex flex-col">
                <p>Be the first to discover exciting news, exclusive features, and game-changing</p> 
                <p> updates from Realmlink. Join our community of enthusiasts and receive</p>
                <p>timely notifications straight to your inbox.</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-b-md shadow-md flex flex-col md:flex-row md:items-start">
                <div className="mb-4 md:mb-0 md:mr-4">
                    <label htmlFor="email" className="block mb-2 text-gray-800">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300" />
                </div>

                <div className="mb-7 md:mb-0">
                    <label htmlFor="walletAddress" className="block mb-2 text-gray-800">Wallet Address</label>
                    <input
                        type="text"
                        id="walletAddress"
                        name="walletAddress"
                        value={walletAddress}
                        onChange={handleChange}
                        readOnly
                        style={{ display: 'none' }}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 mt-8 md:ml-4">Submit</button>
            </form>
        </>
    );
};

export default Register;