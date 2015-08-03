var customerTableDirective = () => {
    

    let html = 'app/components/customerTable/templates/customerTable.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/customerTable/css/customerTable.css',
        replace: true,
        scope: {
            customers: '='
        },
        link: function (scope, element, attrs, controller) {
            
            scope.filterField = 'customername';
            scope.filterValue = '';
            scope.order = '';
            scope.reverse = true;

            scope.filterCustomers = () => {
                switch (scope.filterField) {
                    case 'customername':
                        return {customername: scope.filterValue};
                    case 'id':
                        return {id: scope.filterValue};
                    case 'productname':
                        return {productname: scope.filterValue};
                    case 'status':
                        return {status: scope.filterValue};
                }
            };

            scope.$on('refresh-customer-table', () => {
                scope.filterField = 'customername';
                scope.filterValue = '';
                scope.order = '';
                scope.reverse = true;
            });

            scope.$on('sort-customer-table', () => {
                scope.order = scope.filterField;
                scope.reverse = !scope.reverse;
            });
        }
    };
};

customerTableDirective.$inject = [];

export default customerTableDirective;