angular.module('assessment',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '../views/about.html'
  })
  .state('blog',{
    url: '/blog',
    templateUrl: '../views/blog.html'
  })
  .state('pet-bio', {
    url: '/pet-bio/:id',
    templateUrl: '../views/pet-bio.html',
    controller: 'bioController'
  })
  .state('pet-tmpl', {
    url: '/pet-tmpl',
    templateUrl: '../views/pet-tmpl.html'
  })
  .state('pets',{
    url: '/pets',
    templateUrl: '../views/pets.html'
  });

});
