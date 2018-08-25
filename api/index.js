const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const { auth, users } = require("./src/routes");

dotenv.config();

const app = express();


const DB_CONNECTION = "mongodb://testproductsapi:testproduct1@ds125322.mlab.com:25322/testproducts";
const mongoDB = process.env.MONGODB_URI || DB_CONNECTION;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(cors());

app.use("/auth", auth);
app.use("/users", users);

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

