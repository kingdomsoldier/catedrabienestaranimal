import React from "react";

const Footer: React.FC = () =>{
    return(
        <footer className="bg-gray-800 text-white p-5 text-center">
            <div>
                <p>&copy; 2024 Universidad de Ciego de Ávila Máximo Gómez Báez. Todos los derechos reservados.</p>
                <p>Desarrollado por <strong>Jocsan Rodriguez Rojas</strong></p>     
            </div>

            <div>
                <strong>Sitios Relacionados:</strong>
                <div>
                    <a className='mx-3 hover:text-blue-500' href="https://johnnyinlove.github.io/RIIBA/" target="blank">RIIBA</a>
                    <a className='mx-3 hover:text-blue-500' href="https://www.unica.cu/" target="_blank">UNICA</a>
                </div>
                
            </div>
        </footer>
            
    );
};

export default Footer;