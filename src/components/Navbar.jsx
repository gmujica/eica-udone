import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

import favicon from '../img/favicon.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container">

      <div className="banner" className="col-md-4">
					 <div className="bannerin">

            <div  className="clogo">
              <img src={require('../img/favicon.png')} width="100" height="100" />
            </div>
						<div className="bannertext">
							<div className="titleSup">EICA</div>
							<div className="titleInf">Escuela de Ingenieria y Ciencias Aplicadas </div>
							<div className="titleInf">Universidad de Oriente - Nueva Esparta</div>
						</div>
					</div>
				</div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Galeria">Galeria</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">Acerca de Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contactenos</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Carreras Ofertadas
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/Informatica">LIC. Informatica</Link>
                <Link className="dropdown-item" to="/Estadistica">LIC. Estadistica</Link>
                <Link className="dropdown-item disabled" to="/">ING. Telecomunicaciones</Link>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar
