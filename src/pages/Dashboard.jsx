// Dependencias
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Dashboardsidebar from '../components/Dashboardsidebar.jsx';

class Dashboard extends Component {
    render(){
        return (
              <div>
                <Navbar />
                <div className= "container">
                </div>
                <div>
                
                  <Footer />
                </div>
              </div>

        );
    }
}
export default Dashboard
