'use strict';

var Game = require('../models/game'),
    Ship = require('../models/ship');

exports.index = function(req, res){
  Ship.all(function(err, ships){
    res.send({ships:ships});
  });
};

exports.getShip = function(req, res){
  console.log('>>>>>>>>> BACKEND params', req.params.shipId);
  console.log('>>>>>>>>> BACKEND GameId', req.params.gameId);
  console.log('>>>>>>>>> BACKEND USERId', req.session.userId);
  Game.findByGameId(req.params.gameId, function(err, myGame){
    //console.log('>>>>>>>>>>>>> GAME', myGame);
    Ship.findById(req.params.shipId, function(err, ship){
      //console.log('>>>>>>>>>>>>> SHIP', ship);
      Game.assignShip(myGame, ship, function(){
      // console.log('>>>>>>>>> BACKEND GAME', game);
        res.send({myGame:myGame});
      });
   });
 });
};

