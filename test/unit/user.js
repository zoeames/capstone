'use strict';

var expect    = require('chai').expect,
    User      = require('../../server/models/user'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    Mongo     = require('mongodb'),
    db        = 'capstone-test';

describe('User', function(){
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
    it('should create a new User object', function(){
      var o = {
        username : 'sue',
        password : 'abcd',
        },
      u = new User(o);
      expect(u).to.be.instanceof(User);

    });
  });

  describe('.register', function(){
    it('should regisiter a new user', function(done){
      User.register({email:'jim@aol.com', password:'1234'}, function(err, user){
        expect(user.email).to.equal('jim@aol.com');
        done();
      });
    });
  });



  describe('.findById', function(){
    it('should find a user by its id', function(done){
      User.findById('000000000000000000000001', function(err, user){
        expect(user.email).to.equal('bob@aol.com');
        done();
      });
    });
  });

});
