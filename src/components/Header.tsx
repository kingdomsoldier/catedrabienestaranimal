import React, { useEffect, useState } from 'react';  

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
        <header className='flex justify-between shadow-lg p-4 background-header'>  
            <div className='flex items-center'>  
                <div>  
                    <img src={imgSrc} alt="logo de la cátedra" />  
                </div>  
                <div className='mx-2 text-white'>  
                    <h1 className='text-3xl font-bold'>{titulo}</h1>  
                    <h2>CÁTEDRA HONORÍFICA DE BIENESTAR ANIMAL</h2>  
                </div>  
            </div>  

            <nav className='hidden md:flex align-bottom items-end text-white font-bold text-lg'>  
                <ul className='flex mx-4'>  
                    <li><a href="#" className='p-3 hover:underline font-semibold'>Inicio</a></li>  
                    <li><a href="#" className='p-3 hover:underline font-semibold'>Historia</a></li>  
                    <li><a href="#" className='p-3 hover:underline font-semibold'>Audiovisuales</a></li>  
                    <li><a href="#" className='p-3 hover:underline font-semibold'>Publicaciones</a></li>  
                </ul>  
            </nav>  

            {isHeaderFixedVisible && (  
                <div id="header-fixed" className='bg-white flex justify-between w-full top-0 left-0 fixed p-4 shadow-lg'>  
                    <div>  
                        <img src={imgSrc} alt="logo de la cátedra" />  
                    </div>  
                    <nav className='flex align-bottom items-end font-bold text-lg'>  
                        <ul className='flex mx-4'>  
                            <li><a href="#" className='p-3 hover:underline font-semibold'>Inicio</a></li>  
                            <li><a href="#" className='p-3 hover:underline font-semibold'>Historia</a></li>  
                            <li><a href="#" className='p-3 hover:underline font-semibold'>Audiovisuales</a></li>  
                            <li><a href="#" className='p-3 hover:underline font-semibold'>Publicaciones</a></li>  
                        </ul>  
                    </nav>  
                </div>  
            )} 

            <div id="header-aside" className='md:hidden p-4 fixed bg-opacity-90 right-0 top-0 w-64 h-full bg-gray-800 translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0'>  
                    <div>  
                        <img src={imgSrc} alt="logo de la cátedra" />  
                    </div>  
                    <nav className='text-lg text-white font-semibold py-4'>  
                        <ul className=''>  
                            <li className='hover:bg-gray-600'><a href="#" >Inicio</a></li>  
                            <li className='hover:bg-gray-600'><a href="#" >Historia</a></li>  
                            <li className='hover:bg-gray-600'><a href="#" >Audiovisuales</a></li>  
                            <li className='hover:bg-gray-600'><a href="#" >Publicaciones</a></li>  
                        </ul>  
                    </nav>  
                </div>  

            <div className='md:hidden'>
            <button id='button-header' onClick={toggleAside} className='text-2xl text-white bg-gray-950 opacity-50 px-2 pb-1 text-center rounded-lg'>≡</button> 
            </div>
            
        </header>  
    );  
};  

export default Header;