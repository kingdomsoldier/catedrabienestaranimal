// src/pages/Biografia.tsx  
import React from "react";  
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Biografia: React.FC = () => {  
    return (  
        
        <div className='h-full flex flex-col justify-between'>
        <Header
        titulo='Biogrfía'
        stylesHeaderStatic="text-white background-header"
        />

        <Main>
            <h2 className="text-center text-3xl font-bold">Guillermo Manuel Leiva González</h2>
        <div className="flex justify-center my-10">
            <figure>
                <img src="Guillermo.jpg" alt="Foto de Guillermo Manuel Leiva González"/>
            </figure>
            
        </div>
        <section>
            <p>
                Ejerció su profesión en su tierra natal, y desde 1959 se incorpora a la sección de medicina veterinaria del
                 ejército rebelde en la finca “El Dique” en Loma de Tierra, La Habana, donde organizó la recría equina, 
                 dirigió la clínica de ginecología y obstetricia, organizó el primer curso de inseminación artificial 
                 con miembros del ejército rebelde y la atención a los sementales de distintas especies y razas para 
                 comenzar el plan nacional de inseminación artificial. Entre 1960 y 1967 laboró en la aclimatación 
                 de bovinos y cabras importadas de diferentes países y la atención a los animales de la feria de 
                 Rancho Boyeros, donde fue juez de ganado de carne y equino. En 1961 fue director del plan nacional 
                 de inseminación artificial, obtiene por oposición una plaza de profesor auxiliar en la Escuela de 
                 Medicina Veterinaria de la Universidad de La Habana y en 1962 comenzó como director de la escuela 
                 nacional de técnicos inseminadores del Instituto Nacional de Reforma Agraria. Un año más tarde, 
                 fue designado director de la Escuela de Zootecnia de la facultad de Ciencias Agropecuarias de la
                  Universidad de la Habana. En 1975 fue director del departamento de postgrado de esa facultad y 
                  en 1977 se le confiere la categoría de profesor titular. Realizó estudios de postgrado en los 
                  Estados Unidos, Unión Soviética y Checoslovaquia. Fue de los primeros en alcanzar el grado 
                  científico de candidato a doctor en ciencias veterinarias, hoy, Doctor en Ciencias Veterinarias. 
                  Una numerosa obra deja publicada, entre ella se destaca el libro de Cunicultura Tropical y un
                   manuscrito sobre équidos. Participó en varios congresos nacionales e internacionales, impartió 
                   cursos de postgrado y formó parte de numerosas comisiones universitarias y estatales. En 1968 
                   obtuvo la militancia del partido, fundador de los comités de defensa de la revolución y de las
                    milicias nacionales revolucionarias. En 1977, preside la delegación cubana al VIII congreso
                     panamericano de medicina y zootecnia, efectuado en República Dominicana. A su regreso sufre 
                     una hemorragia cerebral y fallece, el 19 de agosto, en Curazao.
            </p>
        </section>
        </Main>

        <Footer/>

    </div> 
    );  
};  

export default Biografia;