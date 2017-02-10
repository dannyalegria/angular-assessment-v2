angular.module("assessment")
.service("mainService", function($http, $q){

  this.getData = function(){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets'
    })
  }

});
