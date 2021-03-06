'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import LocalStorageModule from 'angular-local-storage';
import aes from 'aes';
import angularCrypto from 'angular-crypto';
import angularToastrTemplate from 'angular-toastr-tmp';
import angularCss from 'angularCSS';
import ngResource from 'angular-resource';
import bootstrap from 'bootstrap';
import headerDirective from "components/header/directives/headerDirective";
import footerDirective from "components/footer/directives/footerDirective";
import customerTableDirective from "components/customerTable/directives/customerTableDirective";
import customerDetailsHeaderDirective from "components/customerDetails/directives/customerDetailsHeaderDirective";
import customerDetailsTabsDirective from "components/customerDetails/directives/customerDetailsTabsDirective";
import customerDetailsDirective from "components/customerDetails/directives/customerDetailsDirective";

let app = angular.module('myApp', ['ngRoute', 'ngResource', 'door3.css', 'LocalStorageModule', 'mdo-angular-cryptography', 'toastr']);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    autoDismiss: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    containerId: 'toast-container',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    maxOpened: 0,    
    messageClass: 'toast-message',
    newestOnTop: true,
    onHidden: null,
    onShown: null,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    progressBar: false,
    tapToDismiss: true,
    target: 'body',
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
});

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
        when('/details/:id',  angularAMD.route({
            templateUrl: 'app/detail/templates/detail.html',
            controller: 'detailController',
            controllerUrl: 'detail/controllers/detailController',
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
    .directive('customerTable', [customerTableDirective])
    .directive('customerDetailsHeader', [customerDetailsHeaderDirective])
    .directive('customerDetailsTabs', [customerDetailsTabsDirective])
    .directive('customerDetails', [customerDetailsDirective]);

return angularAMD.bootstrap(app);