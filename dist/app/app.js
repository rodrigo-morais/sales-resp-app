define(["exports", "angular", "angular-route", "angularAMD", "angular-local-storage", "aes", "angular-crypto", "angular-toastr-tmp", "angularCSS", "angular-resource", "bootstrap", "components/header/directives/headerDirective", "components/footer/directives/footerDirective", "components/customerTable/directives/customerTableDirective", "components/customerDetails/directives/customerDetailsHeaderDirective", "components/customerDetails/directives/customerDetailsTabsDirective", "components/customerDetails/directives/customerDetailsDirective"], function (exports, _angular, _angularRoute, _angularAMD, _angularLocalStorage, _aes, _angularCrypto, _angularToastrTmp, _angularCSS, _angularResource, _bootstrap, _componentsHeaderDirectivesHeaderDirective, _componentsFooterDirectivesFooterDirective, _componentsCustomerTableDirectivesCustomerTableDirective, _componentsCustomerDetailsDirectivesCustomerDetailsHeaderDirective, _componentsCustomerDetailsDirectivesCustomerDetailsTabsDirective, _componentsCustomerDetailsDirectivesCustomerDetailsDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var LocalStorageModule = _interopRequire(_angularLocalStorage);

    var aes = _interopRequire(_aes);

    var angularCrypto = _interopRequire(_angularCrypto);

    var angularToastrTemplate = _interopRequire(_angularToastrTmp);

    var angularCss = _interopRequire(_angularCSS);

    var ngResource = _interopRequire(_angularResource);

    var bootstrap = _interopRequire(_bootstrap);

    var headerDirective = _interopRequire(_componentsHeaderDirectivesHeaderDirective);

    var footerDirective = _interopRequire(_componentsFooterDirectivesFooterDirective);

    var customerTableDirective = _interopRequire(_componentsCustomerTableDirectivesCustomerTableDirective);

    var customerDetailsHeaderDirective = _interopRequire(_componentsCustomerDetailsDirectivesCustomerDetailsHeaderDirective);

    var customerDetailsTabsDirective = _interopRequire(_componentsCustomerDetailsDirectivesCustomerDetailsTabsDirective);

    var customerDetailsDirective = _interopRequire(_componentsCustomerDetailsDirectivesCustomerDetailsDirective);

    var app = angular.module("myApp", ["ngRoute", "ngResource", "door3.css", "LocalStorageModule", "mdo-angular-cryptography", "toastr"]);

    app.config(["$httpProvider", function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }]);

    app.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: false,
            autoDismiss: false,
            closeButton: false,
            closeHtml: "<button>&times;</button>",
            containerId: "toast-container",
            extendedTimeOut: 1000,
            iconClasses: {
                error: "toast-error",
                info: "toast-info",
                success: "toast-success",
                warning: "toast-warning"
            },
            maxOpened: 0,
            messageClass: "toast-message",
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: "toast-top-right",
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: false,
            tapToDismiss: true,
            target: "body",
            templates: {
                toast: "directives/toast/toast.html",
                progressbar: "directives/progressbar/progressbar.html"
            },
            timeOut: 5000,
            titleClass: "toast-title",
            toastClass: "toast"
        });
    });

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
        })).when("/details/:id", angularAMD.route({
            templateUrl: "app/detail/templates/detail.html",
            controller: "detailController",
            controllerUrl: "detail/controllers/detailController",
            controllerAs: "vm"
        })).otherwise(angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        }));
    }]);

    app.directive("headerPage", [headerDirective]).directive("footerPage", [footerDirective]).directive("customerTable", [customerTableDirective]).directive("customerDetailsHeader", [customerDetailsHeaderDirective]).directive("customerDetailsTabs", [customerDetailsTabsDirective]).directive("customerDetails", [customerDetailsDirective]);

    return angularAMD.bootstrap(app);
});