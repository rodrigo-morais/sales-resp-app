var customerTableDirective = () => {
    

    let html = 'app/components/customerTable/templates/customerTable.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/customerTable/css/customerTable.css',
        replace: true,
        link: function (scope, element, attrs, controller) {
            
        }
    };
};

customerTableDirective.$inject = [];

export default customerTableDirective;