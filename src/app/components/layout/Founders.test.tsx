// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Founders from './Founders';

test('renders founders with correct data', () => {
    const founders = [
        { name: 'Jonathan Else', title: 'Co-Founder', photo: '/Jonny.jpg' },
        { name: 'Ibrahim Aziz', title: 'Co-Founder', photo: '/ibrahim.png' },
    ];

    const { getByText, getByAltText } = render(<Founders founders={founders}/>);

    founders.forEach((founder) => {
        const nameElement = getByText(founder.name);
        const photoElement = getByAltText(founder.name);
        const titleElement = getByText(founder.title);
        
        expect(titleElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
