angular.module('learnNg', ['ngRoute']);

angular.module('learnNg')
  .directive('navBar', function(){ //getter syntax
      return{
        templateUrl: 'html/templates/nav.html',
      };
     });
angular.module('learnNg')
  .config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl: 'html/views/home.html'})
    .when('/about', {templateUrl: 'html/views/about.html'})
    .when('/contact', {templateUrl: 'html/views/contact.html'})
    .when('/post', {templateUrl: 'html/views/post.html'})
    .otherwise({redirectTo: '/'});
  });
