(function(){
  'use strict';

  angular.module('capstone')
  .controller('StatsCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'Game', function($scope, $rootScope, $location, $routeParams, Game){
    $scope.captain = '';
    $scope.ship = '';
    $scope.shipPhoto = '';

    Game.gameInfo($routeParams.gameId, 'sun').then(function(response){
      debugger;
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
      $scope.health = response.data.myGame.health*1;
      var stringTime = response.data.myGame.time*1;
      $scope.time = stringTime.toFixed(2);
    });

  }]);
})();

