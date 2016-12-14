/**
 * Created by Margot on 14/12/2016.
 */
/**
 * Created by Margot on 14/11/2016.
 */
const express = require('express');
const passport = require('passport');
const jwt = require('jwt-simple');

const Promise = require('bluebird');

const BabyFoot = require('../../models/babyFoot');

const methods = {
  saveBabyFoot(babyFoot, userId) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const babyFootData = {
        userId: userId,
        name: babyFoot.name,
        creationDate: date.getTime()
      };

      console.log(JSON.stringify(babyFootData));

      const newBabyFoot = new BabyFoot(babyFootData);
      newBabyFoot.save()
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  },
  deleteBabyFoot(id) {
    return BabyFoot.remove({_id: id}).exec();
  },
  getAllBabyFoot() {
    return BabyFoot.find({}).exec();
  },
  getOneBabyFoot(id) {
    return BabyFoot.find({_id: id}).exec();
  }
};

module.exports = function () {
  const router = express.Router();

  router.post('/new', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      const userId = req.header.userId;
      methods.saveBabyFoot(req.body, userId)
        .then(response => res.json(
          {success: true, msg: 'Successfully created baby foot', response}))
        .catch(err => res.json(
          {success: false, msg: 'Error created baby foot', err}));
    });

  router.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      methods.getAllBabyFoot()
        .then(response => res.json(
          {success: true, msg: 'Get all baby foot successful', response}))
        .catch(err => res.json(
          {success: false, msg: 'Error get all baby foot', err}))
    });

  router.delete('/:id', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      methods.deleteBabyFoot(req.params.id)
        .then((docs) => res.json(
          {success: true, msg: 'Successfully deleted beby foot', docs}))
        .catch(err => res.json(
          {success: false, msg: 'Error deleted baby foot', err}));
    });

  router.get('/:id', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      methods.getOneBabyFoot(req.params.id)
        .then((docs) => res.json(
          {success: true, msg: 'Get baby foot successful', docs}))
        .catch(err => res.json(
          {success: false, msg: 'Error get baby foot', err}))
    });

  return router;
};
