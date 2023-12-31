// Founders.tsx
import React from 'react';
import Image from 'next/image';

interface Founder {
    name: string;
    photo: string;
    title: string;
    description: string;
}

interface FoundersProps {
    founders: Founder[];
}

const Founders: React.FC<FoundersProps> = ({ founders }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {founders.map((founder, index) => (
                <div key={index} className="flex flex-row items-center">
                    <Image src={founder.photo} alt={founder.name} width={200} height={200} />
                    <div className="text-sm ml-2">
                        <h3 className="text-gray-400 text-lg">{founder.title}</h3>
                        <h4 className="text-gray-500 text-xl font-bold">{founder.name}</h4>
                        <p className="text-gray-400">{founder.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Founders;
