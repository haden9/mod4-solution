(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // redirect home if no url matches
        $urlRouterProvider.otherwise('/');

        $stateProvider
            // hp
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })
            .state('categoryList', {
                url: '/categories',
                templateUrl: 'src/menu/templates/categories.template.html',
                controller: 'CategoriesController as categoryList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            });
    }
})();
