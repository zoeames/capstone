(function(){
  'use strict';

  angular.module('capstone')
  .controller('LmcCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){
    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    = '';
    $scope.captainHandicap = '';
    $scope.newStage        = 'lmc';
    $scope.distance        = 1250000;   /*in ly*/

    $scope.buttonText=[{value:'one', text:'Continue at impulse'}, {value:'two', text:'Travel at max warp'}, {value:'three', text:'Stop and Study'}];
    Game.gameInfo($routeParams.gameId, 'orion').then(function(response){
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
      $scope.health = response.data.myGame.health;
      $scope.time = response.data.myGame.time;
      $scope.showMessage     = response.data.myGame.stageMessage;
      alert($scope.showMessage);
    });

    $scope.lmcChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'Remembering the last two space objects you encountered (the supermassive black hole and the giant ball of stars) you decide to take it slow through this strange new object.  As you travel through you notice that the dark patches are actually pockets of dark matter which would have caused major problems to your warp drive had you been traveling any faster.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health;
          $scope.newStage      = 'lmc';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/q');
            });
          break;

        case 'two':
          $scope.passMessage = 'You decide to speed through since you have already lost to much time.  You realize to late that the black things flying by are bits of dark matter.  When these hit your ship it causes major damage to your warp coil.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.0000605357307; /* max warp in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*20)+1)*$scope.shipHandicap*$scope.captainHandicap;
          if($scope.newHealth >=100){
            $scope.newHealth = 100;
          }
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/crab');
            });
          break;

        case 'three':
          $scope.passMessage = 'You spend 6 months orbiting the object so your science can study it.  They are really excited and you then continue on your way at standard warp.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear+180/365;
          $scope.newHealth     = $scope.health;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/q');
            });
       }
    };


  }]);
})();

