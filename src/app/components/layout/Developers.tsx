// EmployedTeam.tsx
import React from 'react';
import Image from 'next/image';

interface Developer {
    name: string;
    photo: string;
    title: string;
}

interface DevelopersProps {
    developers: Developer[];
}

const Developers: React.FC<DevelopersProps> = ({ developers }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {developers.map((developer, index) => (
                <div key={index} className="flex flex-row items-center">
                <Image src={developer.photo} alt={developer.name} width={200} height={200} />
                <div className="text-gray-400 text-sm ml-2">
                    <h3 className="text-lg">{developer.title}</h3>
                    <h4 className="text-base font-bold">{developer.name}</h4>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Developers;