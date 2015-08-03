import headerController from "components/header/controllers/headerController";

var headerDirective = () => {
    

    let html = 'app/components/header/templates/header.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/header/css/header.css',
        replace: true,
        scope: {
            showUser: '='
        },
        controller: headerController,
        link: function (scope, element, attrs, controller) {
            
        }
    };
};

headerDirective.$inject = [];

export default headerDirective;