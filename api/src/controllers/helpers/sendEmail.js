const nodemailer = require('nodemailer');

const gmailPassword = require('./google.js').GMAIL_PASSWORD;

function sendEmail(sendTo, subject, body) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'gerganania@gmail.com',
      pass: gmailPassword,
    },
  });

  const mailOptions = {
    from: 'The Team gerganania@gmail.com',
    to: sendTo,
    subject: subject,
    html: body,

  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = sendEmail;
