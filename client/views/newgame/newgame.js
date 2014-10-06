(function(){
  'use strict';

  angular.module('capstone')
  .controller('GameCtrl', ['$scope', '$location', 'Game', function($scope, $location, Game){
    $scope.game={};

    $scope.newGame = function(){
      Game.create().then(function(response){
        $scope.game = response.data.game;
        $location.path('/ships');
      });
    };


  }]);
})();

