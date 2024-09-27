import React from "react";

function Newsletter() {
    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold max-w-[70%] text-[1.8rem] text-center m-[1rem]">Rejoignez notre newletter et bénéficiez de la gratuité des services de la version bêta de l'application de rencontre</h2>
            <div className="flex flex-col min-w-[40%]">
                <input 
                    aria-label="name" 
                    aria-required="true" 
                    type="text" 
                    placeholder="Prénom" 
                    aria-invalid="false"
                    className="border border-gray-400 rounded-[5px] px-[1rem] py-[0.5rem] my-[0.5rem]"
                />
                <input 
                    aria-label="email" 
                    aria-required="true" 
                    type="text" 
                    placeholder="Email" 
                    aria-invalid="false"
                    className="border border-gray-400 rounded-[5px] px-[1rem] py-[0.5rem] my-[0.5rem]"
                />
                <button className="bg-black font-bold text-white px-[1rem] py-[0.5rem] my-[0.5rem]">Inscription</button>
            </div>
        </div>
    )
}

export default Newsletter;
