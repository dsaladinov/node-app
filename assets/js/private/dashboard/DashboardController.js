angular.module('DashboardModule',  ['ui.tinymce']).controller ('DashboardController',
function ($scope, $http) {

  $scope.notac = false;
  $scope.backToOne = false;
  // tinymce.init({
  //   selector: '#mytextarea',
  //   theme: 'modern',
  //    height: 600,
  //    plugins: [
  //    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
  //    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
  //    'save table contextmenu directionality emoticons template paste textcolor'
  //  ],
  //  content_css: 'css/content.css',
  //  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
  //
  // });




  $scope.tinymceOptions = {
    selector: '#mytextarea',
    theme: 'modern',
     height: 600,
     plugins: [
     'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
     'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
     'save table contextmenu directionality emoticons template paste textcolor code'
   ],
   toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons| code',


    //
    // plugins: 'link image code',
    // toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };

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
    console.log($scope.clients);

    $scope.addNota = function() {
                  if (!$scope.fiz_name.length) {
                      return;
                  }
                  if ($scope.clients == 1) {
                    console.log($scope.clients);
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
