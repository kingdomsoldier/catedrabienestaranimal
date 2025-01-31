import React from 'react';  
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import { dataMiembros } from '../data/dataMiembros';

  const Miembros: React.FC = () => {  
  return (  
    <>
         <Header
            titulo='Galeria'
            stylesHeaderStatic="text-white background-header"
        />

        <main className='flex justify-center my-20'>
          <div className='w-[90%]'>
            <UserCard 
                users={dataMiembros}
            />
          </div>
         
        </main>
        

        <Footer/>
    </>
  );  
};  

export default Miembros;