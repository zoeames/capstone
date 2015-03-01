'use strict';

var expect    = require('chai').expect,
    Captain      = require('../../server/models/captain'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    Mongo     = require('mongodb'),
    db        = 'capstone-test';

describe('Captain', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Captain object', function(){
      var c = new Captain();
      expect(c).to.be.instanceof(Captain);

    });
  });
/*
  describe('.findById', function(){
    it('should find a user by its id', function(done){
      User.findById('000000000000000000000001', function(err, user){
        expect(user.email).to.equal('bob@aol.com');
        done();
      });
    });
  });
*/
});
