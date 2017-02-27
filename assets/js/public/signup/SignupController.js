angular.module('SignupModule').controller('SignupController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
	$scope.existsError = false;


	// set-up loading state
	$scope.signupForm = {
		loading: false
	}

	$scope.submitSignupForm = function(){

		// Set the loading state (i.e. show loading spinner)
		$scope.signupForm.loading = true;
		$scope.existsError = false;
		// Submit request to Sails.
		$http.post('/signup', {
			name: $scope.signupForm.name,
			title: $scope.signupForm.title,
			email: $scope.signupForm.email,
			password: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			console.log(sailsResponse);
			if(sailsResponse.data.errors) {
				$scope.existsError = true;
			}
			else {
				var id = sailsResponse.data.id;
				window.location = 'dashboard';}
			})
			.catch(function onError(sailsResponse){
				$scope.existsError = true;

			})
			.finally(function eitherWay(){
				$scope.signupForm.loading = false;
			})
		}

		$scope.submitLoginForm = function (){

			// Set the loading state (i.e. show loading spinner)
			$scope.loginForm.loading = true;

			// Submit request to Sails.
			$http.put('/login', {
				email: $scope.loginForm.email,
				password: $scope.loginForm.password
			})
			.then(function onSuccess (){
				// Refresh the page now that we've been logged in.
				window.location = '/';
			})
			.catch(function (sailsResponse) {

				//console.log(sailsResponse);
				//$scope.error.exist = sailsResponse.data.original.detail;
				// // Handle known error type(s).
				// // Invalid username / password combination.
				if (sailsResponse.status === 400 || 404) {
					// $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
					//
					toastr.error('Неправильный логин или пароль', 'Ошибка', {
						closeButton: true
					});
					return;
				}

				toastr.error('Неожиданная ошибка, пожалуйста попробуйте еще раз.', 'Ошибка', {
					closeButton: true
				});
				// 	return;

			})
			.finally(function eitherWay(){
				$scope.loginForm.loading = false;
			});
		};

	}]);
