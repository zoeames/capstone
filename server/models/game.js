'use strict';

var Mongo  = require('mongodb');

function Game(id){
  this.creationDate = new Date();
  this.UserId = Mongo.ObjectID(id);
  this.captain='';
  this.ship='';
  this.stats=[];
}

Object.defineProperty(Game, 'collection', {
  get: function(){return global.mongodb.collection('games');}
});

Game.findByGameId = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Game.collection.findOne({_id:_id}, function(err, aGame){
    cb(null, aGame);
  });
};

Game.all = function(cb){
  Game.collection.find().toArray(cb);
};

Game.create = function(userId, cb){
  var g = new Game(userId);
  Game.collection.save(g, cb);
};


Game.assignShip = function(game, ship, cb){
  game.ship = ship;
  Game.collection.save(game, cb);
};


module.exports = Game;
