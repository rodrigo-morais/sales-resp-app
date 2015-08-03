import app from 'app';
import { SalesService } from "home/services/salesService";

class HomeController {
    constructor($location, $rootScope, localStorageService){
        let sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;

        if(!this._rootScope.logoff){
            this._rootScope.logoff = () => {
                if(this._localStorageService.isSupported) {
                    this._localStorageService.remove('userName', 'sessionId');
                    this._location.path('/');
                }
            };
        }

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') === null){
                this._rootScope.logged = false;
                this._rootScope.menus = [];
                this._location.path('/');
            }
            else{
                this.userName = this._localStorageService.get('userName');
                sessionId = this._localStorageService.get('sessionId');
                this._rootScope.userName = this.userName;
                this._rootScope.logged = true;
            }
        }
    }

}

HomeController.$inject = ['$location', '$rootScope', 'localStorageService'];

app
    .controller('homeController', HomeController);

export { HomeController };