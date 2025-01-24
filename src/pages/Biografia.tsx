// src/pages/Biografia.tsx  
import React from "react";  
import Header from "../components/Header";
import Footer from "../components/Footer";

const Biografia: React.FC = () => {  
    return (  
        
        <div className='h-full flex flex-col justify-between'>
        <Header
        imgSrc='src/assets/Logo_Catedra.png'
        titulo='Biograía'
        />

        <main>
            
        </main>

        <Footer/>

    </div> 
    );  
};  

export default Biografia;