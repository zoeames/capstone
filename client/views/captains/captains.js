(function(){
  'use strict';

  angular.module('capstone')
  .controller('CaptainsCtrl', ['$scope', '$location', 'Captain', function($scope, $location, Captain){
    $scope.captain = {};
    $scope.captains = [];

    Captain.all().then(function(response){
      $scope.captains = response.data.captains;
    });

    $scope.pickCaptain= function(){
      $location.path('/dashboard');
    };

  }]);
})();

