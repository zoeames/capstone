'use strict';

var Game = require('../models/game'),
    Ship = require('../models/ship');

exports.index = function(req, res){
  Ship.all(function(err, ships){
    res.send({ships:ships});
  });
};

exports.getShip = function(req, res){
  Game.findByGameId(req.params.gameId, function(err, myGame){
    console.log(myGame);
    Ship.findById(req.params.shipId, function(err, ship){
      Game.assignShip(myGame, ship, function(){
        res.send({myGame:myGame});
      });
   });
 });
};
