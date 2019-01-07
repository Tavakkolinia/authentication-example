const User = require('../models/user');
const sendEmail = require('./helpers/sendEmail');

const index = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const user = new User({
    idNumber: req.body.idNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(data => {
      const emailContent = `<p>Hi ${req.body.firstName},</p>
      <p>Thank you for signing up with the best in business. Please see below how the site is functioning.</p>
      <p>Kind regards,</p>
      <p>The Team</p>`;
      sendEmail(req.body.email, 'Thank you for signing up!', emailContent);
      res.send(data);
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
