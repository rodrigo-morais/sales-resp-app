'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import LocalStorageModule from 'angular-local-storage';
import aes from 'aes';
import angularCrypto from 'angular-crypto';
import angularCss from 'angularCSS';
import ngResource from 'angular-resource';
import bootstrap from 'bootstrap';
import headerDirective from "components/header/directives/headerDirective";
import footerDirective from "components/footer/directives/footerDirective";
import customerTableDirective from "components/customerTable/directives/customerTableDirective";

let app = angular.module('myApp', ['ngRoute', 'ngResource', 'door3.css', 'LocalStorageModule', 'mdo-angular-cryptography']);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('sessionStorage')
        .setNotify(false, false);
});

app.config(['$cryptoProvider', function($cryptoProvider){
    $cryptoProvider.setCryptographyKey('crossover');
}]);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
      $routeProvider.
        when('/',  angularAMD.route({
            templateUrl: 'app/login/templates/login.html',
            controller: 'loginController',
            controllerUrl: 'login/controllers/loginController',
            controllerAs: 'vm'
        })).
        when('/home',  angularAMD.route({
            templateUrl: 'app/home/templates/home.html',
            controller: 'homeController',
            controllerUrl: 'home/controllers/homeController',
            controllerAs: 'vm'
        })).
        otherwise(angularAMD.route({
            templateUrl: 'app/login/templates/login.html',
            controller: 'loginController',
            controllerUrl: 'login/controllers/loginController',
            controllerAs: 'vm'
        }));

  }
]);

app
    .directive('headerPage', [headerDirective])
    .directive('footerPage', [footerDirective])
    .directive('customerTable', [customerTableDirective]);

return angularAMD.bootstrap(app);