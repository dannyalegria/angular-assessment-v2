angular.module("assessment")
.service("bioService", function($http, $q){

  this.getPetData = function(id){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets/' + id
    })
  }

  // this.getPetData = function(id){return $http()}

});
