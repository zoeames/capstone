'use strict';

var Game    = require('../models/game'),
    Captain = require('../models/captain');

exports.index = function(req, res){
  Captain.all(function(err, captains){
    res.send({captains:captains});
  });
};

exports.getCaptain = function(req, res){
  Game.findByGameId(req.params.gameId, function(err, myGame){
    Captain.findById(req.params.captainId, function(err, captain){
      Game.assignCaptain(myGame, captain, function(){
        res.send({myGame:myGame});
      });
   });
 });
};

