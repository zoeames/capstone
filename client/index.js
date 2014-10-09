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
    .when('/:gameId/ships',   {templateUrl:'/views/ships/ships.html',     controller:'ShipsCtrl'})
    .when('/:gameId/captains',   {templateUrl:'/views/captains/captains.html',     controller:'CaptainsCtrl'})
    .when('/:gameId/sun',   {templateUrl:'/views/gameViews/sun/sun.html',     controller:'SunCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'capstone', storeName:'cache', version:1.0});
  }]);
})();

