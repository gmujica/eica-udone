// Dependencias
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
//import Jumbotron from '../components/Jumbotron.jsx';
import Contactform from '../components/Contactform.jsx';
import Map from '../components/Map.jsx';
import Carousel from '../components/Carousel.jsx';



class Contact extends Component {
    render(){
        return (
            <div>
              <Navbar />
              <Carousel />
              <div className= "container">
              <h1> Contact Page</h1>
                <div className="contactform">
                  <Contactform />
                </div>
              </div>
              <div>
                
              </div>
            </div>

        );
    }
}
export default Contact
