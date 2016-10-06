angular.module('chattyApp', ['ui.router',
    'chattyModule'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('chattyState', {
            url: '/',
            templateUrl: 'partials/chatty.html',
            controller: 'ChattyController'
        })
    })