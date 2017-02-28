angular.module('DashboardModule', []).controller ('DashboardController',
function ($scope, $http) {

  $scope.notac = false;
  $scope.backToOne = false;
  $scope.docs = function() {
      $scope.notac = false;
      $scope.backToOne = false;
  }

  $scope.docOtchujClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;
    $scope.lastDoc = false;

    $http.get('/doc_otchujdenya/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.docDoverennostiClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/doverennosti/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.docNasledstvaClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/nasledstva/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });
  }

  $scope.docProchieDogovoraClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/prochie_dogovora/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.docZaveshaniyaClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/zaveshaniya/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.docZayavleniyaClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/zayavleniya/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.docProchieClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/doc_prochie/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {

      $scope.sprList = value.NotactAS;
      console.log($scope.sprList );
  };
    });

  }

  $scope.lastDoc = false;
  $scope.lastDocClick = function() {
    $scope.lastDoc = true;
    $scope.notac = false;
    $scope.backToOne = false;

  }


})
