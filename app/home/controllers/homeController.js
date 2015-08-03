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
    }

}

HomeController.$inject = ['$location', '$rootScope', 'localStorageService', 'customersService'];

app
    .controller('homeController', HomeController)
    .service('customersService', CustomersService);

export { HomeController };