angular.module('learnNg')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope'];

function HomeController($scope){
  $scope.danger = function(){
    alert('You have been owned!');
  }

}
