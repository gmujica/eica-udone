import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
  <div className="container">
    <span className="text-muted">Eica WebSite Udone &#169; {new Date().getFullYear()}</span>
  </div>
</footer>

    );
  }
}
export default Footer
