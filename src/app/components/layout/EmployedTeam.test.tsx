// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import EmployedTeam from './EmployedTeam';

test('renders advisors with correct data', () => {
    const employedTeam = [
        { name: 'TBD', title: 'Chief Executive Officer', photo: '/tbd.png', description: '' },
        { name: 'Muhammed Ammar Tanweer', title: 'Chief Executive Officer', photo: '/Ammar.jpg', description: "Muhammad Ammar Tanweer, a skilled professional from Pakistan, excels in various technologies, including React JS, NextJS, AWS, Tailwind CSS, Rust, Solidity, C, C++, CI/CD pipelines, NodeJS, Python, Vercel, and a diverse range of AI models. With a strong technical background, he has successfully led teams in accomplishing comprehensive software development projects." },
        { name: 'Steven M Fuller', title: 'Factional/Supporting CTO', photo: '/Dutcfhman.jpg', description: '' },
        { name: 'Lucas Leskovar', title: 'Head of BD', photo: '/Lucas.jpg', description: 'Lucas E. R. Nuñez Leskovar is the Founder & CEO of WeDevYou, Awakening Digital, NekoGames, and Bosque Ventures. Leading the LATAM community for Polygon, he recently joined the AquaPurgeWeb3 Project to address plastic pollution. With 12+ years of experience in software, multimedia, video games, NGOs, and fintech, Lucas co-founded Guara.AI, Rhyno Multimedia Agency, Donar Digital, and contributed to various startups. He held architecture roles for PAMI and worked on entertainment projects for NeoMedia TV and Globant. Currently a professor at UTN Buenos Aires, he is also involved in environmental projects and ventures promoting technology in LATAM.' },
        { name: 'Oksana Romanyshyn', title: 'Mid BD', photo: '/Oksana.jpg', description: "Meet Oksana, also known as Ksenia. Currently residing in Lisbon, Portugal, she embraces change and growth, having pursued her Master's in International Management and Marketing across three countries. Oksana is focused on International Business Development in consulting, with a background in Marketing and Market Research, including work in renewable energy.Her diverse experiences shaped her into an adaptable individual who enjoys challenges. Oksana's interests include tech, crypto, psychology, fashion, and dancing. Engaging with people and their ideas energizes her, and she spends over 80% of her daily life in social environments. Oksana views networking as a modern phenomenon connecting dots and providing solutions." },
        { name: 'Mitko Dimitrov', title: 'Junior BD', photo: '', description: '' },
        { name: 'George Lugo', title: 'Full Stack Developer', photo: '/george.jpg', description: "George brings experience from Apple, Vonage, Guild Mortgage, L-Nutra, and several other companies working on a vast amount of frameworks including Ruby on Rails, React, PHP, and Vue.JS. George Lugo's language agnostic development allows him to seamlessly navigate and adapt to diverse technological landscapes. His journey in the tech industry has been marked by a relentless pursuit of innovation and a commitment to delivering high-quality solutions. Recently George has been working on Blockchain development on the Polygon Blockchain, creating proper smart contracts for game development and NFT hosting and also has been working on LLMs and GANs in Python." },
        { name: 'Dave Ring', title: 'Senior Blockchain Developer', photo: 'Dave_R.jpg', description: '' },
        { name: 'Rafiq Whitley', title: 'Senior Backend Developer', photo: '', description: '' },
        { name: 'Ayush Agrawal', title: 'Node Developer', photo: '/Ayush.jpg', description: "Ayush Agrawal, Backend Specialist, MERN Developer, TypeScript, Express.js, Node.js, DynamoDB, Serverless Framework, GraphQL, AWS. Co-Founder, Polygon Guild Jaipur, organized largest Web3 event in Rajasthan, Polygon RoadShow Jaipur, 300+ attendees. Ayush leads impactful backend, DevOps projects, optimizes data processing, reduces downtime, improves API responsiveness. Holds B.Tech. in Information Technology from Manipal University Jaipur, received awards like ETH India 2022 Valist, Push Protocol Prize Pool. Ayush, Polygon Developer Advocate, volunteer, creator of projects like PoW'rd EthIndia 2022, brings valuable expertise to any team." },
        { name: 'Yash Garg', title: 'Senior SDK Developer', photo: '/metabyte.jpg', description: '' },
        { name: "Matt Davidson", title: "Dev Ops Engineer", photo: "/Matt.jpg", description: ""},
        { name: "Sekar Langit", title: "Senior Product Manager", photo: "/Sekar.jpg", description: ""},
        { name: "Tim Tim Tim", title: "Dev Rel Engineer", photo: "/tim.jpg", description: ""},
        { name: 'Dora Kovacs', title: 'Head of Community Growth', photo: '/Dora.png', description: '' },
        { name: 'Hayat', title: 'Social Media Manager', photo: '/Hayat.webp', description: '' },
        { name: 'TBD', title: 'Social Media Manager', photo: '/tbd.png', description: '' },
    ];

    const { getByText, getByAltText } = render(<EmployedTeam employedTeam={employedTeam}/>);

    employedTeam.forEach((employed) => {
        const nameElement = getByText(employed.name);
        const photoElement = getByAltText(employed.name);

        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
