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
            // cats
            .state('categoryList', {
                url: '/categories',
                templateUrl: 'src/menu/templates/categories.template.html',
                controller: 'CategoriesController as categoryList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            // items
            .state('items', {
                url: '/categories/items/{categoryShortName}',
                templateUrl: 'src/menu/templates/items.template.html',
                controller: 'ItemsController as itemList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService
                                .getItemsForCategory($stateParams.categoryShortName);
                        }
                    ]
                }
            });
    }
})();
