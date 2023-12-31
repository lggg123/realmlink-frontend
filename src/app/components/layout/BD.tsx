// EmployedTeam.tsx
import React from 'react';
import Image from 'next/image';

interface BD {
    name: string;
    photo: string;
    title: string;
}

interface BDProps {
    bdTeam: BD[];
}

const BusinessD: React.FC<BDProps> = ({ bdTeam }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {bdTeam.map((employees, index) => (
                <div key={index} className="flex flex-row items-center">
                <Image src={employees.photo} alt={employees.name} width={200} height={200} />
                <div className="text-gray-400 text-sm ml-2">
                    <h3 className="text-lg">{employees.title}</h3>
                    <h4 className="text-base font-bold">{employees.name}</h4>
                </div>
            </div>
            ))}
        </div>
    );
};

export default BusinessD;