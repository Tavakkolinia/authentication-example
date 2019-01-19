const mongoose = require('mongoose');

const AddEventSchema = new mongoose.Schema({
  eventTitle: { type: String, require: true },
  eventDate: { type: Number, require: true },
  eventLocation: { type: String, require: true },
  eventDescription: { type: String, require: true }
});

const AddEventModel = mongoose.model('AddEvent', AddEventSchema);

module.exports = AddEventModel;
