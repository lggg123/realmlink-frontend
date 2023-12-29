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
                <div key={index} className="text-center">
                    <Image src={founder.photo} alt={founder.name} width={200} height={200} />
                    <h3>{founder.title}</h3>
                    <p>{founder.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Founders;
