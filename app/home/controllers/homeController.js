import app from 'app';
import { SalesService } from "home/services/salesService";

class HomeController {
    constructor($location, $rootScope, localStorageService){
        let sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') === null){
                this._rootScope.logged = false;
                this._rootScope.menus = [];
                this._location.path('/');
            }
        }
    }

}

HomeController.$inject = ['$location', '$rootScope', 'localStorageService'];

app
    .controller('homeController', HomeController);

export { HomeController };