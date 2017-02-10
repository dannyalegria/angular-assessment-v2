angular.module("assessment")
.controller("mainController", function($scope, $stateParams, mainService){

  mainService.getData().then(function(response){
    $scope.data = response.data;
  });

  $scope.toggle = function() {
    $scope.showPicture = !$scope.showPicture;
  };

});
