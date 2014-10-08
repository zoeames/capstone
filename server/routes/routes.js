'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    debug          = require('../lib/debug'),
    security       = require('../lib/security'),
    home           = require('../controllers/home'),
    users          = require('../controllers/users'),
    ships          = require('../controllers/ships'),
    game           = require('../controllers/game'),
    captains       = require('../controllers/captains');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}}));

  app.use(security.authenticate);
  app.use(debug.info);

  app.get('/home', home.index);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.use(security.bounce);
  app.delete('/logout', users.logout);

  app.get('/:gameId/ships', ships.index);
  app.post('/games/:gameId/ships/:shipId', ships.getShip);
  app.get('/:gameId/captains', captains.index);
  app.post('/games/:gameId/captains/:captainId', captains.getCaptain);
  app.get('/dashboard', users.show);
  app.get('/newgame', game.index);
  app.post('/newgame', game.create);
  console.log('Express: Routes Loaded');
};

