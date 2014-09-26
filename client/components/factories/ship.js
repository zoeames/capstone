(function(){
  'use strict';

  angular.module('capstone')
  .factory('Ship', ['$http', function($http){

    function all(){
      return $http.get('/ships');
    }

    return {all:all};
  }]);
})();

