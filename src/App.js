import React from 'react';
import Navbar from './Components/Navbar';
import BlackBanner from './Components/BlackBanner';
import MainText from './Components/MainText';
import Card from './Components/Card';

function App() {
    return (
        <div className="no-scrollbar flex flex-col h-screen overflow-x-hidden">
            <Navbar />
            <BlackBanner />
            <MainText />
            <div className="flex flex-row" >
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
        </div>
    );
}

export default App;
