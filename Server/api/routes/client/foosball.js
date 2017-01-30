/**
 * Created by Margot on 14/12/2016.
 */
const express = require('express');
const passport = require('passport');
const jwt = require('jwt-simple');
const async = require('async');
const lwip = require('lwip');
const base64 = require('node-base64-image');
const fs = require('fs');

const Promise = require('bluebird');

const Foosball = require('../../models/foosball');
const User = require('../../models/user');

const methods = {
  saveFoosball(foosball, userId) {
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
            const foosballData = {
              userId: userId,
              name: foosball.name,
              picture: 'data:image/jpeg;base64, ' + base64Image,
              creationDate: date.getTime()
            };

            console.log(JSON.stringify(foosballData));

            const newFoosball = new Foosball(foosballData);
            newFoosball.save()
             .then(response => resolve(response))
             .catch(err => reject(err));
          });
        });
      });
    });
  },
  deleteFoosball(id) {
    return Foosball.remove({_id: id}).exec();
  },
  getAllFoosball() {
    return Foosball.find({}).exec();
  },
  findOneUserById(id) {
    return User.findOne({_id: id}).exec();
  },
  updateFoosball(id, foosball) {
    return Foosball.update({_id: id}, foosball).exec();
  },
  getAllFoosballAndUser(foosball) {
    return new Promise((resolve, reject) => {
      console.log("foosball:" + foosball);
      let foosballArray = [];
      async.each(foosball, (foosball, callback) => {
        let tmpFoosball = {
          _id: foosball._id,
          userId: foosball.userId,
          name: foosball.name,
          picture: foosball.picture
        };
        console.log("tmp foosball : " + tmpFoosball);
        if (typeof tmpFoosball.userId !== 'undefined' &&
         tmpFoosball.userId !== null && tmpFoosball.userId !== '') {
          methods.findOneUserById(tmpFoosball.userId)
           .then(user => {
             if (user) {
               tmpFoosball.username = user.username;
               tmpFoosball.frenchDepartment = user.frenchDepartment;
               foosballArray.push(tmpFoosball);
               callback();
             } else {
               tmpFoosball.username = '';
               tmpFoosball.frenchDepartment = '';
               foosballArray.push(tmpFoosball);
               callback();
             }
           })
           .catch(err => callback());
        } else {
          tmpFoosball.username = '';
          foosballArray.push(tmpFoosball);
          callback();
        }
      }, (err) => {
        if (err) {
          reject();
        } else {
          resolve(foosballArray);
        }
      });
    })
  }
};

module.exports = function () {
  const router = express.Router();

  router.post('/', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     const userId = req.header.userId;
     methods.saveFoosball(req.body, userId)
      .then(response => res.json(
       {success: true, msg: 'Successfully created foosball', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error created foosball', err}));
   });

  router.get('/', passport.authenticate('jwt', {session: false}),
   (req, res) => {
    methods.getAllFoosball()
     .then(foosball => {
       if(foosball) {
         methods.getAllFoosballAndUser(foosball)
          .then(response => res.json(
           {success: true, msg: 'Get all foosball successful', data: response}))
          .catch(err => res.json(
           {success: false, msg: 'Error get all foosball', err}))
       } else {
         res.json({success: false, msg: 'Foosball not found'});
       }
     })
     .catch(err => {
       res.json({success: false, err: err});
     });
   });

  router.delete('/:id', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     methods.deleteFoosball(req.params.id)
      .then(response => res.json(
       {success: true, msg: 'Successfully deleted foosball', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error deleted foosball', err}));
   });

  router.patch('/:id', passport.authenticate('jwt', {session: false}),
   (req, res) => {
     methods.updateFoosball(req.params.id, req.body)
      .then(response => res.json(
       {success: true, msg: 'Successfully updated foosball', data: response}))
      .catch(err => res.json(
       {success: false, msg: 'Error updated foosball', err}));
   });

  return router;
};
