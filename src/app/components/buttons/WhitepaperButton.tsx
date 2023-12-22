// WhitepaperButton.tsx
import React from 'react';

const WhitepaperButton: React.FC = () => {
    return(
        <a 
            href="/path/to/whitepaper" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-md shadow-md flex items-center justify-center hover:from-yellow-400 hover:to-orange-400 transition duration-300"
        >
            Whitepaper
        </a>
    );
};

export default WhitepaperButton;