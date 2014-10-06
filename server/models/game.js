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

Game.findByUserId = function(id, cb){
  console.log(id);
  var _id = Mongo.ObjectID(id);
  Game.collection.find({userId:_id}, function(err, games){
    cb(null, games);
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
