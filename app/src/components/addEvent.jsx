import React, { Component } from 'react';
import axios from 'axios';
import Alert from './alert';
//import PropTypes from 'prop-types';
// import FormErrors from './FormErrors';

class AddEvent extends Component {
  state = {
    fields: {
      eventTitle: '',
      eventDate: '',
      eventLocation: '',
      eventDescription: ''
    },
    alertMessage: '',
    isSuccess: false,
    isError: false
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddEvent = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false
    });
    console.log(this.state.fields);
    axios
      .post('http://localhost:3000/add', this.state.fields)

      .then(() =>
        this.setState({
          isSuccess: true,
          alertMessage: 'Event added'
        })
      )
      .then(() =>
        this.setState({
          fields: {
            eventTitle: '',
            eventDate: '',
            eventLocation: '',
            eventDescription: ''
          }
        })
      )

      .catch(() => {
        this.setState({
          alertMessage: 'An error occurred. Please try again later',
          isError: true
        });
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-10 mx-auto text-center">
          <div className="card">
            <div className="card-body">
              <h1>Add Event</h1>
              <form onSubmit={this.handleAddEvent}>
                {this.state.isSuccess && (
                  <Alert message={this.state.alertMessage} success />
                )}
                {this.state.isError && (
                  <Alert message={this.state.alertMessage} />
                )}
                <div className="form-group row">
                  <label
                    htmlFor="eventTitle"
                    className="col-sm-2 col-form-label"
                  >
                    Event Title
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="eventTitle"
                      name="eventTitle"
                      placeholder="event title"
                      value={this.state.fields.eventTitle}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="eventDate"
                    className="col-sm-2 col-form-label"
                  >
                    Event Date
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="eventDate"
                      name="eventDate"
                      placeholder="event date"
                      value={this.state.fields.eventDate}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="eventLocation"
                    className="col-sm-2 col-form-label"
                  >
                    Event Location
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="eventLocation"
                      name="eventLocation"
                      placeholder="Event Location"
                      value={this.state.fields.eventLocation}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="eventTitle"
                    className="col-sm-2 col-form-label"
                  >
                    Event Description
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      type="text"
                      className="form-control"
                      id="eventDescription"
                      name="eventDescription"
                      placeholder="event description"
                      value={this.state.fields.eventDescription}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Add Event
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*AddEvent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};*/
export default AddEvent;
