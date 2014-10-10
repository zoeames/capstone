(function(){
  'use strict';

  angular.module('capstone')
  .controller('AsteroidCtrl', ['$scope', '$location', '$routeParams', 'Game', function($scope, $location, $routeParams, Game){

    $scope.captain = '';
    $scope.ship = '';
    $scope.shipPhoto = '';
    $scope.passMessage = '';
    $scope.buttonText=[{value:'one', text:'G'}, {value:'two', text:'P'}, {value:'three', text:'S'}];

    Game.gameInfo($routeParams.gameId, 'asteroid').then(function(response){
      $scope.captain = response.data.myGame.captain.name;
      $scope.ship = response.data.myGame.ship.name;
      $scope.shipPhoto = response.data.myGame.ship.photo;
      $scope.health = response.data.myGame.health;
      $scope.time = response.data.myGame.time;
      $scope.passMessage = response.data.myGame.stageMessage;
      alert($scope.passMessage);
    });

    $scope.asteroidChoice = function(choice){
      debugger;
      switch(choice){
        case 'one':
          $location.path('/dashboard');
          alert('button One');
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

