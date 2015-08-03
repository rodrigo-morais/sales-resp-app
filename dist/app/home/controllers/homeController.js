define(["exports", "app", "home/services/customersService"], function (exports, _app, _homeServicesCustomersService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var CustomersService = _homeServicesCustomersService.CustomersService;

    var HomeController = function HomeController($location, $rootScope, localStorageService, customersService) {
        var _this2 = this;

        _classCallCheck(this, HomeController);

        var sessionId = null,
            _this = this;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;

        this.customers = [];
        this.buttons = ["sort", "refresh"];
        this.actions = [];

        if (this._localStorageService.isSupported) {
            sessionId = this._localStorageService.get("sessionId");
        }

        if (sessionId !== null) {
            customersService.post(sessionId).then(function (list) {
                _this.customers = list.data;
            });
        } else {
            this._location.path("/");
        }

        this.actions.push(function () {
            $rootScope.$broadcast("sort-customer-table");
        });

        this.actions.push(function () {
            customersService.post(sessionId).then(function (list) {
                $rootScope.$broadcast("refresh-customer-table");
                _this.customers = list.data;
            });
        });

        this.showDetails = function (id) {
            _this2._location.path("/details/" + id);
        };
    };

    HomeController.$inject = ["$location", "$rootScope", "localStorageService", "customersService"];

    app.controller("homeController", HomeController).service("customersService", CustomersService);

    exports.HomeController = HomeController;
});