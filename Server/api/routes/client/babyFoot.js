/**
 * Created by Margot on 14/12/2016.
 */
/**
 * Created by Margot on 14/11/2016.
 */
const express = require('express');
const passport = require('passport');
const jwt = require('jwt-simple');
const async = require('async');
const lwip = require('lwip');
const base64 = require('node-base64-image');
const fs = require('fs');

const Promise = require('bluebird');

const BabyFoot = require('../../models/babyFoot');
const User = require('../../models/user');

const methods = {
  saveBabyFoot(babyFoot, userId) {
    return new Promise((resolve, reject) => {
      const date = new Date();
      let picture = '';
      const number = Math.floor((Math.random() * 4) + 1);
      switch (number) {
        case 1 :
          picture = 'api/assets/images/babyfoot.jpg';
          break;
        case 2 :
          picture = 'api/assets/images/football2.jpg';
          break;
        case 3 :
          picture = 'api/assets/images/football3.jpg';
          break;
        case 4 :
          picture = 'api/assets/images/football4.jpg';
          break;
        default :
          return null;
      }

      lwip.open(picture, (err, image) => {
        image.resize(400, 220, (err, image) => {
          image.toBuffer('jpg', (err, buffer) => {
            const base64Image = buffer.toString('base64');
            const babyFootData = {
              userId: userId,
              name: babyFoot.name,
              picture: 'data:image/jpeg;base64, ' + base64Image,
              creationDate: date.getTime()
            };

            console.log(JSON.stringify(babyFootData));

            const newBabyFoot = new BabyFoot(babyFootData);
            newBabyFoot.save()
             .then(response => resolve(response))
             .catch(err => reject(err));
          });
        });
      });
    });
  },
  deleteBabyFoot(id) {
    return BabyFoot.remove({_id: id}).exec();
  },
  getAllBabyFoot(userId) {
    return BabyFoot.find({userId}).exec();
  },
  getOneBabyFoot(id) {
    return BabyFoot.findOne({_id: id}).exec();
  },
  findOneUserById(id) {
    return User.findOne({_id: id}).exec();
  },
  getAllBabyFootAndUser(babyFoot) {
    return new Promise((resolve, reject) => {
      console.log("baby foot:" + babyFoot);
      let babyfootArray = [];
      async.each(babyFoot, (babyfoot, callback) => {
        let tmpBabyfoot = {
          _id: babyfoot._id,
          userId: babyfoot.userId,
          name: babyfoot.name,
        };
        console.log("tmp baby foot : " + tmpBabyfoot);
        if (typeof tmpBabyfoot.userId !== 'undefined' &&
         tmpBabyfoot.userId !== null && tmpBabyfoot.userId !== '') {
          methods.findOneUserById(tmpBabyfoot.userId)
           .then(user => {
             if (user) {
               tmpBabyfoot.username = user.username;
               babyfootArray.push(tmpBabyfoot);
               callback();
             } else {
               tmpBabyfoot.username = '';
               babyfootArray.push(tmpBabyfoot);
               callback();
             }
           })
           .catch(err => callback());
        } else {
          tmpBabyfoot.username = '';
          babyfootArray.push(tmpBabyfoot);
          callback();
        }
      }, (err) => {
        if (err) {
          reject();
        } else {
          resolve(babyfootArray);
        }
      });
    })
  },

  updateBabyFoot(id, babyFoot) {
    return BabyFoot.update({_id: id}, babyFoot).exec();
  }
};

module.exports = function () {
  const router = express.Router();

  router.post('/', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     const userId = req.header.userId;
     methods.saveBabyFoot(req.body, userId)
      .then(response => res.json(
       {success: true, msg: 'Successfully created baby foot', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error created baby foot', err}));
   });

  router.get('/', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     const userId = req.header.userId;
     methods.getAllBabyFoot(userId)
      .then(response => res.json(
       {success: true, msg: 'Get all baby foot successful', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error get all baby foot', err}))
   });

  router.delete('/:id', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     methods.deleteBabyFoot(req.params.id)
      .then(response => res.json(
       {success: true, msg: 'Successfully deleted baby foot', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error deleted baby foot', err}));
   });

  router.patch('/:id', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     methods.updateBabyFoot(req.params.id, req.body)
      .then(response => res.json(
       {success: true, msg: 'Successfully updated baby foot', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error updated baby foot', err}));
   });

  router.get('/allBabyFoot', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     methods.getAllBabyFoot()
      .then(babyfoot => {
        console.log(babyfoot.length);
        if (babyfoot) {
          methods.getAllBabyFootAndUser(babyfoot)
           .then(babyfootArray => {
             res.json({
               success: true,
               msg: 'all baby foot retrieved',
               data: babyfootArray
             });
           })
           .catch(err => {
             res.json(
              {success: false, msg: 'baby foot not retrieved', err: err});
           });
        } else {
          res.json({success: false, msg: 'baby foot not found'});
        }
      })
      .catch(err => {
        res.json({success: false, err: err});
      });
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
