define(["exports", "module"], function (exports, module) {
    "use strict";

    var headerController = function ($scope, $location, localStorageService) {

        $scope.logoff = function () {
            if (localStorageService.isSupported) {
                localStorageService.remove("userName", "sessionId");
                $location.path("/");
            }
        };
    };

    headerController.$inject = ["$scope", "$location", "localStorageService"];

    module.exports = headerController;
});