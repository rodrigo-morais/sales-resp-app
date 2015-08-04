define(["exports", "module"], function (exports, module) {
    "use strict";

    var customerDetailsTabsDirective = function () {

        var html = "app/components/customerDetails/templates/customerDetailsTabs.html";

        return {
            restrict: "E",
            templateUrl: html,
            replace: true,
            scope: {
                customer: "=",
                saveStatus: "="
            },
            link: function link(scope, element, attrs, controller) {
                var _this = this;

                scope.selectTab = function (tab) {
                    $(".nav-tabs").removeClass("active");
                    $(_this).addClass("active");

                    $(".tab-pane").removeClass("active");
                    $("#" + tab).addClass("active");
                };

                scope.changeStatus = function (type) {
                    scope.saveStatus[type] = true;
                };
            }
        };
    };

    customerDetailsTabsDirective.$inject = [];

    module.exports = customerDetailsTabsDirective;
});