import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// importacion de las pantallas
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Informatica from './pages/Informatica.jsx';
import Estadistica from './pages/Estadistica.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Galeria from './pages/Galeria.jsx';
import Blog from './pages/Blog.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Informatica" component={Informatica} />
          <Route exact path="/Estadistica" component={Estadistica} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Galeria" component={Galeria} />
          <Route exact path="/Blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
