// it should be a presentational component that renders a div or Fragment with the contents Properties Page.
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventCard from './eventCard';
// import '../styles/events.css';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      isError: false,
      alertMessage: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/add')
      .then(response => this.setState({ events: response.data }))
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'An error occurred. Please try again later'
        });
      });
  }
  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios
        .get(`http://localhost:3000/add${search}`)
        .then(({ data: events }) => this.setState({ events }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/" className="nav-link">
            <i className="fas fa-arrow-left" /> Home
          </Link>
        </div>
        <div className="sidebar">
          <Link
            className="eventLocation"
            to={`/events?query={"eventLocation": "Manchester"}`}
          >
            Manchester
          </Link>
          <Link
            className="eventLocation"
            to={`/events?query={"eventLocation": "Leeds"}`}
          >
            Leeds
          </Link>
          <Link
            className="eventLocation"
            to={`/events?query={"eventLocation": "Liverpool"}`}
          >
            Liverpool
          </Link>
        </div>

        <div className="events">
          {this.state.events.map(event => (
            <div key={event._id} className="col">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
