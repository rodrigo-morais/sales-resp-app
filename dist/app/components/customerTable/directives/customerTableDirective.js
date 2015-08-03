define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerTableDirective = function () {

        var html = "app/components/customerTable/templates/customerTable.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/customerTable/css/customerTable.css",
            replace: true,
            link: function link(scope, element, attrs, controller) {}
        };
    };

    customerTableDirective.$inject = [];

    module.exports = customerTableDirective;
});