const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  idNumber: {
    type: Number,
    min: 10000,
    max: 99999
},
  firstName: String,
  lastName: String,
  email: String,
  password: {
    type: String,
    set: password => bcrypt.hashSync(password, 10),
  },
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
}

const User =  mongoose.model('User', userSchema);

module.exports = User;
