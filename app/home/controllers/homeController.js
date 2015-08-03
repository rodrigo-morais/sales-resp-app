import app from 'app';
import { CustomersService } from "home/services/customersService";


class HomeController {
    constructor($location, $rootScope, localStorageService, customersService){
        let sessionId = null,
            _this = this;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;

        this.customers = [];
        this.buttons = ['sort', 'refresh'];
        this.actions = [];

        if(this._localStorageService.isSupported) {
            sessionId = this._localStorageService.get('sessionId');
        }

        if(sessionId !== null){
            customersService
                .post(sessionId)
                .then(function(list){
                    _this.customers = list.data;
                });
        }
        else{
            this._location.path('/');
        }

        this.actions.push(() => {
            $rootScope.$broadcast('sort-customer-table');
        });

        this.actions.push(() => {
            customersService
                .post(sessionId)
                .then(function(list){
                    $rootScope.$broadcast('refresh-customer-table');
                    _this.customers = list.data;
                });
        });

        this.showDetails = (id) => {
            this._location.path('/details/' + id);
        };
    }

}

HomeController.$inject = ['$location', '$rootScope', 'localStorageService', 'customersService'];

app
    .controller('homeController', HomeController)
    .service('customersService', CustomersService);

export { HomeController };