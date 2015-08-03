/// <reference path="../vendor/d3/d3.min.js" />
/// <reference path="../vendor/angular-charts/dist/angular-charts.min.js" />
requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'angular': '../vendor/angular/angular',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-route': '../vendor/angular-route/angular-route',
        'angularAMD': '../vendor/angularAMD/angularAMD',
        'angular-local-storage': '../vendor/angular-local-storage/dist/angular-local-storage.min',
        'angularCSS': '../vendor/angular-css/angular-css',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
        'aes': '../vendor/cryptojslib/rollups/aes',
        'angular-crypto': '../vendor/angular-cryptography/mdo-angular-cryptography'
    },
    "shim": {
        'angular': {
            exports: "angular",
            deps: ["jquery"]
        },
        'angular-route': {
            exports: "angular-route",
            deps: ["angular"]
        },
        'angular-resource': {
            exports: "angular-resource",
            deps: ["angular"]
        },
        'angular-local-storage': {
            exports: "angular-local-storage",
            deps: ["angular"]
        },
        'angularCSS': {
            exports: "angularCSS",
            deps: ["angular"]
        },
        'angularAMD': ['angular'],
        'angular-crypto': ['angular'],
        'bootstrap':
        {
            deps: ["jquery"]
        }
    },
    deps: ["app"]
});