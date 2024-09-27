import React from "react";

function Card ( {image, description} ) {
    return (
        <div className="flex flex-col flex-1 m-[2rem]">
            <img src={image} alt='' className="rounded-[1rem] shadow-centered hover:opacity-70 transition-opacity duration-200 cursor-pointer" />
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    )
}

export default Card;
