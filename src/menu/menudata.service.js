(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('BaseApiUrl', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'BaseApiUrl'];

    function MenuDataService($http, BaseApiUrl) {
        var service = this;

        service.getAllCategories = function () {
            return $http.get(BaseApiUrl + 'categories.json').then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            var config = {
                params: {
                    category: categoryShortName
                }
            };

            return $http.get(BaseApiUrl + 'menu_items.json', config).then(function (response) {
                return response.data;
            });
        };
    }
})();
