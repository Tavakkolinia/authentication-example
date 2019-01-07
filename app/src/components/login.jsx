import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin() {
    axios
      .post('http://localhost:3000/auth/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.props.onLogin(response.data);
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ errorMessage: error.response.data.message });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" />
                </span>{' '}
                Login
              </h1>

              <div className="form-group text-center">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group text-center">
                <label htmlFor="email">
                  Password:
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleLogin}
                >
                  Login
                </button>{' '}
                <div className="col-xs-4 text-center">
                  or{' '}
                  <Link to="/sign-up" className="center-block">
                    Sign Up
                  </Link>
                </div>
              </div>
              {this.state.errorMessage && (
                <div>
                  <span>{this.state.errorMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
