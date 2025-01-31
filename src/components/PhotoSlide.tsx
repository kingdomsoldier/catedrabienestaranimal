// src/components/PhotoSlideshow.tsx  

import React, { useEffect, useState } from 'react';  

const images = [  
  'animales.jpg', 
  'vacas.jpg',  
];  

const PhotoSlideshow: React.FC = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [fade, setFade] = useState(false); // Estado para manejar la transición

  useEffect(() => {  
    const interval = setInterval(() => {  
        setFade(true); // Iniciar la transición  
        setTimeout(() => {  
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
          setFade(false); // Terminar la transición  
        }, 500); // Duración de la transición  
      }, 5000); // Cambia la imagen cada 3 segundos  
  
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);  

  return (  
    <div className="flex justify-center items-center w-11/12 md:w-1/2 my-5 z-1">  
      <img  
        src={images[currentIndex]}  
        alt={`Image ${currentIndex + 1}`} // Agregamos +1 para un índice más amigable  
        className={`object-cover w-full h-full rounded-lg shadow-lg transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} // Aquí está la clase de transición  
        />  
    </div>  
  );  
};  

export default PhotoSlideshow;