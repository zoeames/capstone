(function(){
  'use strict';

  angular.module('capstone')
  .factory('Captain', ['$http', function($http){

    function all(){
      return $http.get('/captains');
    }

    return {all:all};
  }]);
})();

