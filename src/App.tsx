import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Card from './components/Card';
import { Link } from 'react-router';
import PhotoSlideshow from './components/PhotoSlide';
import NavBar from './components/NavBar';

function App() {

  return (
            <div className='h-full background md:background '>
                <div className='flex flex-col justify-between gradiente'>
               <Header
                    stylesHeaderStatic='flex-col items-center mt-6'
                    stylesTitulo='hidden'
                />
                
                <main className='flex flex-col items-center'>
                    
                <div className="flex flex-col m-14  p-6 max-w-screen-md">

                        <h1 className="text-center text-gray-900 font-playfair text-5xl">Cátedra Honorífica de 
                            <span className="block">Bienestar Animal </span>
                             <span className="block text-lg"><Link to='/catedrabienestaranimal/biografia' className="hover:underline">Guillermo Manuel Leiva González</Link></span>
                        </h1>  
                    </div>

                    <PhotoSlideshow/>

                    <Card titulo='Misión'>
                        <p>
                            La Cátedra de Bienestar Animal <Link to='/catedrabienestaranimal/biografia' className="text-blue-600 hover:underline">Guillermo Manuel Leiva González</Link> es una estructura académica, multidisciplinaria, interdisciplinaria y 
                            funcional encargada de propiciar el desarrollo desde sus espacios de acciones de superación e 
                            investigación, dirigidas a miembros de las comunidades universitarias y la sociedad en general.   
                        </p>
                    </Card>

                    <Card titulo='Visión'>
                        <p>
                            Crear una interacción positiva con los animales con la intención de generar beneficios psicosociales 
                            importantes para el bienestar humano así como propagar una ética del cuidado que puede convertirse en una 
                            fuerza de cohesión social en el seno de una familia, una comunidad o un negocio, sin olvidar que las 
                            relaciones positivas con los animales pueden ser motivo de orgullo, interés y camaradería.  
                        </p>
                    </Card>

                    <Card titulo='Objetivo General'>
                        <p>
                        Promover, en miembros de las comunidades universitarias y la sociedad en general desde bases científicas 
                        relaciones positivas con los animales, independientemente a su objetivo de crianza (productivo, afectivo 
                        o social).        
                        </p>
                    </Card>

                    <Card titulo='Objetivos Específicos'>
                    <ul className="pl-5 list-disc ">
                        <li>Promover en miembros de las comunidades universitarias y la sociedad en general la ética en las 
                            relaciones entre los seres humanos y los animales.
                        </li>
                        <li>
                            Promover la sensación de bienestar o confort de los animales en diferentes sistemas de 
                            tenencia, manejo y alimentación al tiempo que se refuerce el sentido de amor a ellos en su 
                            atención y manipulación en las actividades prácticas.
                        </li>
    
                        <li>
                            Desarrollar acciones de superación e investigación en las Carreras Universitarias y 
                            especialmente en la Carrera de Medicina Veterinaria.
                        </li>
    
                        <li>
                            Contribuir con el desarrollo de actividades extensionistas de superación e investigación 
                            dirigidos a miembros de las comunidades universitarias y la sociedad en general que coadyuven 
                            a la solución de problemas desde la vía científica.
                        </li>

                        <li>
                        	Propiciar el desarrollo de formas de actuación que constituyan la vía para la 
                            asimilación y puesta en práctica de los conocimientos y las normas morales que favorezcan 
                            el bienestar animal.
                        </li>
                    </ul>
                    </Card>

                    <Card titulo='Funciones'>
                    <ul className="pl-5 list-disc ">
                        <li>
                            Aglutinar en torno a un foro científico profesionales, estudiantes, técnicos y la 
                            comunidad, interesados en profundizar en el estudio del Bienestar Animal.
                        </li>
                        <li>
                            Estimular la producción, la sistematización y la aplicación de conocimientos que 
                            enriquezcan la práctica profesional y contribuyen a la solución de problemas desde la vía 
                            científica.
                        </li>
    
                    </ul>
                    </Card>

                </main>
                <Footer />
            </div>
            </div>
 
  )
}

export default App
