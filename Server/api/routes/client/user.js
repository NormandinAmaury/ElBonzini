/**
 * Created by Margot on 25/01/2017.
 */
const express = require('express');
const Promise = require('bluebird');
const passport = require('passport');
const jwt = require('jwt-simple');

const User = require('../../models/user');
const config = require('../../../config/config');

const generalMethods = {
  findOneById(id) {
    return User.findOne({_id: id}).exec();
  },
  updateUser(id, user) {
    return User.update({_id: id}, user).exec();
  },
};

module.exports = function () {
  const router = express.Router();

  router.get('/', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     const userId = req.header.userId;
     generalMethods.findOneById(userId)
      .then((user) => {
        res.json(
         {success: true, msg: 'Get user successful', data: user})
      })
      .catch(err => res.json(
       {success: false, msg: 'Error get user', data: err}))
   });

  return router;
};
