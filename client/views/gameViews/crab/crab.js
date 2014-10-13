(function(){
  'use strict';

  angular.module('capstone')
  .controller('CrabCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    = '';
    $scope.captainHandicap = '';
    $scope.newStage      = 'crab';
    $scope.distance = 26425;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Continue at max warp'}, {value:'two', text:'Turn around'}, {value:'three', text:'Abandon ship!'}];

    Game.gameInfo($routeParams.gameId, 'crab').then(function(response){
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

    $scope.CrabChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'Mission Update: You continue through at max warp and find yourself on a collision course with the pulsar at the center of the supernova explosion.  In a panic your ensign hits the port thruster and your ship miraculously gets slingshotted out of harms way.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.0000605357307; /* max warp in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/saga');
            });
          break;

        case 'two':
          $scope.passMessage = 'Mission Update: You try to turn around but the magnetic pull of the pulsar is just to strong.  Your efforts cause to much stress on the warp coil which damages your ship.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*20)+1)*$scope.shipHandicap*$scope.captainHandicap;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/youdied');
            });
          break;

        case 'three':
          $scope.passMessage = 'Mission Update: You call "Abandon Ship".  Your crew and their families get into shuttlecrafts and speed away.  However the shields on the shuttlecrafts are no match for the radiation on the pulsar and everyone dies.';
          $scope.newTime       = $scope.time*1;
          $scope.newHealth     = 0;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/saga');
            });
       }
    };


  }]);
})();

