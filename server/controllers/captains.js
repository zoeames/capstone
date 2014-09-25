'use strict';

var Captain = require('../models/captain');

exports.index = function(req, res){
  Captain.all(function(err, captains){
    res.send({captains:captains});
  });
};
