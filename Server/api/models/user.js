/**
 * Created by Margot on 14/12/2016.
 */
/**
 * Created by simonthome on 14/10/2016.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  emailAddress: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  frenchDepartment: Number,
  creationDate: Number,
});

const methods = {
  genSalt(number) {
    return bcrypt.genSalt(number);
  },
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  },
  compare(password, passwordUser) {
    return bcrypt.compare(password, passwordUser);
  }
};

userSchema.pre('save', function (next) {
  const user = this;

  if ((this.isModified('password') || this.isNew) && user.password !== null && typeof user.password !== 'undefined') {
    methods.genSalt(10)
      .then(salt => {
        methods.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next();
          })
          .catch(err => {
            return next(err);
          });
      })
      .catch(err => {
        return next(err);
      });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, cb) {
  methods.compare(password, this.password)
    .then(isMatch => {
      cb(null, isMatch);
    })
    .catch(err => {
      return cb(err);
    });
};

module.exports = mongoose.model('User', userSchema);

