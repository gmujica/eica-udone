// Dependencias
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';


class Home extends Component {
    render(){
        return (
            <div>
              <Navbar />
              <Carousel />
              <div className= "container">
              <h1> LIC. Informatica</h1>
              <p>
              PERFIL PROFESIONAL
              </p>
              <p>

                El Licenciado en Informática está capacitado para diseñar y desarrollar programas de aplicación para el sector productivo, desarrollar y aplicar nuevas metodologías para la construcción de paquetes de programación, realizar funciones administrativas en empresas relacionadas con la producción y servicios de computación, diseñar y manejar sistemas de bases de datos y programar, dirigir y supervisar la selección, montaje y operación de sistemas de computación. Así como:
              </p>
              <p>
              Revisar, validar y contratar la recolección, clasificación y procesamiento de los datos requeridos por los sistemas de información de la institución donde se desempeña.
              </p>
              <p>
              Definir las políticas y las tomas de decisiones estratégicas que permitan integrar todos los procesos y sistemas de la empresa.
              Dominar las técnicas del uso de computadores, programación de cálculos, programación de problemas numéricos, métodos de simulación.
              Tratamiento de la información, docencia y computación.
              Resolver problemas provenientes de la utilización de los sistemas de computación en los campos de las ciencias naturales, humanas y empresariales.
              </p>
              <p>
              MERCADO LABORAL
              </p>
              <p>
              Ministerios, empresas del Estado, compañías petroleras e industrias en general, CADAFE, CANTV, BANCA, organismos financieros, instituciones educacionales donde se requiera automatización a gran escala.                </p>

              </div>
              <Footer />
            </div>
        );
    }
}
export default Home
