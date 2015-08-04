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
            }
        };
    };

    customerDetailsHeaderDirective.$inject = [];

    module.exports = customerDetailsHeaderDirective;
});