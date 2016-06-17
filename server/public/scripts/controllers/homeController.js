myApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.games = [];
    $scope.currentGame = {};
    $scope.lastGame = {};

    verifyLogin();

    function verifyLogin() {
      $http.get('/games').then(function(response) {
       if (response.data) {
           $scope.games = response.data;
           console.log($scope.games[$scope.games.length-1]);
           $scope.lastGame = $scope.games[$scope.games.length-1];
          //  console.log($scope.lastGame);
       } else {
           $location.path("/signinhome");
       }
     });
    }


    $scope.showLastGame = function () {
      if ($scope.lastGame == {}) {
        return false;
      }else if ($scope.lastGame == undefined) {
        return false;
      } else {
        return true;
      }
    };


// $scope.gameGenres is attached to the genre drop-down

    $scope.gameGenres = [
      'Action',
      'Adventure',
      'Casual',
      'Fantasy',
      'Fighting',
      'Horror',
      'Logic',
      'Management',
      'MMORPG',
      'Platformer',
      'Racing',
      'Retro',
      'RPG',
      'RTS',
      'Roguelike',
      'Sandbox',
      'Shooter',
      'Simulation',
      'Sports',
      'Stealth',
      'Strategy',
      'Strategy 4X',
      'Survival'
    ];

// submitCurrentGame is attached to the Add Game button and adds the game to the database.

    $scope.submitCurrentGame = function () {
      console.log('game to save:', $scope.currentGame);
      var data = $scope.currentGame;
      $http.post('/games', data)
        .then(function () {
          alert('Game has been saved.');
          $scope.lastGame = data;
          console.log($scope.lastGame);
          $scope.currentGame = {};

        });

    };
  }]);
