define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerTableDirective = function () {

        var html = "app/components/customerTable/templates/customerTable.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/customerTable/css/customerTable.css",
            replace: true,
            scope: {
                customers: "="
            },
            link: function link(scope, element, attrs, controller) {

                scope.filterField = "customername";

                scope.filterCustomers = function () {
                    switch (scope.filterField) {
                        case "customername":
                            return { customername: scope.filterValue };
                        case "id":
                            return { id: scope.filterValue };
                        case "productname":
                            return { productname: scope.filterValue };
                        case "status":
                            return { status: scope.filterValue };
                    }
                };
            }
        };
    };

    customerTableDirective.$inject = [];

    module.exports = customerTableDirective;
});