define(["exports", "app", "detail/services/customerDetailsService"], function (exports, _app, _detailServicesCustomerDetailsService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var CustomerDetailsService = _detailServicesCustomerDetailsService.CustomerDetailsService;

    var DetailController = function DetailController($location, $rootScope, localStorageService, customerDetailsService) {
        _classCallCheck(this, DetailController);

        var sessionId = null,
            _this = this;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;

        this.buttons = ["save"];
        this.actions = [];

        if (this._localStorageService.isSupported) {
            sessionId = this._localStorageService.get("sessionId");
        }

        if (sessionId !== null) {
            customerDetailsService.post(sessionId).then(function (customer) {
                _this.customer = customer.data;

                _this.customer.phones = _this.customer.communications.map(function (communication) {
                    return communication.category === "Phone" ? communication.value : null;
                }).filter(function (communication) {
                    return communication !== null;
                }).join(" / ");

                _this.customer.skypes = _this.customer.communications.map(function (communication) {
                    return communication.category === "Skype" ? communication.value : null;
                }).filter(function (communication) {
                    return communication !== null;
                }).join(" / ");

                _this.customer.emails = _this.customer.communications.map(function (communication) {
                    return communication.category === "Email" ? communication.value : null;
                }).filter(function (communication) {
                    return communication !== null;
                }).join(" / ");

                _this.customer.visit.date = new Date(_this.customer.visit.date);

                var hour = _this.customer.visit.time.split(":")[0],
                    minute = _this.customer.visit.time.split(":")[1].substring(0, 2);
                _this.customer.visit.time = new Date(2015, 8, 1, hour, minute);
            });
        } else {
            this._location.path("/");
        }

        this.actions.push(function () {
            console.log("save");
        });
    };

    DetailController.$inject = ["$location", "$rootScope", "localStorageService", "customerDetailsService"];

    app.controller("detailController", DetailController).service("customerDetailsService", CustomerDetailsService);

    exports.DetailController = DetailController;
});