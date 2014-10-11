(function(){
  'use strict';

  angular.module('capstone')
  .controller('OmegacenCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    ='';
    $scope.captainHandicap ='';
    $scope.newStage      = 'omegacen';
    $scope.distance = 157409;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Go throuhg at max warp'}, {value:'two', text:'Go through at impulse'}, {value:'three', text:'Go around'}];

    Game.gameInfo($routeParams.gameId, 'omegacen').then(function(response){
      $scope.captain         = response.data.myGame.captain.name;
      $scope.ship            = response.data.myGame.ship.name;
      $scope.shipPhoto       = response.data.myGame.ship.photo;
      $scope.health          = response.data.myGame.health;
      $scope.time            = response.data.myGame.time;
      $scope.shipHandicap    = response.data.myGame.ship.shipHandi;
      $scope.captainHandicap = response.data.myGame.captain.captainHandi;
      $scope.showMessage     = response.data.myGame.stageMessage;
      alert($scope.showMessage);
    });

    $scope.omegacenChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'Your great speed and the close proximity of of the stars causes your ship to crash into a small cluster of stars.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.0000605357307; /* max warp in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*20)+1)*$scope.shipHandicap*$scope.captainHandicap;
          alert($scope.newHealth);
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/lmc');
            });
          break;

        case 'two':
          $scope.passMessage = 'Traveling at impulse speed allows you to avoid hitting any of the stars.  The slow speed also allows your crew to spend some time repairing the warp coil.';
          $scope.speed    = 0.000000007922022; /* in ly/sec*/
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health+20;
          if($scope.newHealth >=100){
            $scope.newHealth = 100;
          }
          alert($scope.newHealth);
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/lmc');
            });
          break;

        case 'three':
          $scope.passMessage = 'You travel around the giant ball of stars but it is so massive you lose 6 months.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear+182/365;
          $scope.newHealth     = $scope.health;
          alert($scope.newHealth);
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/lmc');
            });
       }
    };


  }]);
})();

