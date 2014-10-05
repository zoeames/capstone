'use strict';

var Game = require('../models/ship');

exports.index = function(req, res){
  Game.all(function(err, games){
    res.send({games:games});
  });
};
