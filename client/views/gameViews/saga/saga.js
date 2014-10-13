(function(){
  'use strict';

  angular.module('capstone')
  .controller('SagaCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    ='';
    $scope.captainHandicap ='';
    $scope.newStage      = 'SagA';
    $scope.distance = 424;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Go through the hole'}, {value:'two', text:'Go around the hole'}, {value:'three', text:'Go WAY around the hole'}];

    Game.gameInfo($routeParams.gameId, 'saga').then(function(response){
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

    $scope.sagaChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'Mission Update: It turns out the hole is actually a supermassive black hole in the center of our galaxy.  Your ship falls in never to be heard from again.';
          $scope.newTime       = $scope.time*1;
          $scope.newHealth     = 0;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/youdied');
            });
          break;

        case 'two':
          $scope.passMessage = 'Mission Update: Your ship goes around the hole and your realize the hole is actually a supermassive black hole.  The huge amount of gravity from the supermassive black hole lets you slingshot your ship on its way out of the galaxy.';
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
            $location.path('/'+$routeParams.gameId+'/omegacen');
            });
          break;

        case 'three':
          $scope.passMessage = 'Mission Update: You steer clear of the hole but later realize that it is the supermassive black hole at the center of the galaxy.  You realize you must go back and use it to slingshot yourself out of the galaxy.  The detour costs you three months.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear+90/365;
          $scope.newHealth     = $scope.health;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/omegacen');
            });
       }
    };


  }]);
})();

