'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb');

function User(o){
  this.email = o.email;
  this.password=o.password;
  this.photo = 'http://i2.wp.com/www.maas360.com/assets/Uploads/defaultUserIcon.png';
  this.games =[];
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    var newUser = new User(o);
    if(user || o.password.length < 3){return cb();}
    newUser.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(newUser, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};


module.exports = User;

