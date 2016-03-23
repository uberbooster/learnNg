angular.module('learnNg', []);

angular.module('learnNg')
  .directive('navBar', function(){ //getter syntax
      return{
        templateUrl: 'html/templates/nav.html',
      };
     });
