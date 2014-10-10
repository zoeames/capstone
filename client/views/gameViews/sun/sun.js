(function(){
  'use strict';

  angular.module('capstone')
  .controller('SunCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'Game', function($scope, $rootScope, $location, $routeParams, Game){
    $scope.captain = '';
    $scope.ship = '';
    $scope.shipPhoto = '';

    $scope.buttonText=[{value:'one', text:'Get out of here'}, {value:'two', text:'Practice Training Maneuvers'}, {value:'three', text:'Study surface of the sun'}];

    Game.gameInfo($routeParams.gameId, 'sun').then(function(response){
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
      $scope.health = response.data.myGame.health;
      $scope.time = response.data.myGame.time;
    });

    $scope.sunChoice = function(choice){
      switch(choice){
        case 'one':
          var passMessage = 'Your ship travels successfully out of the solar system to begin its journey.';
          if($scope.ship === 'Shuttlecraft'){
            $scope.speed    = 0.000000007922022; /* in ly/sec*/
            $scope.distance = 0.000027;   /*in ly*/
              //distace to asteroid belt in meters divided by speed of shuttlecraft (74948114.5).
            $scope.timeSpentSec  = $scope.distance/$scope.speed;
              // time spent converted from seconds to years
            $scope.timeSpentYear = $scope.timeSpentSec/31536000;
            $scope.newTime       = $scope.time*1+$scope.timeSpentYear;
            debugger;
            console.log('cow');
          }else{
            alert('cow');
          }
          var newHealth     = $scope.health,
          newStage      = 'sun';
          Game.addStage($routeParams.gameId, newStage, newHealth, $scope.newTime, passMessage).then(function(response){
            $location.path('/'+$routeParams.gameId+'/asteroid');
            });

          break;
        case 'two':
          alert('button two');
          break;
        case 'three':
          alert('button three');
       }
     /* Captain.setCaptain(captainId, $routeParams.gameId).then(function(response){
        $location.path('/'+$routeParams.gameId+'/sun');
       });*/
    };


  }]);
})();

