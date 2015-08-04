var customerDetailsHeaderDirective = () => {
    
    let html = 'app/components/customerDetails/templates/customerDetailsHeader.html';

    return {
        restrict: 'E',
        templateUrl: html,
        replace: true,
        link: function (scope, element, attrs, controller) {
            
            
        }
    };
};

customerDetailsHeaderDirective.$inject = [];

export default customerDetailsHeaderDirective;