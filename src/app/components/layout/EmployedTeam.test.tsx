// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import EmployedTeam from './EmployedTeam';

test('renders advisors with correct data', () => {
    const employedTeam = [
        { name: 'TBD', photo: 'path/to/photo.png' },
        { name: 'Muhammed Ammar Tanweer', photo: 'path/to/photo.png' },
        { name: 'Steven M Fuller', photo: 'path/to/photo.png' },
        { name: 'Lucas Leskovar', photo: 'path/to/photo.png' },
        { name: 'Oksana Romanyshyn', photo: 'path/to/photo.png' },
        { name: 'Mitko Dimitrov', photo: 'path/to/photo.png' },
        { name: 'George Lugo', photo: 'path/to/photo.png' },
        { name: 'Dave Ring', photo: 'path/to/photo.png' },
        { name: 'Rafiq Whitley', photo: 'path/to/photo.png' },
        { name: 'Ayush Agrawal', photo: 'path/to/photo.png' },
        { name: 'Yash Garg', photo: 'path/to/photo.png' },
        { name: 'Matt Davidson', photo: 'path/to/photo.png' },
        { name: 'Sekar Langit', photo: 'path/to/photo.png' },
        { name: 'Tim Tim Tim', photo: 'path/to/photo.png' },
        { name: 'Dora Kovacs', photo: 'path/to/photo.png' },
        { name: 'Hayat', photo: 'path/to/photo.png' },
        { name: 'TBD', photo: 'path/to/photo.png' },
    ];

    const { getByText, getByAltText } = render(<EmployedTeam employedTeam={employedTeam}/>);

    employedTeam.forEach((employed) => {
        const nameElement = getByText(employed.name);
        const photoElement = getByAltText(employed.name);

        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
