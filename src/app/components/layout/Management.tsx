// EmployedTeam.tsx
import React from 'react';
import Image from 'next/image';

interface Management {
    name: string;
    photo: string;
    title: string;
}

interface ManagementProps {
    management: Management[];
}

const ManagementTeam: React.FC<ManagementProps> = ({ management }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {management.map((manager, index) => (
                <div key={index} className="flex flex-row items-center">
                <Image src={manager.photo} alt={manager.name} width={200} height={200} />
                <div className="text-gray-400 text-sm ml-2">
                    <h3 className="text-lg">{manager.title}</h3>
                    <h4 className="text-base font-bold">{manager.name}</h4>
                </div>
            </div>
            ))}
        </div>
    );
};

export default ManagementTeam;