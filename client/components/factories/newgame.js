(function(){
  'use strict';

  angular.module('capstone')
  .factory('Game', ['$http', function($http){

    function create(){
      return $http.post('/newgame');
    }


    return {create:create};
  }]);
})();
