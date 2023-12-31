// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Advisors from './Advisors';

test('renders advisors with correct data', () => {
    const advisors = [
        { name: 'Lars Jeremiassen', title: 'Business Success Advisor', photo: '/Lars.jpg' },
        { name: 'Dr. Maciej Zurawski', title: 'Strategic Advisor', photo: 'path/to/photo.png' },
        { name: 'Dave Swinbank', title: 'Strategic Advisor', photo: '/Dave.jpg' },
        { name: 'Steven Mckeon', title: 'Security Advisor', photo: '/mac.jpg' },
        { name: 'Randall Miller', title: 'Creative Advisor', photo: '/randall.jpeg' },
        { name: 'Taylor Spears', title: 'Strategic Advisor', photo: '/taylor.jpg' },
        { name: 'Zeshan Ahmed', title: 'Strategic Advisor', photo: '/zeshan.jpg' },
        { name: 'Januka Peiris', title: 'Data Advisor', photo: 'path/to/photo.png' },
        { name: 'Christopher Race', title: '', photo: '/Christopher.jpg' },
        { name: 'Philip Mendoca', title: '', photo: '/philip.png' },
        { name: 'Bruno Miranda', title: 'Community Advisor', photo: '/Bruno.jpg'},
    ];

    const { getByText, getByAltText } = render(<Advisors advisors={advisors}/>);

    advisors.forEach((advisor) => {
        const nameElement = getByText(advisor.name);
        const photoElement = getByAltText(advisor.name);
        const titleElement = getByText(advisor.title);

        expect(titleElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
