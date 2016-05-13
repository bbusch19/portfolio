angular.module('myPortfolio', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('landing', {
        url: '/landing',
        templateUrl: '../views/homeTmpl.html',
        // controller: 'landingCtrl'
    })

})
