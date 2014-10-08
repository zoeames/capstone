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
  console.log(id);
  var _id = Mongo.ObjectID(id);
  Game.collection.find({_id:_id}, function(err, game){
    cb(null, game);
  });
};

Game.all = function(cb){
  Game.collection.find().toArray(cb);
};

Game.create = function(userId, cb){
  var g = new Game(userId);
  Game.collection.save(g, cb);
};

module.exports = Game;
