(function(){
  'use strict';

  angular.module('capstone')
  .controller('StatsCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'Game', function($scope, $rootScope, $location, $routeParams, Game){
    $scope.captain     = '';
    $scope.ship        = '';
    $scope.shipPhoto   = '';
    $scope.health      = '';
    $scope.time        = '';
    $scope.displayTime = '';

    Game.gameInfo($routeParams.gameId, 'start').then(function(response){
      $scope.captain     = response.data.myGame.captain.name;
      $scope.ship        = response.data.myGame.ship.name;
      $scope.shipPhoto   = response.data.myGame.ship.photo;
      $scope.health      = response.data.myGame.health;
      $scope.time        = response.data.myGame.time;
      $scope.displayTime = $scope.time.toFixed(3);
    });
  }]);
})();

