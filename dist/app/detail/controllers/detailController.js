define(["exports", "app", "detail/services/customerDetailsService"], function (exports, _app, _detailServicesCustomerDetailsService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var CustomerDetailsService = _detailServicesCustomerDetailsService.CustomerDetailsService;

    var DetailController = (function () {
        function DetailController($location, $rootScope, localStorageService, customerDetailsService, toastr) {
            var _this2 = this;

            _classCallCheck(this, DetailController);

            var sessionId = null,
                _this = this;

            this._location = $location;
            this._localStorageService = localStorageService;
            this._rootScope = $rootScope;
            this._service = customerDetailsService;
            this._toastr = toastr;

            this.buttons = ["back", "save"];
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
                _this2._location.path("/home");
            });

            this.actions.push(function () {
                _this2.save(sessionId);
            });

            this.saveStatus = {
                visit: false,
                notes: false
            };
        }

        _createClass(DetailController, {
            save: {
                value: function save(sessionId) {
                    var _this = this;
                    if (this.saveStatus.visit) {
                        this._service.saveVisit(sessionId, this.customer.id, this.customer.visit.date, this.customer.visit.time, this.customer.visit.action, this.customer.visit.notes).then(function (data) {
                            _this.saveStatus.visit = false;
                            if (data.code === 0) {
                                _this._toastr.success("Save with successful!", "Customer Visit");
                            } else {
                                _this._toastr.error("Error when saving customer visit.", "Customer Visit");
                            }
                        });
                    }

                    if (this.saveStatus.notes) {
                        this._service.saveNotes(sessionId, this.customer.id, this.customer.status, this.customer.notes).then(function (data) {
                            _this.saveStatus.notes = false;
                            if (data.code === 4) {
                                _this._toastr.success("Save with successful!", "Customer Notes");
                            } else {
                                _this._toastr.error("Error when saving customer notes.", "Customer Notes");
                            }
                        });
                    }
                }
            }
        });

        return DetailController;
    })();

    DetailController.$inject = ["$location", "$rootScope", "localStorageService", "customerDetailsService", "toastr"];

    app.controller("detailController", DetailController).service("customerDetailsService", CustomerDetailsService);

    exports.DetailController = DetailController;
});