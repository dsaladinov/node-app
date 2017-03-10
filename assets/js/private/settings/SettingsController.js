angular.module('SettingsModule',  []).controller ('SettingsController',
function ($scope, $http, $window) {

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
      $scope.price = $scope.sprList[0].UslugiAS.price;
      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina;
      $scope.uslugi_id = $scope.sprList[0].UslugiAS.id;
       console.log($scope.sprList[0].UslugiAS.id);// TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = 0;
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
      }
    };
    });

    $scope.createDoc = function() {
      $http.post('/doc_otchujdenya/create?title='+ $scope.title).success(function(data) {
        alert("Добавлен новый документ");
        $window.location.href="documents";
      })
    }

  }

  $scope.docDoverennostiClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;

    $http.get('/doverennosti/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {
      $scope.sprList = value.NotactAS;
      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = parseInt($scope.gos_poshlina);
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
    }
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

      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = parseInt($scope.gos_poshlina);
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
    }
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
      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = parseInt($scope.gos_poshlina);
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
    }
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
      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = parseInt($scope.gos_poshlina);
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
    }
  };
    });

  }

  $scope.docZayavleniyaClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;
    console.log($scope.Kto_clients);

    $scope.addNota = function() {
                  if (!$scope.fiz_name.length) {
                      return;
                  }
                  if ($scope.Kto_clients == 1) {
                    console.log($scope.kto_clients);
                    $scope.fiz_nota = function() {
                      $http.get('/nota_act/create?fiz_name=' + $scope.fiz_name).success(function(data){

                              $scope.nota_act.push({
                                  fiz_name: $scope.fiz_name,
                              });
                              $scope.fiz_name = '';
                          })
                    }
                  };
              };

    $http.get('/zayavleniya/findAll').success(function(data)
    {

      $scope.docList2 = data;
      $scope.docChange = function (value) {
      $scope.sprList = value.NotactAS;
      $scope.docTitle = $scope.selectedDoc.title;
      console.log($scope.clients);



      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
        $scope.priceCalc = function() {
          if($scope.marja == null) {
            $scope.price = parseInt($scope.gos_poshlina);
          }
          else {
            $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
          }
      }
  };
    });

  }

  $scope.docProchieClick = function () {
    $scope.notac = true;
    $scope.backToOne = true;
    $scope.lastDoc = false;
    $http.get('/doc_prochie/findAll').success(function(data)
    {
      $scope.docList2 = data;
      $scope.docChange = function (value) {
      $scope.sprList = value.NotactAS;
      $scope.gos_poshlina = $scope.sprList[0].UslugiAS.gos_poshlina; // TODO нужно будет сделать динамически.
      $scope.priceCalc = function() {
        if($scope.marja == null) {
          $scope.price = parseInt($scope.gos_poshlina);
        }
        else {
          $scope.price = parseInt($scope.marja) + parseInt($scope.gos_poshlina);
        }
    }
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
