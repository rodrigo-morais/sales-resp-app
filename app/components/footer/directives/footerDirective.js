var footerDirective = () => {
    

    let html = 'app/components/footer/templates/footer.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/footer/css/footer.css',
        replace: true,
        link: function (scope, element, attrs, controller) {
            
        }
    };
};

footerDirective.$inject = [];

export default footerDirective;