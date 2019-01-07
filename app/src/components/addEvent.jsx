/*import React, { Component } from 'react';
import axios from 'axios';
//import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';

class addEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: '',
        location: '',
        date: '',
        content: '',
        errors: {}
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
    const { title, location, date, content } = this.state;
    // check for errors
    if (title === '') {
      this.setState({ errors: { title: 'Title is required' } });
      return;
    }
    if (location === '') {
      this.setState({ errors: { location: 'Location is required' } });
      return;
    }
    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }
    if (content === '') {
      this.setState({ errors: { content: 'Content is required' } });
      return;
    }

    // clear state
    this.setState({
      title: '',
      location: '',
      date: '',
      content: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {
    e.preventDefault();
    axios
      .post('localhost:8080/add', {
        title: this.state.title,
        location: this.state.location,
        date: this.state.date,
        content: this.state.content
      })
      .then(response => {
        this.setState({
          event: this.state.event.concat(response.data)
        });
      })
      .catch(() => {
        this.props.history.push('/login');
      });

  render() {
    const { title, location, date, content, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Event</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextInputGroup
                    label="Location"
                    name="location"
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={this.onChange}
                    error={errors.location}
                  />
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                  <TextInputGroup
                    label="Content"
                    name="content"
                    placeholder="Enter content"
                    value={content}
                    onChange={this.onChange}
                    error={errors.content}
                  />

                  <input
                    type="submit"
                    value="Add event"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default addEvent;
*/
