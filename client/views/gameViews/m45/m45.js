(function(){
  'use strict';

  angular.module('capstone')
  .controller('M45Ctrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    ='';
    $scope.captainHandicap ='';
    $scope.distance = 424;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Flee at max warp!'}, {value:'two', text:'Stop and study the stars'}, {value:'three', text:'Follow the voices'}];

    Game.gameInfo($routeParams.gameId, 'asteroid').then(function(response){
      $scope.captain         = response.data.myGame.captain.name;
      $scope.ship            = response.data.myGame.ship.name;
      $scope.shipPhoto       = response.data.myGame.ship.photo;
      $scope.health          = response.data.myGame.health;
      $scope.time            = response.data.myGame.time;
      $scope.shipHandicap    = response.data.myGame.ship.shipHandi;
      $scope.captainHandicap = response.data.myGame.captain.captainHandi;
    });

    $scope.asteroidChoice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'You are a starship captain!  You do not fear a field of silly rocks.  You drive your sharship straight through the asteroid belt and...your ship makes it through with minimal damage!';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*10)+1)*$scope.shipHandicap*$scope.captainHandicap;
          alert($scope.newHealth);
          $scope.newStage      = 'asteroid';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/M45');
            });
          break;

        case 'two':
          $scope.passMessage = 'You fear the cold luminosity free rocks in front of you. You turn your ship around and return to earth.  You are relieved of your command and spend the rest of your days living alone in the Canadian wilderness.';
          $scope.newTime       = $scope.time*1+$scope.time*1;
          $scope.newHealth     = 0;
          alert($scope.newHealth);
          $scope.newStage      = 'asteroid';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/youdied');
            });
          break;

        case 'three':
          $scope.passMessage = 'You use your fancy new phasers to break up some of the rocks.  Unfortunately some of the phaser blasts are deflected off the asteroids and hit your ship.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.newTime       = $scope.time*1;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*25)+1)*$scope.shipHandicap*$scope.captainHandicap;
          alert($scope.newHealth);
          $scope.newStage      = 'sun';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/M45');
            });
       }
    };


  }]);
})();

