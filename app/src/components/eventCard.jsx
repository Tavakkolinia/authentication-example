import React, { Component } from 'react';

const EventCard = props => (
  <div className="eventCard">
    <i className="fas fa-home" />
    <div className="eventTitle">
      <span>Event Title: {props.eventTitle}</span>
    </div>
    <div className="eventDate">
      <span>Event Date: {props.eventDate}</span>
    </div>

    <div className="eventLocation">
      <span>Event Location: {props.eventLocation}</span>
    </div>
    <div className="eventDescription">
      <span>Event Description: {props.eventDescription}</span>
    </div>
  </div>
);

export default EventCard;
