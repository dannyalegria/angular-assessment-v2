angular.module("assessment")
.controller("bioController", function($scope, $stateParams, bioService){

  var petId = $stateParams.id;

  bioService.getPetData(petId).then(function(response){
  $scope.pet = response.data;
  });

  $scope.toggle = function() {
    $scope.showPicture = !$scope.showPicture;
  };

});
