var customerDetailsTabsDirective = () => {
    
    let html = 'app/components/customerDetails/templates/customerDetailsTabs.html';

    return {
        restrict: 'E',
        templateUrl: html,
        replace: true,
        scope: {
            customer: '=',
            saveStatus: '='
        },
        link: function (scope, element, attrs, controller) {
            scope.selectTab = (tab) => {
                $('.nav-tabs').removeClass('active');
                $(this).addClass('active');

                $('.tab-pane').removeClass('active');
                $('#' + tab).addClass('active');
            };

            scope.changeStatus = (type) => {
                scope.saveStatus[type] = true;
            };
        }
    };
};

customerDetailsTabsDirective.$inject = [];

export default customerDetailsTabsDirective;