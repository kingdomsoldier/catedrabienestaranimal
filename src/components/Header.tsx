import React from 'react';  

interface HeaderProps{
    imgSrc?: string;
}

const Header: React.FC<HeaderProps> = ({imgSrc}) => {  
    return (  
        <header className='bg-slate-500'>  
            <img src={imgSrc} alt="" />
            <h1>Mi Aplicación React</h1>  

            <nav>
                <ul>
                    
                </ul>
            </nav>
        </header>  
    );  
};  

export default Header;