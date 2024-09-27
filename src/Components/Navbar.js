import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    return (
        <header className="flex flex-row justify-between items-center h-[10vh] w-[100vw] my-[10px] px-[2rem]">
            <img 
                src="https://puzzlelove.fr/wp-content/uploads/2024/09/logo-puzzle-texte-1024x468.jpg" 
                alt="logo puzzle" 
                className="h-full max-h-[80%] object-contain mx-[1rem]"
            />

            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-black font-bold">
                    <div className="h-[3px] w-[25px] bg-black mb-[4px]"></div>
                    <div className="h-[3px] w-[25px] bg-black mb-[4px]"></div>
                    <div className="h-[3px] w-[25px] bg-black"></div>
                </button>
            </div>

            {/* A refaire pour avoir un vrai menu déroulant */}
            <div className={`navbar-links flex flex-col lg:flex-row justify-center items-center mx-[1rem] ${!menuOpen && 'hidden'} lg:flex`}>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">Accueil</a></div>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">Bêta testeurs</a></div>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">Le projet PuzzleLove</a></div>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">L'application Puzzle</a></div>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">Articles</a></div>
                <div className="scrolldown-menu m-[1rem] text-black font-bold"><a href="">Sondages</a></div>
            </div>

            <button 
                className="support text-white font-bold bg-black px-[0.8rem] py-[0.3rem] max-h-[80%] max-w-[8rem] rounded-full self-center mx-[1rem]"
                onClick={() => window.location.href = 'https://puzzlelove.fr'}
            >
                Soutenir Puzzle
            </button>
        </header>
    );
}

export default Navbar;

