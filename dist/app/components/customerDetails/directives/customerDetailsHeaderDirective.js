define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerDetailsHeaderDirective = function () {

        var html = "app/components/customerDetails/templates/customerDetailsHeader.html";

        return {
            restrict: "E",
            templateUrl: html,
            replace: true,
            scope: {
                customer: "="
            },
            link: function link(scope, element, attrs, controller) {
                scope.isMobile = /Mobi/i.test(navigator.userAgent);
                scope.showDetails = false;
                scope.showCommunication = false;
                scope.showAddresses = false;

                scope.toggleDetails = function () {
                    scope.showDetails = !scope.showDetails;
                    scope.showCommunication = false;
                    scope.showAddresses = false;
                };

                scope.toggleCommunication = function () {
                    scope.showCommunication = !scope.showCommunication;
                    scope.showDetails = false;
                    scope.showAddresses = false;
                };

                scope.toggleAdresses = function () {
                    scope.showAddresses = !scope.showAddresses;
                    scope.showDetails = false;
                    scope.showCommunication = false;
                };
            }
        };
    };

    customerDetailsHeaderDirective.$inject = [];

    module.exports = customerDetailsHeaderDirective;
});