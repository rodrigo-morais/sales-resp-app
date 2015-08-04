var customerDetailsHeaderDirective = () => {
    
    let html = 'app/components/customerDetails/templates/customerDetailsHeader.html';

    return {
        restrict: 'E',
        templateUrl: html,
        replace: true,
        scope: {
            customer: '='
        },
        link: function (scope, element, attrs, controller) {
            scope.isMobile = /Mobi/i.test(navigator.userAgent);
            scope.showDetails = false;
            scope.showCommunication = false;
            scope.showAddresses = false;

            scope.toggleDetails = () => {
                scope.showDetails = !scope.showDetails;
                scope.showCommunication = false;
                scope.showAddresses = false;
            };

            scope.toggleCommunication = () => {
                scope.showCommunication = !scope.showCommunication;
                scope.showDetails = false;
                scope.showAddresses = false;
            };

            scope.toggleAdresses = () => {
                scope.showAddresses = !scope.showAddresses;
                scope.showDetails = false;
                scope.showCommunication = false;
            };
        }
    };
};

customerDetailsHeaderDirective.$inject = [];

export default customerDetailsHeaderDirective;