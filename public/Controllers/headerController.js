angular.module('dovalley').controller('HeaderController', ['$scope', '$http', "$state", function ($scope, $http, $state) {
	if (localStorage['User-Data']) {
		$scope.loggedIn = true;
	}
	else {
		$scope.loggedIn = false;
	}

	$scope.login = {
		username: "",
		password: ""
	}

	$scope.logUserIn = function () {
		if ($scope.login.username.length > 3 && $scope.login.password.length > 3) {
			$http.post('api/user/login', $scope.login).success(function (response) {
				localStorage.setItem(['User-Data'], JSON.stringify(response));
				$scope.loggedIn = true;
				$state.go("dashboard");
				$('#login-modal').modal('hide');
			}).error(function (error) {});
		}else{
			  alert("Every field should contain at least 4 letters");
		}
	};
	$scope.logOut = function () {
		localStorage.clear();
		$scope.loggedIn = false;
		$state.go("landing");
	}
	}]);
