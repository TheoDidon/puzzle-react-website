import React from 'react';
import Navbar from './Components/Navbar';
import BlackBanner from './Components/BlackBanner';
import MainText from './Components/MainText';
import Card from './Components/Card';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="no-scrollbar flex flex-col h-screen overflow-x-hidden">
            <button className="fixed right-[3rem] bottom-[12rem] bg-black text-white text-xs font-bold px-[1.2rem] py-[0.5rem] rounded-full  border-white border-[0.2rem] z-999">Forum</button>
            <Navbar />
            <BlackBanner />
            <MainText />
            <div className="flex flex-col md:flex-row" >
                <Card 
                    image="https://puzzlelove.fr/wp-content/uploads/2024/09/puzzle-3105245_1920-1024x683.jpg"
                    description="Puzzle... une application innovante et révolutionnaire"
                />
                <Card 
                    image="https://puzzlelove.fr/wp-content/uploads/2024/09/play-stone-1237457_1920-1024x683.jpg"
                    description="PuzzleLove... une aventure créative ouverte à tous"
                />
                <Card 
                    image="https://puzzlelove.fr/wp-content/uploads/2024/09/girl-6740572_1920-1024x682.jpg"
                    description="Bêta tests... viens valider le concept"
                />
            </div>
            <Newsletter/>
            <img 
                src="https://puzzlelove.fr/wp-content/uploads/2024/09/PATWORK-.png"
                className="m-[1rem]"
                alt=''
            />
            <Footer/>
        </div>
    );
}

export default App;
