/**
 * Created by Margot on 14/12/2016.
 */
'use strict';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../api/models/user');
const config = require('./config');

const methods = {
  findOne(id) {
    return User.findOne({id: id}).exec();
  }
};

module.exports = passport => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.development.jwtSecret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    methods.findOne(jwt_payload.sub)
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch(err => {
        return done(err, false);
      });
  }));
};