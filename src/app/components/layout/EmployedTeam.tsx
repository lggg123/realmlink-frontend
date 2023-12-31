// EmployedTeam.tsx
import React from 'react';
import Image from 'next/image';

interface EmployedTeam {
    name: string;
    photo: string;
    title: string;
}

interface EmployedTeamProps {
    employedTeam: EmployedTeam[];
}

const EmployedTeam: React.FC<EmployedTeamProps> = ({ employedTeam }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {employedTeam.map((employed, index) => (
                <div key={index} className="flex flex-row items-center">
                <Image src={employed.photo} alt={employed.name} width={200} height={200} />
                <div className="text-gray-400 text-sm ml-2">
                    <h3 className="text-lg">{employed.title}</h3>
                    <h4 className="text-base font-bold">{employed.name}</h4>
                </div>
            </div>
            ))}
        </div>
    );
};

export default EmployedTeam;