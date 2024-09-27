import React from "react";

let bannerText = "flex-1 flex justify-center items-center text-center font-rochester font-bold text-5xl p-8"

function BlackBanner() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white p-8">
            <div className={bannerText}>
                Amour & Innovation
            </div>
            <div className="flex-1 flex justify-center items-center w-[80%]">
                <video src="https://puzzlelove.fr/wp-content/uploads/2024/08/ALLIANCE-WORDPRESS.mp4" 
                    autoPlay 
                    loop 
                    muted
                    playsInline 
                    controlsList="nodownload" 
                    className="w-[80%]  border-white border-[1rem] rounded-[10px]" >
                </video>
            </div>
            <div className={bannerText}>
                Construisons ensemble notre futur
            </div>
        </div>
    )
}

export default BlackBanner;
