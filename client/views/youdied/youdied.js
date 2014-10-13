(function(){
  'use strict';

  angular.module('capstone')
  .controller('DiedCtrl', ['$scope', '$location', '$routeParams', 'Ship', 'Game', function($scope, $location, $routeParams, Ship, Game){
    $scope.captain='';

    Game.gameInfo($routeParams.gameId, 'sun').then(function(response){
      $scope.captain = response.data.myGame.captain.name;
    });

    $scope.seeStats = function(){
      $location.path('/dashboard');
    };
  }]);
})();

