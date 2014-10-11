(function(){
  'use strict';

  angular.module('capstone', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/dashboard',   {templateUrl:'/views/dashboard/dashboard.html',     controller:'DashboardCtrl'})
    .when('/newgame',   {templateUrl:'/views/newgame/newgame.html',     controller:'GameCtrl'})
    .when('/:gameId/youdied',   {templateUrl:'/views/youdied/youdied.html',     controller:'DiedCtrl'})
    .when('/:gameId/ships',   {templateUrl:'/views/ships/ships.html',     controller:'ShipsCtrl'})
    .when('/:gameId/captains',   {templateUrl:'/views/captains/captains.html',     controller:'CaptainsCtrl'})
    .when('/:gameId/sun',   {templateUrl:'/views/gameViews/sun/sun.html',     controller:'SunCtrl'})
    .when('/:gameId/asteroid',   {templateUrl:'/views/gameViews/asteroid/asteroid.html',     controller:'AsteroidCtrl'})
    .when('/:gameId/m45',   {templateUrl:'/views/gameViews/m45/m45.html',     controller:'M45Ctrl'})
    .when('/:gameId/orion',   {templateUrl:'/views/gameViews/orion/orion.html',     controller:'OrionCtrl'})
    .when('/:gameId/crab',   {templateUrl:'/views/gameViews/crab/crab.html',     controller:'CrabCtrl'})
    .when('/:gameId/saga',   {templateUrl:'/views/gameViews/saga/saga.html',     controller:'SagaCtrl'})
    .when('/:gameId/omegacen',   {templateUrl:'/views/gameViews/omegacen/omegacen.html',     controller:'OmegacenCtrl'})
    .when('/:gameId/lmc',   {templateUrl:'/views/gameViews/lmc/lmc.html',     controller:'LmcCtrl'})
    .when('/:gameId/q',   {templateUrl:'/views/gameViews/q/q.html',     controller:'QCtrl'})
    .when('/:gameId/andromeda',   {templateUrl:'/views/gameViews/andromeda/andromeda.html',     controller:'AndromedaCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'capstone', storeName:'cache', version:1.0});
  }]);
})();

