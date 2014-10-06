(function(){
  'use strict';

  angular.module('capstone')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function getUser(user){
      return $http.get('/dashboard', user);
    }

    function getGameUser(user){
      return $http.get('/newgame', user);
    }


    return {register:register, login:login, logout:logout, getUser:getUser, getGameUser:getGameUser};
  }]);
})();
