'use strict';

var expect    = require('chai').expect,
    Game      = require('../../server/models/game'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    Mongo     = require('mongodb'),
    db        = 'capstone-test';

describe('Game', function(){
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
    it('should create a new game', function(){
      var o = '000000000000000000000001',
      g = new Game(o);
      expect(g).to.be.instanceof(Game);

    });
  });
});
