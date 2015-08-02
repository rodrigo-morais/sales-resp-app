define(["exports", "angular", "angular-route", "angularAMD", "angularCSS", "angular-resource", "bootstrap"], function (exports, _angular, _angularRoute, _angularAMD, _angularCSS, _angularResource, _bootstrap) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var angularCss = _interopRequire(_angularCSS);

    var ngResource = _interopRequire(_angularResource);

    var bootstrap = _interopRequire(_bootstrap);

    var app = angular.module("myApp", ["ngRoute", "ngResource", "door3.css", "LocalStorageModule", "angularCharts"]);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: "app/home/templates/home.html",
            controller: "homeController",
            controllerUrl: "home/controllers/homeController",
            controllerAs: "vm"
        })).otherwise(angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        }));
    }]);

    return angularAMD.bootstrap(app);
});