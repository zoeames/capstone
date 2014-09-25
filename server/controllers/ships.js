'use strict';

var Ship = require('../models/ship');

exports.index = function(req, res){
  Ship.all(function(err, ships){
    res.send({ships:ships});
  });
};
