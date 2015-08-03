import app from 'app';
import { LoginService } from "login/services/loginService";
import config from '../../config';

class LoginController {
    constructor($location, $rootScope, $crypto, loginService, localStorageService){
        this._service = loginService;
        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;
        this._crypto = $crypto;

        this.userName = '';
        this.password = '';

        this._rootScope.logged = false;
        this._rootScope.userName = '';

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') !== null){
                this._rootScope.userName = this._localStorageService.get('userName');
                this._location.path('/home');
            }
        }
    }

    _clean(){
        this.userName = '';
        this.password = '';
    }

    login(){
        let _this = this,
            passwordHash = this._crypto.encrypt(this.password),
            digest = this._crypto.encrypt(this.userName + ',' + passwordHash + config.token);
        this._service.post(this.userName, passwordHash, digest).then(function(data){
            if(data.code === '0'){
                if(_this._localStorageService.isSupported) {
                    _this._localStorageService.set('userName', _this.userName);
                    _this._localStorageService.set('sessionId', data.sessionId);
                    _this._rootScope.userName = _this.userName;
                    _this._rootScope.logged = true;
                    _this._location.path('/home');
                }
            }
            else{
                _this._clean();
            }
        });
    }
}

    LoginController.$inject = ['$location', '$rootScope', '$crypto', 'loginService', 'localStorageService'];

app
    .controller('loginController', LoginController)
    .service('loginService', LoginService);

export { LoginController };