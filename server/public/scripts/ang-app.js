var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/signinhome', {
      templateUrl: '/views/signinhome.html',
      controller: "LoginController"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
    })
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/library', {
      templateUrl: '/views/library.html',
      controller: "LibraryController"
    })
    .when('/random', {
      templateUrl: '/views/random.html',
      controller: "RandomController"
    })
    .when('/edit', {
      templateUrl: '/views/edit.html',
      controller: "EditController"
    })
    .otherwise({
      redirectTo: 'signinhome'
    })
}]);
