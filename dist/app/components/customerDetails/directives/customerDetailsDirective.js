define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerDetailsDirective = function () {

        var html = "app/components/customerDetails/templates/customerDetails.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/customerDetails/css/customerDetails.css",
            replace: true,
            scope: {
                customer: "="
            },
            link: function link(scope, element, attrs, controller) {}
        };
    };

    customerDetailsDirective.$inject = [];

    module.exports = customerDetailsDirective;
});