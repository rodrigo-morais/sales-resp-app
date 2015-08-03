define(["exports", "module", "components/header/controllers/headerController"], function (exports, module, _componentsHeaderControllersHeaderController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var headerController = _interopRequire(_componentsHeaderControllersHeaderController);

    var headerDirective = function () {

        var html = "app/components/header/templates/header.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/header/css/header.css",
            replace: true,
            scope: {
                showUser: "="
            },
            controller: headerController,
            link: function link(scope, element, attrs, controller) {}
        };
    };

    headerDirective.$inject = [];

    module.exports = headerDirective;
});