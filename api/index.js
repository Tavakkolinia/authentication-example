const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const { auth, users } = require('./src/routes');

// require('dotenv').config();

const app = express();
const db = require('./settings.env').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected..'))
  .catch(err => console.log(err));
app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/users', users);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});
