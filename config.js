angular.module('dovalley', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	 $urlRouterProvider.otherwise("/");

	$stateProvider

		//root for the landing page
	  .state('landing', {
				url:'/',
				views: {
					'header': {
						templateUrl : 'public/views/header.html',
						controller: 'HeaderController'
					},
					 'content': {
						 templateUrl: 'public/views/landing.html',
						 controller: 'LandingController'
					 },
					'footer': {
						templateUrl: 'public/views/footer.html'
					}
				}
	})

	//root for the set page
	  .state('dashboard', {
				url:'/dashboard',
				views: {
					'header': {
						templateUrl : 'public/views/header.html'
					},
					 'content': {
						 templateUrl: 'public/views/dashboard.html',
						 controller:  'DashboardController'
					 },
					'footer': {
						templateUrl: 'public/views/footer.html'
					}
				}
	})



			//root for the goalsfeed page
	  .state('goalsfeed', {
				url:'/goalsfeed',
				views: {
					'header': {
						templateUrl : 'public/views/header.html'
					},
					 'content': {
						 templateUrl: 'public/views/goalsfeed.html'
					 },
					'footer': {
						templateUrl: 'public/views/footer.html'
					}
				}
	})



	$locationProvider.html5Mode(true);
});




