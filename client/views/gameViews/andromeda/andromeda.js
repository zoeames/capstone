(function(){
  'use strict';

  angular.module('capstone')
  .controller('AndromedaCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){
    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    = '';
    $scope.captainHandicap = '';
    $scope.newStage        = 'orion';
    $scope.distance        = 4178;   /*in ly*/

    $scope.buttonText=[{value:'one', text:'Keep Moving'}, {value:'two', text:'Soak in the gas'}, {value:'three', text:'Study the Nebula'}];
    Game.gameInfo($routeParams.gameId, 'orion').then(function(response){
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
      $scope.health = response.data.myGame.health;
      $scope.time = response.data.myGame.time;
      $scope.showMessage     = response.data.myGame.stageMessage;
      alert($scope.showMessage);
    });


    $scope.seeStats = function(){
      $location.path('/dashboard');
    };
  }]);
})();

