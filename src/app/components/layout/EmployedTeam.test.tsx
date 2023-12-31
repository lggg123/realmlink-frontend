// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import EmployedTeam from './EmployedTeam';

test('renders advisors with correct data', () => {
    const employedTeam = [
        { name: 'TBD', title: 'Chief Executive Officer', photo: '/tbd.png' },
        { name: 'Muhammed Ammar Tanweer', title: 'Chief Executive Officer', photo: '/Ammar.jpg' },
        { name: 'Steven M Fuller', title: 'Factional/Supporting CTO', photo: '/Dutcfhman.jpg' },
        { name: 'Lucas Leskovar', title: 'Head of BD', photo: '/Lucas.jpg' },
        { name: 'Oksana Romanyshyn', title: 'Mid BD', photo: '/Oksana.jpg' },
        { name: 'Mitko Dimitrov', title: 'Junior BD', photo: '' },
        { name: 'George Lugo', title: 'Full Stack Developer', photo: '/george.jpg'},
        { name: 'Dave Ring', title: 'Senior Blockchain Developer', photo: 'Dave_R.jpg' },
        { name: 'Rafiq Whitley', title: 'Senior Backend Developer', photo: '' },
        { name: 'Ayush Agrawal', title: 'Node Developer', photo: '/Ayush.jpg' },
        { name: 'Yash Garg', title: 'Senior SDK Developer', photo: '/metabyte.jpg' },
        { name: "Matt Davidson", title: "Dev Ops Engineer", photo: "/Matt.jpg"},
        { name: "Sekar Langit", title: "Senior Product Manager", photo: "/Sekar.jpg"},
        { name: "Tim Tim Tim", title: "Dev Rel Engineer", photo: "/tim.jpg"},
        { name: 'Dora Kovacs', title: 'Head of Community Growth', photo: '/Dora.png' },
        { name: 'Hayat', title: 'Social Media Manager', photo: '/Hayat.webp' },
        { name: 'TBD', title: 'Social Media Manager', photo: '/tbd.png' },
    ];

    const { getByText, getByAltText } = render(<EmployedTeam employedTeam={employedTeam}/>);

    employedTeam.forEach((employed) => {
        const nameElement = getByText(employed.name);
        const photoElement = getByAltText(employed.name);

        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
