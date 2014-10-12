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


exports.getInfo = function(req, res){
  Game.findByGameId(req.params.gameId, function(err, myGame){
    res.send({myGame:myGame});
 });
};

exports.addStat = function(req, res){
  console.log('>>>>>>>>REQ.PARAMS   ', req.params);
  Game.findByGameId(req.params.gameId, function(err, myGame){
    Game.addStat(myGame, req.params, function(err, editedGame){
      res.send({editedGame:editedGame});
    });
  });
};

