angular.module('PostModule', []).controller ('PostController',
function ($scope, $http) {
  $http.get('/post').success(function(data)
  {
  //  var myjson = data;
    $scope.titles = responce.data;
    console.log(data);
  });
})

// angular.module('PostModule').controller('SignupController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
//
//   $http.get("/post/findAll").then(
//   function(responce){
//        $scope.data = responce.data;
//   }
// )
