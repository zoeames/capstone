'use strict';

var User = require('../models/user'),
    Game = require('../models/game');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      req.session.regenerate(function(){
        req.session.userId = user._id;
        req.session.save(function(){
          res.setHeader('X-Authenticated-User', user.email);
          res.status(200).end();
        });
      });
    }else{
      res.status(401).end();
    }
  });
};

exports.logout = function(req, res){
  req.session.destroy(function(){
    res.setHeader('X-Authenticated-User', 'anonymous');
    res.status(200).end();
  });
};

exports.show = function(req, res){
  User.findById(req.user._id, function(err, client){
    Game.findAllByUserId(req.user._id, function(err, games){
      client.games = games;
      console.log(client.games);
      res.send({client:client});
    });
  });
};
