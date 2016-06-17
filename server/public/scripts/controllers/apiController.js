
// Extra Stretch Goal: Include Giant Bombs API to show cover art and description of games in Library and Random page.

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
  var key = 'cda6e4452910c4bd62fec694b9699db14588146d';
  var baseURL = 'https://www.giantbomb.com/api/search/?api_key=';

  $scope.getApiGame = function(wantedGame) {
    var query = key;
    query += '&format=json&query="' + wantedGame + '"';
    query += '&resources=game'

    var request = baseURL + encodeURI(query);

    console.log(request);
    if (wantedGame == undefined) {
      alert("Enter a title.");
    } else {
    $http({
        method: 'JSONP',
        url: request,
        params: {
            api_key: key,
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
        }
    }).then(function (data) {
        $scope.data = data;
        $scope.link = $scope.data.data.results[0].site_detail_url;
        $scope.name = $scope.data.data.results[0].name;
        $scope.apiImage = $scope.data.data.results[0].image.thumb_url;
        var apiReleaseDate = $scope.data.data.results[0].original_release_date;
        $scope.apiReleaseDate = new Date(apiReleaseDate);
        $scope.apiDeck = $scope.data.data.results[0].deck;
        console.log($scope.data.data.results[0]);
    });
}

    $scope.showApiData = function () {
      if ($scope.data == 'null') {
        return false;
      }else if ($scope.data == undefined) {
        return false;
      } else {
        return true;
      }
    };
  }
}]);
