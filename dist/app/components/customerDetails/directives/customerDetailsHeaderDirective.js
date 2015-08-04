define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerDetailsHeaderDirective = function () {

        var html = "app/components/customerDetails/templates/customerDetailsHeader.html";

        return {
            restrict: "E",
            templateUrl: html,
            replace: true,
            link: function link(scope, element, attrs, controller) {}
        };
    };

    customerDetailsHeaderDirective.$inject = [];

    module.exports = customerDetailsHeaderDirective;
});