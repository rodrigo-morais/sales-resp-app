define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var LoginService = (function () {
        function LoginService($q, $resource) {
            _classCallCheck(this, LoginService);

            this.service = $resource(config.url + "authenticate", { token: "@token", digest: "@digest", user: "@user" }, { post: { method: "POST", headers: {
                        "Content-Type": "application/json"
                    } } });
            this.q = $q;
        }

        _createClass(LoginService, {
            post: {
                value: function post(userName, password, digest) {
                    var deferred = this.q.defer();

                    this.service.post({
                        token: config.token,
                        digest: digest,
                        user: {
                            username: userName,
                            password: password
                        }
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        });

        return LoginService;
    })();

    LoginService.$inject = ["$q", "$resource"];

    exports.LoginService = LoginService;
});