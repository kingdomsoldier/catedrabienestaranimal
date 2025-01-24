import React from "react";
import { Link, BrowserRouter, Routes } from "react-router-dom";


interface FragmentHeaderProps{
    id?: string;
    titulo?: string;
    subtitulo?: string;
    styles?: string;
    stylesNav?: string;
    stylesUl?: string;
    stylesLi?: string;
    imgSrc?: string;
}

const FragmentHeader: React.FC<FragmentHeaderProps> =({id, imgSrc, titulo = '', subtitulo, styles, stylesNav, stylesUl, stylesLi}) =>{
    return(
        <div id = {id} className={styles}>

             <div className='flex items-center'>  
                <div>  
                    <img src={imgSrc} alt="logo de la cátedra" />  
                </div>  
                <div className='mx-2'>  
                    <h1 className='text-3xl font-bold'>{titulo}</h1>  
                    <h2>{subtitulo}</h2>  
                </div>  
            </div>  
 
                <nav className={stylesNav}>  
                    <ul className={stylesUl}>  
                        <li className = {stylesLi}><Link to='/catedrabienestaranimal/'>Inicio</Link></li>  
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/biografia">Biografia</Link></li>
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/Home">Home</Link></li>
                    </ul>  
                </nav> 
            
        </div>
    );
};

export default FragmentHeader
