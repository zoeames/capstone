(function(){
  'use strict';

  angular.module('capstone')
  .factory('Captain', ['$http', function($http){

    function all(gameId){
      return $http.get('/'+gameId+'/captains');
    }

    return {all:all};
  }]);
})();

