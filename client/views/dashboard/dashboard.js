(function(){
  'use strict';

  angular.module('capstone')
  .controller('DashboardCtrl', ['$scope', 'User', function($scope, User){

    User.getUser(User).then(function(response){
      $scope.thisUser = response.data.client;
    });

    $scope.togglePhoto = function(){
      $scope.showPhoto = !!!$scope.showPhoto;
    };

  }]);
})();

