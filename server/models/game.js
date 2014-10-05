'use strict';

var Mongo  = require('mongodb');

function Game(o){
  this.creationDate = new Date();
  this.UserId = Mongo.ObjectID(o.userId);
  this.captain = o.captain;
  this.ship = o.ship;
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

module.exports = Game;
