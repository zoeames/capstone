'use strict';

var Mongo  = require('mongodb');

function Captain(){
}

Object.defineProperty(Captain, 'collection', {
  get: function(){return global.mongodb.collection('captains');}
});

Captain.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Captain.collection.findOne({_id:_id}, cb);
};

Captain.all = function(cb){
  Captain.collection.find().toArray(cb);
};


module.exports = Captain;

