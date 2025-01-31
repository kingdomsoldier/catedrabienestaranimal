import React from "react";

interface CardProps{
    titulo?: string;
    children: React.ReactNode;
}


const Card: React.FC<CardProps> = ({titulo, children}) =>{
    return(
        <div className="w-11/12 md:w-1/2 bg-white p-4 m-4 border border-gray-200 rounded-lg shadow-sm text-justify">
            <div className="background-header text-gray-900 text-center">
                <h2 className="text-2xl font-semibold">{titulo}</h2>
            </div>

            {children}
        </div>
    );
};

export default Card;