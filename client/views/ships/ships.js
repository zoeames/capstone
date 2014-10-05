(function(){
  'use strict';

  angular.module('capstone')
  .controller('ShipsCtrl', ['$scope', '$location', 'Ship', function($scope, $location, Ship){
    $scope.ship = {};
    $scope.ships = [];

    Ship.all().then(function(response){
      $scope.ships = response.data.ships;
    });

    $scope.pickShip= function(){
      $location.path('/dashboard');
    };

  }]);
})();

