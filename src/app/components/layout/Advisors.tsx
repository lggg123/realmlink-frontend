// Advisors.tsx
import React from 'react';
import Image from 'next/image';

interface Advisor {
    name: string;
    photo: string;
    title: string;
    description: string;
}

interface AdvisorsProps {
    advisors: Advisor[];
}

const Advisors: React.FC<AdvisorsProps> = ({ advisors }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {advisors.map((advisor, index) => (
                <div key={index} className="text-center">
                    <Image src={advisor.photo} alt={advisor.name} width={200} height={200} />
                    <h3>{advisor.title}</h3>
                    <p>{advisor.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Advisors;
