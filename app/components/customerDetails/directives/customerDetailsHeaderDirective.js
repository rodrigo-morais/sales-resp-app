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
        }
    };
};

customerDetailsHeaderDirective.$inject = [];

export default customerDetailsHeaderDirective;