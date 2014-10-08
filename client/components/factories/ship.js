(function(){
  'use strict';

  angular.module('capstone')
  .factory('Ship', ['$http', function($http){

    function all(gameId){
      return $http.get('/'+gameId+'/ships');
    }

    return {all:all};
  }]);
})();

