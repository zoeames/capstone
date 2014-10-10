(function(){
  'use strict';

  angular.module('capstone')
  .controller('DiedCtrl', ['$scope', '$location', '$routeParams', 'Ship', function($scope, $location, $routeParams, Ship){

    $scope.seeStats = function(){
      $location.path('/dashboard');
    };
  }]);
})();

