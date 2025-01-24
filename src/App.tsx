import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Biografia from './pages/Biografia';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
            <div className='h-full flex flex-col justify-between'>
                <Header
                    imgSrc='src/assets/Logo_Catedra.png'
                    titulo='Inicio'
                />
                <main>
                    
                    
                </main>
                <Footer />
            </div>
    
    
  )
}

export default App
