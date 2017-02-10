angular.module("assessment")
.directive("petDirective", function(){
  return {
    restrict: "E",
    templateUrl: "../views/pet-tmpl.html",
    scope: {
      item: '=item'
    }
  }
});
