import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
      .post('http://localhost:3000/users', {
        idNumber: this.state.idNumber,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push('/login');
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
                  <i className="fas fa-user-plus" />
                </span>{' '}
                Sign Up
              </h1>
              <div className="form-group text-center">
                <label htmlFor="idNumber">
                  ID Number:{' '}
                  <input
                    type="number"
                    name="idNumber"
                    value={this.state.idNumber}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group text-center">
                <label htmlFor="firstName">
                  First Name:{' '}
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group text-center">
                <label htmlFor="lastName">
                  Last Name:{' '}
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group text-center">
                <label htmlFor="email">
                  Valid Email:{' '}
                  <input
                    type="email" // to appear with dots change the value to password
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group text-center">
                <label htmlFor="password">
                  Password:{' '}
                  <input
                    type="password" // to appear with dots change the value to password
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
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
