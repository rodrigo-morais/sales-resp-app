define(["exports", "angular", "angular-route", "angularAMD", "angular-local-storage", "aes", "angular-crypto", "angularCSS", "angular-resource", "bootstrap", "components/header/directives/headerDirective", "components/footer/directives/footerDirective"], function (exports, _angular, _angularRoute, _angularAMD, _angularLocalStorage, _aes, _angularCrypto, _angularCSS, _angularResource, _bootstrap, _componentsHeaderDirectivesHeaderDirective, _componentsFooterDirectivesFooterDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var LocalStorageModule = _interopRequire(_angularLocalStorage);

    var aes = _interopRequire(_aes);

    var angularCrypto = _interopRequire(_angularCrypto);

    var angularCss = _interopRequire(_angularCSS);

    var ngResource = _interopRequire(_angularResource);

    var bootstrap = _interopRequire(_bootstrap);

    var headerDirective = _interopRequire(_componentsHeaderDirectivesHeaderDirective);

    var footerDirective = _interopRequire(_componentsFooterDirectivesFooterDirective);

    var app = angular.module("myApp", ["ngRoute", "ngResource", "door3.css", "LocalStorageModule", "mdo-angular-cryptography"]);

    app.config(["$httpProvider", function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }]);

    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix("myApp").setStorageType("sessionStorage").setNotify(false, false);
    });

    app.config(["$cryptoProvider", function ($cryptoProvider) {
        $cryptoProvider.setCryptographyKey("crossover");
    }]);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        })).when("/home", angularAMD.route({
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

    app.directive("headerPage", [headerDirective]).directive("footerPage", [footerDirective]);

    return angularAMD.bootstrap(app);
});