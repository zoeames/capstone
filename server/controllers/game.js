'use strict';

var Game = require('../models/game');

exports.index = function(req, res){
  Game.all(function(err, games){
    res.send({games:games});
  });
};

exports.create = function(req, res){
  console.log('>>>>>>>>>>>>>>SERVER', req.user);
  Game.create(req.user._id, function(err, game){
    res.send({game:game});
  });
};
