const express = require('express');
const EventsController = require('../controllers/events');

const router = express.Router();

router
  .route('/')
  .get(EventsController.index)
  .post(EventsController.create);
module.exports = router;
