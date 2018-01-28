(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('BaseApiUrl', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$q', '$http', 'BaseApiUrl'];

    function MenuDataService($q, $http, BaseApiUrl) {
        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();
            $http.get(BaseApiUrl + 'categories.json').then(function (response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        //service.getItemsForCategory(categoryShortName) = function () {
        //};
    }
})();
