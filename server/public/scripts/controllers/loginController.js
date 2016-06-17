myApp.controller('LoginController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.user = {
      username: '',
      password: ''
    };
    $scope.message = '';

    $scope.login = function() {
      if($scope.user.username == '' || $scope.user.password == '') {
        $scope.message = "Enter your Username and Password!";
      } else {
        console.log('sending to server...');
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.username) {
            console.log('success');
            // location works with SPA (ng-route)
            $location.path('/user');
          } else {
            console.log('failure: ', response);
            $scope.message = "Please try again.";
          }
        });
      }
    }

    $scope.registerUser = function() {
      if($scope.user.username == '' || $scope.user.password == '') {
        $scope.message = "Choose a Username and Password!";
      } else {
        console.log('sending to server...');
        $http.post('/register', $scope.user).then(function(response) {
          console.log('success');
          $location.path('/signinhome');
        },
        function(response) {
          console.log('error');
          $scope.message = "Please try again."
        });
      }
    }
}]);
