import React from "react";

let bannerText = "flex-1 flex justify-center items-center font-rochester font-bold text-5xl p-[4rem]"

function BlackBanner() {
    return (
        <div className="flex flex-row bg-black text-white min-h-[50vh]">
            <div className={bannerText}>
                Amour & Innovation
            </div>
            <div className="flex-1 flex justify-center items-center">
                <video src="https://puzzlelove.fr/wp-content/uploads/2024/08/ALLIANCE-WORDPRESS.mp4" 
                    autoPlay 
                    loop 
                    muted
                    playsInline 
                    controlsList="nodownload" 
                    className="max-h-[80%] border border-white border-[1rem] rounded-[10px]" >
                </video>
            </div>
            <div className={bannerText}>
                Construisons ensemble notre futur
            </div>
        </div>
    )
}

export default BlackBanner;
