(function(){
  'use strict';

  angular.module('capstone')
  .controller('CaptainsCtrl', ['$scope', '$location', '$routeParams', 'Captain', function($scope, $location, $routeParams, Captain){
    $scope.captain = {};
    $scope.captains = [];

    Captain.all($routeParams.gameId).then(function(response){
      $scope.captains = response.data.captains;
    });

    $scope.pickCaptain = function(captainId){
      Captain.setCaptain(captainId, $routeParams.gameId).then(function(response){
        $location.path('/'+$routeParams.gameId+'/sun');
       });
    };

  }]);
})();

