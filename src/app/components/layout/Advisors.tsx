// Advisors.tsx
import React from 'react';
import Image from 'next/image';

interface Advisor {
    name: string;
    photo: string;
    title: string;
}

interface AdvisorsProps {
    advisors: Advisor[];
}

const Advisors: React.FC<AdvisorsProps> = ({ advisors }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
                <div key={index} className="flex flex-row items-center">
                    <Image src={advisor.photo} alt={advisor.name} width={200} height={200} />
                    <div className="text-gray-400 text-sm ml-2">
                        <h3 className="text-lg">{advisor.title}</h3>
                        <h4 className="text-base font-bold">{advisor.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Advisors;
