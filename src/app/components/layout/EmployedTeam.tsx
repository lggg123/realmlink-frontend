// EmployedTeam.tsx
import React from 'react';
import Image from 'next/image';

interface EmployedTeam {
    name: string;
    photo: string;
    title: string;
    description: string;
}

interface EmployedTeamProps {
    employedTeam: EmployedTeam[];
}

const EmployedTeam: React.FC<EmployedTeamProps> = ({ employedTeam }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {employedTeam.map((employed, index) => (
                <div key={index} className="text-center">
                    <Image src={employed.photo} alt={employed.name} width={200} height={200} />
                    <h3>{employed.title}</h3>
                    <p>{employed.description}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployedTeam;