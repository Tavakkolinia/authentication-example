import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
    <nav
      className="navbar navbar-expand-sm
    navbar-dark bg-primary mb-2 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <h1>My Events</h1>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h5>
      <div className="card card-body ml-3 mr-3 text-uppercase font-weight-bold bg-warning">
        Welcome {props.user.firstName} {props.user.lastName}
      </div>
    </h5>
    <div className="container text-center">
      <h3>Events</h3>
    </div>
  </div>
);

// getArticleById - content
Home.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};

export default Home;
