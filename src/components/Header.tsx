import React, { useEffect, useState } from 'react';  
import FragmentHeader from './FragmentHeader';
interface HeaderProps {  
    imgSrc?: string;  
    titulo?: string;  
}  

const Header: React.FC<HeaderProps> = ({ imgSrc, titulo = "" }) => {  
    const [isHeaderFixedVisible, setIsHeaderFixedVisible] = useState(false);  

    const handleScroll = () => {  
        // Mostrar el encabezado fijo cuando se desplaza hacia abajo (puedes modificar el umbral)  
        if (window.scrollY > 50) {  
            setIsHeaderFixedVisible(true);  
        } else {  
            setIsHeaderFixedVisible(false);  
        }  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  

        // Limpiar el event listener al desmontar el componente  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    const sidebar = document.getElementById('header-aside');  

    const toggleAside = () => { 
        if(sidebar != null)
        sidebar.classList.toggle('translate-x-full');
    };

    return (  
        <header>  
           
           <FragmentHeader
                titulo={titulo}
                subtitulo='CÁTEDRA HONORÍFICA DE BIENESTAR ANIMAL'
                styles='flex justify-between shadow-lg p-4 background-header text-white'
                stylesNav='hidden md:flex align-bottom items-end font-bold text-lg'
                stylesUl='flex'
                stylesLi='mx-2 hover:underline'
                imgSrc={imgSrc}
            />

            {isHeaderFixedVisible && (  

                <FragmentHeader
                    id='header-fixed'
                    styles='bg-white flex justify-between w-full top-0 left-0 fixed p-4 shadow-lg'
                    stylesNav='hidden md:flex align-bottom items-end font-bold text-lg'
                    stylesUl='flex'
                    imgSrc={imgSrc}
                />
            )} 

            <FragmentHeader
                id='header-aside'
                titulo={titulo}
                styles='md:hidden text-white fixed bg-gray-800 opacity-90 h-full top-0 right-0 p-4 transform translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto'
                stylesUl= 'my-3'
                stylesLi='hover:bg-gray-600 px-2'
                imgSrc={imgSrc}
            />
 

            <div className='md:hidden'>
            <button id='button-header' onClick={toggleAside} className='text-2xl text-white bg-gray-950 opacity-50 px-2 pb-1 text-center rounded-lg right-2 top-3 fixed'>≡</button> 
            </div>
            
        </header>  
    );  
};  

export default Header;