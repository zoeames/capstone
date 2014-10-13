(function(){
  'use strict';

  angular.module('capstone')
  .controller('OrionCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){
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

    $scope.orionChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'Mission Update: You decide to keep moving towards Starbase Andromeda so your ship passes through the cloud of gas at standard warp..';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/crab');
            });
          break;

        case 'two':
          $scope.passMessage = 'Mission Update: You stop your ship in the middle of the gas cloud and soak up some of the gas into your ship.  Not only is it a breath of fresh air but your crew all feels a lot better.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health+20;
          if($scope.newHealth >=100){
            $scope.newHealth = 100;
          }
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/crab');
            });
          break;

        case 'three':
          $scope.passMessage = 'Mission Update: Your spend 7 days studying the healing properties of the nebula.  A week\'s worth of data should keep your science officers busy for awhile.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear+7/365;
          $scope.newHealth     = $scope.health;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/crab');
            });
       }
    };


  }]);
})();

