var customerDetailsDirective = () => {
    

    let html = 'app/components/customerDetails/templates/customerDetails.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/customerDetails/css/customerDetails.css',
        replace: true,
        scope: {
            customer: '='
        },
        link: function (scope, element, attrs, controller) {
            scope.saveStatus = {
                visit: false,
                notes: false
            };
            
        }
    };
};

customerDetailsDirective.$inject = [];

export default customerDetailsDirective;