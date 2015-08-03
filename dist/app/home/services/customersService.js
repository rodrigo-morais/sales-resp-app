define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var CustomersService = (function () {
        function CustomersService($q, $resource) {
            _classCallCheck(this, CustomersService);

            this.service = $resource(config.url + "customer/list", { sessionId: "@sessionId" }, { post: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            });
            this.q = $q;
        }

        _createClass(CustomersService, {
            post: {
                value: function post(sessionId) {
                    var deferred = this.q.defer();

                    this.service.post({
                        sessionId: sessionId
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        });

        return CustomersService;
    })();

    CustomersService.$inject = ["$q", "$resource"];

    exports.CustomersService = CustomersService;
});