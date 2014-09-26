(function(){
  'use strict';

  angular.module('capstone')
  .controller('ShipsCtrl', ['$scope', 'Ship', function($scope, Ship){
    $scope.ship = {};
    $scope.ships = [];

    Ship.all().then(function(response){
      $scope.ships = response.data.ships;
    });

  }]);
})();

