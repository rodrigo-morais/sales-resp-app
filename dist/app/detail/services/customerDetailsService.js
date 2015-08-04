define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var CustomerDetailsService = (function () {
        function CustomerDetailsService($q, $resource) {
            _classCallCheck(this, CustomerDetailsService);

            this.service = $resource(config.url + "customer/details", { sessionId: "@sessionId", customerid: "@customerid" }, { post: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            });
            this.noteService = $resource(config.url + "customer/savenotes", {
                sessionId: "@sessionId",
                customerid: "@customerid",
                status: "@status",
                notes: "@notes"
            }, { post: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            });

            this.visitService = $resource(config.url + "customer/savevisit", {
                sessionId: "@sessionId",
                customerid: "@customerid",
                date: "@date",
                time: "@time",
                action: "@action",
                notes: "@notes"
            }, { post: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            });

            this.q = $q;
        }

        _createClass(CustomerDetailsService, {
            post: {
                value: function post(sessionId, custometId) {
                    var deferred = this.q.defer();

                    this.service.post({
                        sessionId: sessionId,
                        customerid: custometId
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            },
            saveNotes: {
                value: function saveNotes(sessionId, custometId, status, notes) {
                    var deferred = this.q.defer();

                    this.noteService.post({
                        sessionId: sessionId,
                        customerid: custometId,
                        status: status,
                        notes: notes
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            },
            saveVisit: {
                value: function saveVisit(sessionId, custometId, date, time, action, notes) {
                    var deferred = this.q.defer();

                    this.visitService.post({
                        sessionId: sessionId,
                        customerid: custometId,
                        visit: {
                            date: date,
                            time: time,
                            action: action,
                            notes: notes
                        }
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        });

        return CustomerDetailsService;
    })();

    CustomerDetailsService.$inject = ["$q", "$resource"];

    exports.CustomerDetailsService = CustomerDetailsService;
});