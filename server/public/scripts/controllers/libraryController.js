myApp.controller('LibraryController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.games = [];
    $scope.currentGame = {};

    getGames();

// getGames grabs the games from the database and assigns it to the array of $scope.games.

    function getGames() {
      $http.get('/games')
        .then(function (response) {
          $scope.games = response.data;
        });
    }

// editGame is not functional at the moment. Might move to its own page.

    $scope.editGame = function () {
        $location.path( '/edit' );
        };

// deleteGame will remove the game from the database completely. It's inside an if statement to confirm the deletion.

    $scope.deleteGame = function (id) {
      if (confirm('Are you sure you want to delete this?')) {
        $http.delete('/games/' + id)
          .then(function (response) {
            console.log('DELETE /games ', id);
              getGames();
            });
          }
        };
      }]);
