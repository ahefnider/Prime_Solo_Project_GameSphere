myApp.controller('LibraryController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.games = [];
    $scope.currentGame = {};

    // getGames();
    verifyLogin()


// verifyLogin makes sure user is authenticated, if they are, get the games, if not, redirect to login page.

     function verifyLogin() {
      $http.get('/games').then(function(response) {
       if (response.data) {
         $scope.games = response.data;
       } else {
           $location.path("/signinhome");
       }
     });
    }



// getGames grabs the games from the database and assigns it to the array of $scope.games. REPLACED, by verifyLogin().

    // function getGames() {
    //   $http.get('/games')
    //     .then(function (response) {
    //       $scope.games = response.data;
    //     })
    // }

// editGame opens up the game editing html to edit all games.

    $scope.editGame = function () {
        $location.path( '/edit' );
        };

// deleteGame will remove the game from the database completely. It's inside an if statement to confirm the deletion.

    $scope.deleteGame = function (id) {
      if (confirm('Are you sure you want to delete this?')) {
        $http.delete('/games/' + id)
          .then(function (response) {
            console.log('DELETE /games ', id);
              verifyLogin();
            });
          }
        };
      }]);
