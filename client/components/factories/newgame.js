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


    return {create:create, gameInfo:gameInfo};
  }]);
})();
