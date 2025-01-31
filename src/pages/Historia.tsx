import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Historia: React.FC = () =>{
    return(
        <div>
            <Header
            titulo="Historia"
            stylesHeaderStatic="background-header text-white"
            />

            <Main>
                <h2 className="text-2xl font-bold my-3 text-center">Orígenes e Historia del Bienestar Animal</h2>

                <p className="my-3">
                    Desde la antigüedad, las discusiones sobre las relaciones entre el ser humano y el animal han hecho furor y 
                    han sido objeto de controversias. Filósofos como Pitágoras exhortaban al respeto de los animales, pensando que 
                    los humanos y no humanos tenían el mismo tipo de alma, mientras que Aristóteles sostenía la tesis según la cual
                    la dominación humana sobre los animales   hacía parte del orden natural. Hay que reconocer que el destino de
                    los animales está estrechamente entrelazado con el nuestro: todos, el ganado, los animales de compañía o la
                    fauna silvestre, son componentes fundamentales de nuestro medioambiente e interactúan constantemente con 
                        este. Sin embargo, independientemente de nuestros patrones culturales, religiosos o sociales, de las 
                        divergencias y polémicas, nuestro comportamiento hacia los animales es un elemento primordial de la 
                        definición de nuestra humanidad. Las nociones de bienestar animal han sido consideradas por mucho tiempo
                        como no científicas y dependientes únicamente de las consideraciones culturales que vinculan a los seres 
                        humanos con los animales. Actualmente, este enfoque es refutado por numerosos estudios que han demostrado 
                        claramente que las discusiones, y las normativas, pueden sustentarse con argumentos científicos aprobados. 
                        Cabe destacar que en los países más favorecidos el consumidor no sólo se preocupa por el precio de los
                        productos o la salubridad de su alimentación, sino que también se interesa por la manera de producción de 
                        los alimentos y en particular los métodos de cría, transporte y sacrificio de los animales. La conciencia
                        de una coherencia necesaria entre bienestar animal y desarrollo sostenible de la ganadería se está 
                        gestando y ciertamente contribuirá al desarrollo de nuevas prácticas mucho más respetuosas de los
                        animales el objetivo principal de una política de bienestar animal era mejorar las condiciones de 
                        cría, transporte y sacrificio, entre otras, para respetar las necesidades psicológicas y el 
                        comportamiento de los animales, mejorando así su productividad. Este objetivo sigue siendo adecuado en 
                        muchos países. Sin embargo, hoy en día los paradigmas han cambiado y las nuevas consideraciones 
                        conllevan a adoptar otra visión sobre las problemáticas en materia de bienestar animal, en particular
                        respecto de la producción animal, donde la conciencia de una coherencia necesaria entre bienestar
                        animal y desarrollo sostenible de la ganadería
                    </p>

                    <h2 className="text-2xl font-bold my-5">Actualidad del Bienestar Animal</h2>

                    <p className="my-3">
                    Aunque los derechos de los animales no son ninguna novedad en la historia, el concepto de Bienestar Animal,
                    tal y como hoy lo entendemos surge en los años 60, cuando en 1965, tras las preocupaciones planteadas en 
                    el libro de “Animal Machines” (Harrison, 1964), el gobierno del Reino Unido encargó a Brambell una 
                    investigación sobre el bienestar de los animales de cría intensiva; a raíz de su informe se creó en 1967 
                    el Farm Animal Welfare Advisory Committee que acabaría convirtiéndose en el Farm Animal Welfare Council 
                    en 1979. Se puede decir que en cierta forma el resto de países han ido a la zaga del Reino Unido, donde 
                    hoy existe una titulación universitaria de Bienestar Animal (Animal Welfare).
                    </p>

                    <h3 className="text-x1 font-bold">Factores que han repercutido en el creciente interés por el bienestar animal</h3>

                    <ul className="list-disc pl-5">
                    <li>Un mayor conocimiento científico de las especies ganaderas en aspectos como el comportamiento animal, 
                        la fisiología del estrés o el manejo.
                    </li>

                    <li>
                        El conocimiento de la relación directa que existe entre los anteriores aspectos y la productividad, así como su estabilidad.
                    </li>

                    <li>
                        La concienciación social sobre las necesidades de los animales y su sufrimiento
                    </li>
                    </ul>

                    <h2 className="text-2xl font-bold my-5">Impacto del Bienestar Animal</h2>

                    <p className="my-3">
                    Dado que el bienestar animal es un concepto complejo, los vínculos entre la mejora de dicho bienestar y el 
                    impacto de esa mejora también suelen ser complejos. El considerar estándares de bienestar animal en todas 
                    las formas de relación humano-animal, tales como producción animal, animales de compañía, zoológicos, 
                    experimentación con animales, adiestramiento de animales, entre otros, no sólo mejorará sustancialmente la 
                    calidad de vida de los animales y aminorará su sufrimiento, sino que traerá también beneficios importantes 
                    a la humanidad: incrementa la inocuidad y calidad de los productos alimenticios de origen animal; en muchos 
                    casos, incrementa la eficiencia económica de las unidades de producción animal; se hace más fácil, seguro y 
                    eficiente el manejo de los animales; impacta positivamente en aspectos de salud pública; permite relaciones 
                    comerciales con países que tienen una importante legislación en materia de bienestar animal; mejora la venta de 
                    productos en sociedades donde los consumidores informados y sensibles al sufrimiento animal, prefieren alimentos 
                    con un origen ético.
                    </p>
                    
                    <p className="my-3">
                    Además de estos beneficios prácticos, una interacción positiva con los animales puede generar beneficios 
                    psicosociales importantes para el bienestar humano. Contribuye a propagar una ética del cuidado y puede 
                    ser una fuerza de cohesión social en el seno de una familia, una comunidad o un negocio, sin olvidar que 
                    las relaciones positivas con los animales pueden ser motivo de orgullo, interés y camaradería. La atención 
                    al bienestar de los animales también puede generar beneficios de mayor alcance para las comunidades humanas. 
                    En muchas zonas rurales, los medios de vida de los pequeños productores pecuarios están íntimamente ligados a 
                    la supervivencia, salud y productividad de sus animales. Por lo tanto, al mejorar estos aspectos, las buenas 
                    prácticas de bienestar animal pueden contribuir a preservar la prosperidad y el empleo rural, con los 
                    consiguientes beneficios en cuanto a estabilidad de las familias y las comunidades.
                    </p>

                    <p className="my-3">
                    La cátedra pretende desarrollar desde sus espacios, acciones de superación e investigación, dirigidas a 
                    miembros de las comunidades universitarias y la sociedad en general. Son muchas las acciones que se pueden 
                    llevar a cabo desde las aulas de cualquier centro de educación del país, en estrecha relación con la 
                    familia, la comunidad, los medios de difusión masiva y las distintas organizaciones, entre otros actores 
                    sociales, para contribuir al desarrollo de actitudes positivas hacia la protección del medio ambiente y 
                    en particular hacia los animales.
                    </p>

            </Main>

            <Footer/>
        </div>
    );
};

export default Historia;