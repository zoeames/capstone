(function(){
  'use strict';

  angular.module('capstone')
  .factory('Ship', ['$http', function($http){

    function all(gameId){
      return $http.get('/'+gameId+'/ships');
    }

    function setShip(shipId, gameId){
      return $http.post('/games/'+gameId+'/ships/' + shipId);
    }

    return {all:all, setShip:setShip};
  }]);
})();

