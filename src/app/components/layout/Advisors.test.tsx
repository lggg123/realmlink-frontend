// Founders.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Advisors from './Advisors';

test('renders advisors with correct data', () => {
    const advisors = [
        { name: 'Lars Jeremiassen', title: 'Business Success Advisor', photo: '/Lars.jpg', description: "Lars has been a highly successful and diversified entrepreneur. He has more than 25 years of experience, focused primarily on finance, property, advertising, and most recently in PPE. Under Lars's innate leadership and creative verve, multiple new businesses have been created, flourished, and sold at premiums." },
        { name: 'Dr. Maciej Zurawski', title: 'Strategic Advisor', photo: 'path/to/photo.png', description: 'Dr. Zurawski is a visionary technologist and entrepreneur with a deep understanding of blockchain technology. He is a community leader and thought leader in the Scottish blockchain space. He is the driving force behind a groundbreaking Web3 voucher-based system that empowers charities to track and verify the usage of all donation funds across their campaigns.' },
        { name: 'Dave Swinbank', title: 'Strategic Advisor', photo: '/Dave.jpg', description: 'Dave Swinbank, a renowned community leader, is a driving force behind Polygon Alliance. Through his exceptional ability to foster camaraderie and cultivate empathy, he has galvanized the Polygon Alliance community. His dedication to connecting people and bridging the gaps between diverse perspectives has cultivated a community that serves as a beacon of inspiration and empowerment within the blockchain sphere.' },
        { name: 'Steven Mckeon', title: 'Security Advisor', photo: '/mac.jpg', description: "Steven McKeon is a seasoned IT and software leader, boasting 25 years of experience in solving tough problems. He's committed to ethical practices in the blockchain realm, striving to make the world a better place, one person at a time. McKeon, with a quarter-century as an ethical hacker, regularly collaborates with the FBI Infoguard on blockchain investigations." },
        { name: 'Randall Miller', title: 'Creative Advisor', photo: '/randall.jpeg', description: 'Randall is a versatile filmmaker, producer, screenwriter, and actor, Randall Miller has garnered acclaim for his work on films like "Bottle Shock", "Cotton Mary" & “Coffee Wars”. His career has spanned from short films to feature films, showcasing his creative storytelling and directorial prowess.' },
        { name: 'Taylor Spears', title: 'Strategic Advisor', photo: '/taylor.jpg', description: "Taylor Spears, Financial Technology Lecturer at the University of Edinburgh, leads the MSc in Finance, Technology, and Policy with 5+ years' academic experience. As Chancellor's Fellow in FinTech, Taylor contributes to risk management at Schulenburg Capital Limited. Holding a PhD in Sociology of Finance from The University of Edinburgh, Taylor excels in financial modeling, strategy, and valuation. With an MSc from the University of Sussex and a B.S. summa cum laude from Barrett, The Honors College at Arizona State University, Taylor is a versatile professional in finance, tech, and policy." },
        { name: 'Zeshan Ahmed', title: 'Strategic Advisor', photo: '/zeshan.jpg', description: "Meet Zeshan Ahmad—tech leader at Nature of Commerce, excelling in smart contracts, tokenomics, and blockchain. With 20+ years' global experience, he streamlines user experiences for startups, with ventures like HazelHearts, P360, and SignBlock.io. His diverse career spans DTC bedding, music, private equity, and blockchain. With strengths in Individualization and Ideation, he dynamically shapes tech and commerce." },
        { name: 'Januka Peiris', title: 'Data Advisor', photo: 'path/to/photo.png', description: 'Meet Januka Peiris—an experienced professional in data visualization, analytics, and project management. With a track record in implementing tools for enhanced visualization and analytics, Januka consistently grows user bases and reduces costs. His expertise in data transformation uniquely positions him to drive insights for organizations. Passionate about empowering companies for data- driven decisions, Januka is dedicated to their success.' },
        { name: 'Christopher Race', title: '', photo: '/Christopher.jpg', description: 'Business professional Christopher Race excels in business development, consulting, and financial analysis. He heads Strategy & Financial Control at Orange Umbrella and offers accounting services in Newcastle. As Managing Director of RGE & Co., he provides coaching and consulting in small business and personal finance. His diverse experience and analytical mind make him a valuable asset.' },
        { name: 'Philip Mendoca', title: '', photo: '/philip.png', description: "Business adviser Philip Mendonça excels in turnarounds and connecting people. He's also Chairman/Founder of CEO Forum and The Board, facilitating discussions for CEOs and senior individuals. With 27+ years, Philip founded Peal Partnership, offering advice on finance, turnarounds, and mentoring. His career spans roles at Peal Resources, N B Selection Limited, Ernst & Young, and Halma plc. Philip's expertise makes him a valuable resource for businesses." },
        { name: 'Bruno Miranda', title: 'Community Advisor', photo: '/Bruno.jpg', description: 'Meet Bruno Miranda—Founder & CEO of Chilibangs, the largest web3 community in Portugal. As a web3 builder and influencer, he excels in creating unique experiences for corporate events and projects. With a tech background, Bruno is committed to positive impact and equal opportunities. Passionate about building a thriving web3 community in Lisbon.' },
    ];

    const { getByText, getByAltText } = render(<Advisors advisors={advisors}/>);

    advisors.forEach((advisor) => {
        const nameElement = getByText(advisor.name);
        const photoElement = getByAltText(advisor.name);
        const titleElement = getByText(advisor.title);
        const descriptionElement = getByText(advisor.description);

        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(photoElement).toBeInTheDocument();
    });
});
