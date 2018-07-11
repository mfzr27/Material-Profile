var app = angular.module('mfzr27', ['ngRoute'])

app.config(function($routeProvider, $locationProvider, ){

	$routeProvider
		.when('/home',{
			templateUrl:'home.html'
		})
		.when('/projects',{
			templateUrl:'projects.html',
			controller: 'projectsController'
		})
		.when('/contact',{
			templateUrl:'contact.html'
		})
		.otherwise('/home');
})

