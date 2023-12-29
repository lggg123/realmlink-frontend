// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Advisors from './Advisors';

test('renders advisors with correct data', () => {
    const advisors = [
        { name: 'Lars Jeremiassen', photo: 'path/to/photo.png' },
        { name: 'Dr. Maciej Zurawski', photo: 'path/to/photo.png' },
        { name: 'Dave Swinbank', photo: 'path/to/photo.png' },
        { name: 'Steven Mckeon', photo: 'path/to/photo.png' },
        { name: 'Randall Miller', photo: 'path/to/photo.png' },
        { name: 'Taylor Spears', photo: 'path/to/photo.png' },
        { name: 'Zeshan Ahmed', photo: 'path/to/photo.png' },
        { name: 'Januka Peiris', photo: 'path/to/photo.png' },
        { name: 'Christopher Race', photo: 'path/to/photo.png' },
        { name: 'Philip Mendoca', photo: 'path/to/photo.png' },
        { name: 'Bruno Miranda', photo: 'path/to/photo.png' },
        { name: 'Sonya Kim', photo: 'path/to/photo.png' },
    ];

    const { getByText, getByAltText } = render(<Advisors advisors={advisors}/>);

    advisors.forEach((advisor) => {
        const nameElement = getByText(advisor.name);
        const photoElement = getByAltText(advisor.name);

        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
