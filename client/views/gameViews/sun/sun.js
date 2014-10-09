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
      $scope.time = response.data.myGame.time.toFixed(2);
    });

    $scope.sunChoice = function(choice){
      switch(choice){
        case 'one':
          var passMessage = 'Your ship travels successfully out of the solar system to begin its journey.';
          if($scope.ship === 'Shuttlecraft'){
            var timeSpentSec  = 403914250890/74948114.5,
                //distace to asteroid belt in meters divided by speed of shuttlecraft (74948114.5).
                timeSpentYear = timeSpentSec/31536000,
                // time spent converted from seconds to years
                newTime       = $scope.time*1+timeSpentYear,
                newHealth     = $scope.health,
                newStage      = 'sun';
              Game.addStage($routeParams.gameId, newStage, newHealth, newTime, passMessage).then(function(response){
                $location.path('/'+$routeParams.gameId+'/asteroid');
              });
          }else{
          console.log('not shuttlecraft');
          }
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

