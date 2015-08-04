var customerDetailsDirective = () => {
    

    let html = 'app/components/customerDetails/templates/customerDetails.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/customerDetails/css/customerDetails.css',
        replace: true,
        link: function (scope, element, attrs, controller) {
            
            
        }
    };
};

customerDetailsDirective.$inject = [];

export default customerDetailsDirective;