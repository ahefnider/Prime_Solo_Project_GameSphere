
// Extra Stretch Goal: Include Giant Bombs API to show cover art and description of games in Library and Random page.







// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//   var key = cda6e4452910c4bd62fec694b9699db14588146d;
//   var baseURL = 'http://www.giantbomb.com/api/game/3030-4725/';
//   // $scope.breed = '';
//
//   $scope.getApiGame = function(wantedGame) {
//     var query =
//     query += '?api_key=' + key;
//     query += '&format=json';
//     query += '&field_list=genres,name,image,site_detail_url';
//
//     var request = baseURL + encodeURI(query);
//     //  + '&callback=JSON_CALLBACK'
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.genres = response.data.results.genres;
//         $scope.image = response.data.results.image;
//         // $scope.getBreeds();
//       }
//     )
//   }

  // $scope.getBreeds = function() {
  //   var query = 'breed.list';
  //   query += '?key=' + key;
  //   query += '&animal=' + $scope.breed.toLowerCase();
  //   query += '&format=json';
  //
  //   var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
  //
  //   console.log(request);
  //
  //   $http.jsonp(request).then(
  //     function(response) {
  //       console.log('breeds: ', response.data);
  //       $scope.info = response.data;
  //     }
  //   )
  // }

// }]);
