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
      console.log(err);
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

  describe('.create', function(){
    it('should greate a new game', function(done){
      Game.create('000000000000000000000002', function(err, game){
        expect(game).to.be.instanceof(Game);
        done();
      });
    });
  });

  describe('.all', function(){
    it('should find all games', function(done){
      Game.all(function(err, games){
        expect(games.length).to.equal(4);
        done();
      });
    });
  });

  describe('.findByGameId', function(){
    it('should find a captain by its id', function(done){
      Game.findByGameId('545a5c5504621f0000c17bc4', function(err, game){
        expect(game.health).to.equal(93);
        done();
      });
    });
  });


  describe('.findAllByUserId', function(){
    it('should find all a users games', function(done){
      Game.findAllByUserId('000000000000000000000001', function(err, games){
        expect(games.length).to.equal(2);
        done();
      });
    });
  });






});
