/*import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        : [action.payload, ...state.contacts]
      };
    
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    events: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get('https://localhost:3000/');
    //.then(res => this.setState({ contacts: res.data }));
    this.setState({ events: res.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
*/
