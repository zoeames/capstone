(function(){
  'use strict';

  angular.module('capstone')
  .controller('QCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain         = '';
    $scope.ship            = '';
    $scope.shipPhoto       = '';
    $scope.passMessage     = '';
    $scope.shipHandicap    ='';
    $scope.captainHandicap ='';
    $scope.newStage        = 'q';
    $scope.distance        = 1250000;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Arm phasers'}, {value:'two', text:'Backwards at maximum warp'}, {value:'three', text:'Do whatever Q wants'}];

    Game.gameInfo($routeParams.gameId, 'q').then(function(response){
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
          $scope.passMessage = 'Mission Update: You decide to fight!  You arm all your ships weapons and fire. You have a big ship so you should be ok right?  Wrong!  Q gets insulted that you fired on him and destroys your ship and crew.';
          $scope.newTime       = $scope.time*1;
          $scope.newHealth     = 0;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/youdied');
            });
          break;

        case 'two':
          $scope.passMessage = 'Mission Update: You try all the evasive manuvers in the starfleet handbook and then your try some shady ones that aren\'t in the handbook.  Q keeps up with you the whole time and then puts you and your bridge crew on trial for all of humanities past crimes.  You talk your way out of the predicament and continue traveling at standard warp to your destination, but you have lost three months as his prisoner.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
          }else{
            $scope.speed    = 0.00001245; /* in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear+90/365;
          $scope.newHealth     = $scope.health-(Math.floor(Math.random()*10)+1)*$scope.shipHandicap*$scope.captainHandicap;
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/andromeda');
            });
          break;

        case 'three':
          $scope.passMessage = 'Mission Update: To decide to submit to whatever Q wants.  As predicted he puts you and your bridge crew on trial for all of humanities past crimes.  You talk your way out of the predicament and continue traveling at standard warp to your destination.  However before you go Q warns that "He will be watching you".';
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
            $location.path('/'+$routeParams.gameId+'/andromeda');
            });
       }
    };


  }]);
})();

