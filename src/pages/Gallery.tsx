// src/components/Gallery.tsx  
import React from 'react';  
import { Modal, Button } from 'flowbite-react';  
import Header from '../components/Header';
import Footer from '../components/Footer';


  const Gallery: React.FC = () => {  
  const [open, setOpen] = React.useState(false);  
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);  

  const handleImageClick = (image: string) => {  
    setSelectedImage(image);  
    setOpen(true);  
  };  

  const handleClose = () => {  
    setOpen(false);  
    setSelectedImage(null);  
  };  

  const images = [  
    '1.jpg',  
    '2.jpg',
    '3.jpg',  
    '4.jpg', 
    '5.jpg'
  ]; 

  return (  

    <div>
      <Header
        titulo='Galeria'
        stylesHeaderStatic="text-white background-header"
        />
        
    <div className="grid grid-cols-2 md:grid-cols-4 my-10">  
      {images.map((image, index) => (  
        <div key={index} className="bg-white p-2 m-2 border border-gray-200 rounded-lg shadow-sm">  
          <img  
            src={image}  
            alt={`Gallery Image ${index + 1}`}  
            className="w-full rounded-lg transition-transform duration-300"  
            onClick={() => handleImageClick(image)}  
          />  
        </div>  
      ))}  
      
      {/* Modal para mostrar la imagen en grande */}  
      <Modal show={open} onClose={handleClose}>  
        <Modal.Header>  
          <Button onClick={handleClose}>
          </Button>  
        </Modal.Header>  
        <Modal.Body>  
          {selectedImage && (  
            <div className='flex justify-center'>
                <img src={selectedImage} alt="Selected" className="w-full md:w-1/2 h-auto"/> 
            </div>
             
          )}  
        </Modal.Body>  
      </Modal>  
    </div>

    <Footer/>
    </div>
  );  
};  

export default Gallery;