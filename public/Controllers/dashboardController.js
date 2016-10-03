angular.module('dovalley').controller('DashboardController', ['$scope', '$http', "$state", function ($scope, $http) {
	$scope.user = JSON.parse(localStorage['User-Data']) || undefined;
	$scope.userGoals = [];
	$scope.username = $scope.user.username;
	$scope.goal = {
		goalName: "",
		updatedGoal: "",
		createdBy: $scope.user._id,
		goalProgress: false

	};




	$http.post('api/goal/get', $scope.goal).success(function (response) {
		for (i = 0; i < response.length; i++) {
			$scope.userGoals.push(response[i]);
		}
		$scope.selectedGoal = $scope.userGoals[0];

	});


	$scope.setGoal = function () {
		if ($scope.goal.goalName.length > 1){
		$http.post('api/goal/set', $scope.goal).success(function (response) {

			console.log("Sending goal ", $scope.goal);
			$('#goaltask-modal').modal('hide');
			$scope.userGoals.push(response[response.length - 1]);
		  $scope.goal.goalName="";
		}).error(function (error) {});
	}else{
		alert("You cannot add empty goal");
	}

	};

	$scope.deleteGoal = function (goal, index) {
		console.log("asdasadsdas ", goal);
		$http.post('api/goal/delete', goal).success(function (response) {
			$scope.userGoals.splice(index, 1);
		});
	};
$scope.showEdit = function(){
	$scope.editingGoal = true;
};


$scope.updateGoal = function(goal){
	console.log($scope.goal.updatedGoal);
$http.post('api/goal/edit', goal).success(function (response) {
			 $scope.editingGoal = false;
			 goal.goalName = response.goalName;
			  $scope.goal.updatedGoal = "";
		});

};
	}]);
