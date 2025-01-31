import React from "react";
import { Link} from "react-router-dom";
import { urlNavBar } from "../types/urlNavBar";


interface FragmentHeaderProps{
    id?: string;
    titulo?: string;
    subtitulo?: string;
    styles?: string;
    stylesNav?: string;
    stylesUl?: string;
    stylesLi?: string;
    stylestitulo?: string;
    imgSrc?: string;
}

const FragmentHeader: React.FC<FragmentHeaderProps> =({id, imgSrc, titulo = '', subtitulo, styles, stylesNav, stylesUl, stylesLi, stylestitulo}) =>{
    return(
        <div id = {id} className={styles}>

             <div className='flex items-center'>  
                <div>  
                    <img src={imgSrc} alt="logo de la cátedra" />  
                </div>  
                <div className= {`mx-2 ${stylestitulo}`}>  
                    <h2 className='text-3xl font-bold'>{titulo}</h2>  
                    <h1>{subtitulo}</h1>  
                </div>  
            </div>  
 
                <nav className={stylesNav}>  
                    <ul className={stylesUl}>  
                        <li className = {stylesLi}><Link to='/catedrabienestaranimal/'>Inicio</Link></li>  
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/fundamentacion">Fundamentación</Link></li>
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/historia">Historia</Link></li>
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/galeria">Galeria</Link></li>
                        <li className = {stylesLi}><Link to="/catedrabienestaranimal/miembros">Miembros</Link></li>
                    </ul>  
                </nav>


            
        </div>
    );
};

export default FragmentHeader
