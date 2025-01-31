import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Fundamentacion: React.FC = () =>{
    return(
        <div>
            <Header
            titulo="Fundamentación"
            stylesHeaderStatic="background-header text-white"
            />

            <Main>
                <p className="my-3">
                Actualmente existe una creciente preocupación pública por el bienestar de los animales en la mayoría de los 
                países del mundo. Los estudios etológicos aplicados de motivación, cognición y de complejidad del 
                comportamiento social en los animales, han generado un veloz desarrollo de la ciencia del bienestar animal. 
                Una definición de bienestar animal es: el estado del individuo respecto a sus intentos de enfrentar el 
                ambiente en que se encuentra. El bienestar está relacionado con todos los mecanismos para enfrentarlo: 
                involucrando la fisiología, el comportamiento, los sentimientos y las respuestas patológicas. 
                Bienestar es un término más amplio que salud, pero la salud es una parte importante del bienestar. 
                Con el objetivo de respetar las leyes y normas, el bienestar animal cuenta con algunos indicadores 
                que son de gran utilidad. Gran cantidad de las mediciones del bienestar se utilizan para indicar
                que tan bueno o que tan pobre es el bienestar. El concepto de bienestar animal y sus métodos de 
                evaluación se enseñan ahora en cientos de universidades de todo el mundo. En los últimos años, el 
                bienestar animal se ha establecido como uno de los criterios utilizados para decidir si un sistema 
                es sostenible y si la calidad del producto es buena.
                </p> 

                <p className="my-3">
                Teniendo en consideración que ha constituido un reclamo de nuestra sociedad la implementación de disposiciones 
                normativas que garanticen el bienestar animal y que a la vez contribuyan a concientizar a nuestra población en 
                el cuidado y respeto a los mismos, a los efectos de lograr una relación armónica entre los seres humanos y el 
                resto de las especies, como condición, el Consejo de Estado de la República de Cuba, acordó dictar el 
                Decreto-Ley 31 “De Bienestar Animal”, con fecha del 26 de febrero de 2021. El presente Decreto-Ley tiene 
                como objeto regular los principios, deberes, reglas y fines respecto al cuidado, la salud y la utilización 
                de los animales, para garantizar su bienestar, con enfoque a “Una Salud”.
                </p>
            </Main>

            <Footer/>
        </div>
    );
};

export default Fundamentacion;