// Dependencias
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Login from '../components/Login.jsx';
import '../css/Login.css';

class Home extends Component {
    render(){
        return (
            <div>
              <Navbar />
              <div className= "container">
              <h1> Login Page</h1>
              <div>
                <Login />
              </div>
              </div>
              <Footer />
            </div>
        );
    }
}
export default Home
