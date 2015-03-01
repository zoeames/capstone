'use strict';

var expect    = require('chai').expect,
    Ship      = require('../../server/models/ship'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    Mongo     = require('mongodb'),
    db        = 'capstone-test';

describe('Ship', function(){
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
      var s = new Ship();
      expect(s).to.be.instanceof(Ship);

    });
  });

  describe('.findById', function(){
    it('should find a ship by its id', function(done){
      Ship.findById('a00000000000000000000001', function(err, ship){
        expect(ship.name).to.equal('Romulan Warbird');
        done();
      });
    });
  });

  describe('.all', function(){
    it('should find all ships', function(done){
      Ship.all(function(err, ships){
        expect(ships.length).to.equal(3);
        done();
      });
    });
  });


});
