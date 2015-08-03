define(["exports", "app", "home/services/salesService"], function (exports, _app, _homeServicesSalesService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var SalesService = _homeServicesSalesService.SalesService;

    var HomeController = function HomeController($location, $rootScope, localStorageService, salesService) {
        var _this = this;

        _classCallCheck(this, HomeController);

        var sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._service = salesService;
        this._rootScope = $rootScope;

        if (!this._rootScope.logoff) {
            this._rootScope.logoff = function () {
                if (_this._localStorageService.isSupported) {
                    _this._localStorageService.remove("userName", "sessionId");
                    _this._location.path("/");
                }
            };
        }

        if (this._localStorageService.isSupported) {
            if (this._localStorageService.get("sessionId") === null) {
                this._rootScope.logged = false;
                this._rootScope.menus = [];
                this._location.path("/");
            } else {
                this.userName = this._localStorageService.get("userName");
                sessionId = this._localStorageService.get("sessionId");
                this._rootScope.userName = this.userName;
                this._rootScope.logged = true;
            }
        }
    };

    HomeController.$inject = ["$location", "$rootScope", "localStorageService", "salesService"];

    app.controller("homeController", HomeController).service("salesService", SalesService);

    exports.HomeController = HomeController;
});