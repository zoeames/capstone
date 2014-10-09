(function(){
  'use strict';

  angular.module('capstone')
  .factory('Game', ['$http', function($http){

    function create(){
      return $http.post('/newgame');
    }

    function gameInfo(gameId, stage){
      return $http.post('/games/'+gameId+'/stage/' + stage);
    }

    function addStage(gameId, newStage, newHealth, newTime, passMessage){
      return $http.post('/games/'+gameId+'/newStage/' + newStage+'/newHealth/'+newHealth +'/newTime/'+newTime+'/passMessage/'+passMessage);
    }

    return {create:create, gameInfo:gameInfo, addStage:addStage};
  }]);
})();
