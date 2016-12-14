/**
 * Created by Margot on 14/12/2016.
 */
const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const User = require('../../models/user');
const config = require('../../../config/config');

const generalMethods = {
  findOneByEmail(emailAddress) {
    return User.findOne({emailAddress: emailAddress}).exec();
  },
  saveClient(user) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        emailAddress: user.emailAddress,
        password: user.password,
        creationDate: date.getTime()
      };

      console.log(JSON.stringify(userData));

      const newUser = new User(userData);
      newUser.save()
        .then(userData => resolve(userData))
        .catch(err => reject(err));
    });
  },
  updateUser(id, user) {
    return User.update({_id: id}, user).exec();
  },
};

module.exports = function () {
  const router = express.Router();

  router.post('/signup', (req, res) => {
    if (!req.body.emailAddress || !req.body.password || !req.body.firstName || !req.body.lastName || !req.body.username) {
      console.log('missing some fields');
      res.json({success: false, msg: 'Enter required fields'});
    } else {
      generalMethods.saveClient(req.body)
        .then(client => {
          console.log('client created' + JSON.stringify(client));
          res.json(
            {success: true, msg: 'Succesfully created user', userData: client});
        })
        .catch(err => {
          console.log('error creation ' + err);
          res.json(
            {success: false, msg: 'Email address already exists', body: req.body});
        });
    }
  });


  router.post('/login', (req, res) => {
    console.log('user email ' + req.body.emailAddress);
    generalMethods.findOneByEmail(req.body.emailAddress)
      .then(user => {
        console.log(user);
        if (user) {
          if (user.password === null || user.password === '' ||
            user.password === 'undefined') {
            res.json({success: false, msg: 'Missing password'});
          } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
              if (isMatch && !err) {
                const token = jwt.encode({emailAddress: user.emailAddress},
                  config.development.jwtSecret);
                console.log('Login success');
                res.json({
                  success: true,
                  msg: 'Login successful',
                  token: 'JWT ' + token,
                  userData: user
                });
              } else {
                console.log("wrong password");
                res.json({success: false, msg: 'Wrong password'});
              }
            });
          }
        } else {
          console.log("wrong email");
          res.send({success: false, msg: 'Wrong email'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg: 'error in findone'});
      });
  });

  return router;
};
