angular.module('DashboardModule', []).controller ('DashboardController',
function ($scope, $http) {

  $scope.notac = false;
  $scope.backToOne = false;
  $scope.docs = function() {
      $scope.notac = false;
      $scope.backToOne = false;
  }
  $scope.notacClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/doc_otchujdenya/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }
  $scope.lastDog = false;
  $scope.lastDogClick = function() {
    $scope.lastDog = true;
    $scope.notac = false;
    $scope.backToOne = false;

  }


})
