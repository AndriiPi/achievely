angular.module('dovalley')
	.controller('LandingController', ['$scope', '$http', "$state", function($scope, $http){
$scope.newUser = {
	email: "",
	username: "",
	password: ""
};

   $scope.createUser = function(){
console.log($scope.newUser.email.length);
		  if($scope.newUser.email.length > 3 && $scope.newUser.password.length > 3 && $scope.newUser.username.length>3){
			$http.post('api/user/signup', $scope.newUser).success(function(response){
			$scope.newUser.email = "";
			$scope.newUser.password = "";
			$scope.newUser.username = "";
			alert("Thank you! Now you can Login");


			}).error(function(error){

			})
		  }
	   else{
			  alert("Every field should contain at least 4 letters");
		  };
		}


	}]);

