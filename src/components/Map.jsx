/*
    Este Componente aun no funciona
*/

import React, {Component} from 'react';


class Map extends Component {
  render() {
    return (
      <div className="container">
      	<div className="row-fluid">
              <div className="span8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7833.106561911272!2d-63.87179838181657!3d10.997052332649316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318dd48668b061%3A0x44706c911fed8284!2sUniversidad+de+Oriente!5e0!3m2!1ses!2sve!4v1515287747735" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>          	</div>

            	<div className="span4">
          		<h2>Snail mail</h2>
          		<address>
          			<strong>Hythe Window Cleaning</strong><br />
          			15 Springfield Way<br />
          			Hythe<br />
          			Kent<br />
          			United Kingdon<br />
          			CT21 5SH<br />
          			<abbr title="Phone">P:</abbr> 01234 567 890
          		</address>
          	</div>
          </div>
      </div>
    );
  }
}

export default Map
