'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import angularCss from 'angularCSS';
import ngResource from 'angular-resource';
import bootstrap from 'bootstrap';

let app = angular.module('myApp', ['ngRoute', 'ngResource', 'door3.css', 'LocalStorageModule', 'angularCharts']);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
      $routeProvider.
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

return angularAMD.bootstrap(app);