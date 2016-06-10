myApp.controller('EditController', ['$scope', '$http', function($scope, $http) {
  $scope.games = [];

  getGames();

  function getGames() {
    $http.get('/games')
      .then(function (response) {
        $scope.games = response.data;

        for (i = 0; i < $scope.games.length; i++) {
             var bloop = $scope.games[i].date;
            $scope.games[i].date = new Date(bloop);
            }
          });
        }

  $scope.updateGame = function (games) {
    var gameId = games._id;
    delete games._id;
    if (confirm('Are you sure you want to update this game?')) {
      $http.put('/games/' + gameId, games)
        .then(function (response) {
          console.log('PUT /games ', games);
          getGames();
            });
          }
        };


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
      }]);
