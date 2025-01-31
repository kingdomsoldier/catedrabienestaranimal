import React from "react";

interface MainProps{
    children?: React.ReactNode;
}


const Main: React.FC<MainProps> = ({children}) =>{
    return(
        <main className="flex justify-center text-justify my-10 text-lg">
            <div className="w-[90%] md:w-9/12">
                {children}
            </div>
            
        </main>
    );
};

export default Main;