const AddEvent = require('../models/addevent');

const index = (req, res) => {
  AddEvent.find()
    .then(events => {
      res.status(200).json(events);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const addevent = new AddEvent({
    eventTitle: req.body.eventTitle,
    eventDate: req.body.eventDate,
    eventLocation: req.body.eventLocation,
    eventDescription: req.body.eventDescription
  });

  addevent
    .save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = {
  index,
  create
};
