'use strict';

var Mongo  = require('mongodb');

function Ship(){
}

Object.defineProperty(Ship, 'collection', {
  get: function(){return global.mongodb.collection('ships');}
});

Ship.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Ship.collection.findOne({_id:_id}, cb);
};

Ship.all = function(cb){
  Ship.collection.find().toArray(cb);
};


module.exports = Ship;

