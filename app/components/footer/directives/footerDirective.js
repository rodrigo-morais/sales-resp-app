var footerDirective = () => {
    

    let html = 'app/components/footer/templates/footer.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/footer/css/footer.css',
        replace: true,
        scope: {
            buttons: '=',
            actions: '='
        },
        link: function (scope, element, attrs, controller) {
            
        }
    };
};

footerDirective.$inject = [];

export default footerDirective;