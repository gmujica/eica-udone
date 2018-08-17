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
              <h1> LIC. Estadistica</h1>
              <p>
              PERFIL PROFESIONAL
              </p>
              <p>
              El estudiante de la Licenciatura en Estadística, al finalizar su carrera, podrá desempeñarse en las siguientes actividades:
              </p>
              <p>
              <a>Realizar actividades de docencia en la especialidad.</a>
              Asesorar y atender consultas en problemas relacionados con estadística.
              Dirigir y planificar programas de recolección, clasificación, y análisis de datos.
              Coordinar, planificar y dirigir las actividades del Sistema Estadístico Nacional.
              Redactar informes y dictámenes sobre asuntos estadísticos con carácter oficial.
              Utilizar los programas de Computación Estadísticos.
              Participar en grupos multidisciplinarios de investigación donde se requiere la aplicación de Metodología Estadística.
              Actuar como consultor privado donde efectuará tareas tan diversas como controlar la calidad de los servicios y de los procesos de producción, investigación de mercado, etc.
              Dirigir las investigaciones económicas de una empresa agrícola o industrial, donde evaluará situaciones económicas y perspectivas de la compañía donde su función no será solamente recolectar datos, sino además formular recomendaciones sobre producción, organización y ventas.
              </p>
              <p>
              MERCADO LABORAL
              </p>
              <p>
              Institutos públicos y privados de investigación, oficinas de planificación, instituciones de Educación Superior, Instituto Venezolano de Planificación (IVEPLAN).
              </p>
              </div>
              <Footer />
            </div>
        );
    }
}
export default Home
