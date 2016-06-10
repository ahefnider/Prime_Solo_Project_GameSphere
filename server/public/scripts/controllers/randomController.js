myApp.controller('RandomController', ['$scope', '$http', function($scope, $http) {
  $scope.games = [];

// getSingleGame function chooses a random game and assigns it to $scope.games. Which shows up on the DOM.

   $scope.getSingleGame = function () {
    $http.get('/games')
      .then(function (response) {
        $scope.games = response.data[Math.floor(Math.random()*response.data.length)];
        console.log('GET Random Game: ', $scope.games);
        console.log(response.data.length, 'games in library');
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
