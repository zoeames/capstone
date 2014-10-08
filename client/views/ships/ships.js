(function(){
  'use strict';

  angular.module('capstone')
  .controller('ShipsCtrl', ['$scope', '$location', '$routeParams', 'Ship', function($scope, $location, $routeParams, Ship){
    $scope.ship = {};
    $scope.ships = [];

    Ship.all($routeParams.gameId).then(function(response){
      $scope.ships = response.data.ships;
    });

    $scope.pickShip= function(){
      $location.path('/'+$routeParams.gameId+'/captains');
    };

  }]);
})();

