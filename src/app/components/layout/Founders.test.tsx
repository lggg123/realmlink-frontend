// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Founders from './Founders';

test('renders founders with correct data', () => {
    const founders = [
        { name: 'Jonathan Else', title: 'Co-Founder', photo: 'path/to/photo.png', description: 'With a track history in leadership & innovation, Jonathan has made himself into an industry leader in blockchain technology. Jonathan now leverages his expertise to bring new ideas to the creative & fintech industries. As an industry leader, he’s dedicated to driving growth & fostering innovation in a sector that is ripe for disruption.' },
        { name: 'Ibrahim Aziz', title: 'Co-Founder', photo: 'path/to/photo.png', description: 'Ibrahim, an experienced blockchain developer in EVM chains, excels in NFTs, gaming, DeFi, and ReFi projects. Active in the Kenyan Web3 space, he mentors developers and simplifies smart contract concepts. As founder of the Aquapurge Project, he merges blockchain with environmental advocacy, encouraging pollution reporting and cleanup. A dedicated public speaker, he frequently participates in Kenyan web3 events. His contributions reflect a commitment to advancing blockchain technology and its societal impact.' },
    ];

    const { getByText, getByAltText } = render(<Founders founders={founders}/>);

    founders.forEach((founder) => {
        const nameElement = getByText(founder.name);
        const photoElement = getByAltText(founder.name);
        const titleElement = getByText(founder.title);
        const descriptionElement = getByText(founder.description);

        expect(descriptionElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
