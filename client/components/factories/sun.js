(function(){
  'use strict';

  angular.module('capstone')
  .factory('Captain', ['$http', function($http){

    function all(gameId){
      return $http.get('/'+gameId+'/captains');
    }

    function setCaptain(captainId, gameId){
      return $http.post('/games/'+gameId+'/captains/' + captainId);
    }

    return {all:all, setCaptain:setCaptain};
  }]);
})();

