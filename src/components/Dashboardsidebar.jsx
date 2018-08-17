import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboardsidebar extends Component {
  render() {
    return (
      <div className="Dashboardsidebar">
        <div className="container">
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link className="nav-link active" href="/">Overview <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Reports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Analytics</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Export</Link>
                    </li>
                  </ul>

                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Nav item</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Nav item again</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">One more nav</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Another nav item</Link>
                    </li>
                  </ul>

                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Nav item again</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">One more nav</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Another nav item</Link>
                    </li>
                  </ul>
                </nav>
        </div>
      </div>
    );
  }
}
export default Dashboardsidebar
