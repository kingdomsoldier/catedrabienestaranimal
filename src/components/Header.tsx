import React, { useEffect, useState } from 'react';  
import FragmentHeader from './FragmentHeader';
import { Button } from 'flowbite-react';
import { Bars3Icon } from '@heroicons/react/16/solid';
interface HeaderProps {  
    titulo?: string;  
    stylesHeaderStatic?: string;
    stylesTitulo?: string;
}  

const Header: React.FC<HeaderProps> = ({  titulo, stylesHeaderStatic, stylesTitulo}) => {  
    const sidebar = document.getElementById('header-aside');  

    const toggleAside = () => { 
        const sidebar = document.getElementById('header-aside');
        if(sidebar != null)
        sidebar.classList.toggle('translate-x-full');
    };

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

    

    return (  
        <header className='z-50'>  
           
           <FragmentHeader
                titulo={titulo}
                id='header-static'
                subtitulo='CÁTEDRA HONORÍFICA DE BIENESTAR ANIMAL'
                styles= {`flex justify-between p-4 ${stylesHeaderStatic}`}
                stylesNav='hidden md:flex align-bottom items-end font-bold text-lg my-3 mx-6'
                stylesUl='flex'
                stylesLi='mx-2 hover:underline'
                stylestitulo = {stylesTitulo}
                imgSrc='Logo_Catedra.png'
            />

            {isHeaderFixedVisible && (  
 
                <FragmentHeader
                    id='header-fixed'
                    styles='bg-white flex justify-between w-full top-0 left-0 fixed p-4 shadow-lg'
                    stylesNav='hidden md:flex align-bottom items-end font-semibold text-lg'
                    stylesUl='flex'
                    stylesLi='mx-2 hover:underline'
                    imgSrc='Logo_Catedra.png'
                />
            )} 

            <FragmentHeader
                id='header-aside'
                styles='md:hidden text-lg text-white fixed bg-gray-800 opacity-90 h-full top-0 right-0 p-4 transform translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto'
                stylesUl= 'my-3'
                stylesLi='hover:bg-gray-600 px-2'
                imgSrc='Logo_Catedra.png'
            />
 

             <Button id='button-header' onClick={toggleAside} 
             className="md:hidden flex justify-center right-2 top-3 fixed bg-gray-900 opacity-50 p-1 active:bg-gray-400">
            <Bars3Icon className="h-5 w-5" />  
            </Button>
           

           
            
        </header>  
    );  
};  

export default Header;