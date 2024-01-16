// WhyWeb3.tsx
import React from 'react';

const WhyWeb3Button: React.FC = () => {
    return (
        <>
            <a 
                href="/web3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green-dark py-3 px-6 mb-4 rounded-md shadow-md flex items-center justify-center"
            >
            Why Web3?
            </a>
        </>
    );
}

export default WhyWeb3Button;