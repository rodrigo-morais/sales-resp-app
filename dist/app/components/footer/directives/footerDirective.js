define(["exports", "module"], function (exports, module) {
    "use strict";

    var footerDirective = function () {

        var html = "app/components/footer/templates/footer.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/footer/css/footer.css",
            replace: true,
            scope: {
                buttons: "=",
                actions: "="
            },
            link: function link(scope, element, attrs, controller) {}
        };
    };

    footerDirective.$inject = [];

    module.exports = footerDirective;
});