(function(){
  'use strict';

  angular.module('capstone')
  .controller('GameCtrl', ['$scope', '$location', function($scope, $location){

    $scope.newGame= function(){
      $location.path('/ships');
    };


  }]);
})();

