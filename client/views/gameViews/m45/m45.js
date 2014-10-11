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
    $scope.distance = 920;   /*in ly*/
    $scope.buttonText=[{value:'one', text:'Flee at max warp!'}, {value:'two', text:'Stop and study the stars'}, {value:'three', text:'Follow the voices'}];

    Game.gameInfo($routeParams.gameId, 'm45').then(function(response){
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

    $scope.m45Choice = function(choice){
      switch(choice){
        case 'one':
          $scope.passMessage = 'As a starship captain you have read the Odyssey by Homer and know all about what happened to Odysseus when he encountered the Sirens.  You fear something similar may be happening here so you drive your ship at maximum warp.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* impulse speed in ly/sec*/
          }else{
            $scope.speed    = 0.0000605357307; /* max warp in ly/sec*/
          }
          $scope.timeSpentSec  = $scope.distance/$scope.speed;
          $scope.timeSpentYear = $scope.timeSpentSec/31536000;
          $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
          $scope.newHealth     = $scope.health;
          alert($scope.newHealth);
          $scope.newStage      = 'm45';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/orion');
            });
          break;

        case 'two':
          $scope.passMessage = 'You stop to study the area and get stuck.  Some time later another ship travels by and sees you. It gets you unstuck and you find that you have been stuck for 100 years but none of your crew has aged or remembers what they have been doing for the last 100 years.  You continue on your journey.';
          $scope.newTime       = $scope.time*1+100;
          $scope.newHealth     = $scope.health;
          alert($scope.newHealth);
          $scope.newStage      = 'm45';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/orion');
            });
          break;

        case 'three':
          $scope.passMessage = 'You can\'t reist the beautiful voices and decide to follow them.  They lead you to the largest star which then consumes you.';
          $scope.newTime       = $scope.time*1;
          $scope.newHealth     = 0;
          alert($scope.newHealth);
          $scope.newStage      = 'm45';
          Game.addStage($routeParams.gameId, $scope.newStage, $scope.newHealth, $scope.newTime, $scope.passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/youdied');
            });
       }
    };


  }]);
})();

