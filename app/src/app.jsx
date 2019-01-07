import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import SignUp from './components/sign-up';
import About from './components/About';
import addEvent from './components/addEvent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            this.state.user ? (
              <Home {...props} user={this.state.user} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} onLogin={this.handleLogin} />}
        />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/add" component={addEvent} />
      </Switch>
    );
  }
}

export default App;
