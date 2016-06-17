myApp.controller('RandomController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.games = [];


  verifyLogin();


  function verifyLogin() {
   $http.get('/games').then(function(response) {
    if (response.data) {
      console.log(response.data);
        $scope.userName = response.data.username;
    } else {
        $location.path("/signinhome");
    }
  });
 }





// getSingleGame function chooses a random game and assigns it to $scope.games. Which shows up on the DOM.

   $scope.getSingleGame = function () {
    $http.get('/games')
      .then(function (response) {
        if (response.data.length == 0) {
          alert("No games in Library");  
        } else {
          $scope.games = response.data[Math.floor(Math.random()*response.data.length)];
          console.log('GET Random Game: ', $scope.games);
          console.log(response.data.length, 'games in library');
        }
      });
    }

// showRandom is attached to ng-show. So <p> descriptor items (Genre: , Release Date:, etc.) aren't showing on page load.

    $scope.showRandom = function () {
      if ($scope.games.length == 0) {
        return false;
      } else {
        return true;
      }
    };
  }]);
