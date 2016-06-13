myApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.games = [];
    $scope.currentGame = {};

    verifyLogin();

    function verifyLogin() {
      $http.get('/games').then(function(response) {
       if (response.data) {
           $scope.games = response.data;
       } else {
           $location.path("/signinhome");
       }
     });
    }


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
          $scope.lastGame = $scope.currentGame;
          console.log($scope.games[$scope.games.length-1], "inside submitCurrentGame");
          console.log('POST /games');
          $scope.currentGame = {};
        });
    };
  }]);


  // $scope.gameGenres = [
  //     {type: 'action', label: 'Action'},
  //     {type: 'adventure', label: 'Adventure'},
  //     {type: 'fantasy', label: 'Fantasy'},
  //     {type: 'fighting', label: 'Fighting'},
  //     {type: 'horror', label: 'Horror'},
  //     {type: 'logic', label: 'Logic'},
  //     {type: 'management', label: 'Management'},
  //     {type: 'mmorpg', label: 'MMORPG'},
  //     {type: 'platformer', label: 'Platformer'},
  //     {type: 'racing', label: 'Racing'},
  //     {type: 'retro', label: 'Retro'},
  //     {type: 'rpg', label: 'RPG'},
  //     {type: 'rts', label: 'RTS'},
  //     {type: 'roguelike', label: 'Roguelike'},
  //     {type: 'sandbox', label: 'Sandbox'},
  //     {type: 'shooter', label: 'Shooter'},
  //     {type: 'simulation', label: 'Simulation'},
  //     {type: 'sports', label: 'Sports'},
  //     {type: 'stealth', label: 'Stealth'},
  //     {type: 'strategy', label: 'Strategy'},
  //     {type: 'strategy4X', label: 'Strategy 4X'},
  //     {type: 'survival', label: 'Survival'},
  //   ];
