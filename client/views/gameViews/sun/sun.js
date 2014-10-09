(function(){
  'use strict';

  angular.module('capstone')
  .controller('SunCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){
    $scope.captain = '';
    $scope.ship = '';
    $scope.shipPhoto = '';

    Game.gameInfo($routeParams.gameId, 'sun').then(function(response){
      debugger;
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
    });

  }]);
})();

