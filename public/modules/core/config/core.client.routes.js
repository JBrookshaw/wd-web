'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
			state('poster', {
			url: '/poster',
			templateUrl: 'modules/core/views/poster.client.view.html'
		}).
			state('docs', {
				url: '/docs',
				templateUrl: 'modules/core/views/docs.client.view.html'
			}).
			state('videos', {
				url: '/videos',
				templateUrl: 'modules/core/views/videos.client.view.html'
			});
	}
]);
