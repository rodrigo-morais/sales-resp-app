import app from 'app';
import { CustomerDetailsService } from "detail/services/customerDetailsService";

class DetailController {
    constructor($location, $rootScope, localStorageService, customerDetailsService, toastr){
        let sessionId = null,
            _this = this;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;
        this._service = customerDetailsService;
        this._toastr = toastr;

        this.buttons = ['back', 'save'];
        this.actions = [];

        if(this._localStorageService.isSupported) {
            sessionId = this._localStorageService.get('sessionId');
        }

        if(sessionId !== null){
            customerDetailsService
                .post(sessionId)
                .then(function(customer){
                    _this.customer = customer.data;

                    _this.customer.phones = _this.customer.communications.map(function(communication){
                        return communication.category === 'Phone' ? communication.value : null;
                    }).filter(function(communication){
                        return communication !== null;
                    }).join(' / ');

                    _this.customer.skypes = _this.customer.communications.map(function(communication){
                        return communication.category === 'Skype' ? communication.value : null;
                    }).filter(function(communication){
                        return communication !== null;
                    }).join(' / ');

                    _this.customer.emails = _this.customer.communications.map(function(communication){
                        return communication.category === 'Email' ? communication.value : null;
                    }).filter(function(communication){
                        return communication !== null;
                    }).join(' / ');

                    _this.customer.visit.date = new Date(_this.customer.visit.date);
                    
                    let hour = _this.customer.visit.time.split(':')[0],
                        minute = _this.customer.visit.time.split(':')[1].substring(0, 2);
                    _this.customer.visit.time = new Date(2015,8,1,hour,minute);

                });
        }
        else{
            this._location.path('/');
        }

        this.actions.push(() => {
            this._location.path('/home');
        });

        this.actions.push(() => {
            this.save(sessionId);
        });

        this.saveStatus = {
                visit: false,
                notes: false
            };
    }

    save(sessionId){
        let _this = this;
        if(this.saveStatus.visit){
            this._service
                .saveVisit(
                    sessionId,
                    this.customer.id,
                    this.customer.visit.date,
                    this.customer.visit.time,
                    this.customer.visit.action,
                    this.customer.visit.notes
                ).then(function(data){
                    _this.saveStatus.visit = false;
                    if(data.code === 0){
                        _this._toastr.success('Save with successful!', 'Customer Visit');
                    }
                    else{
                        _this._toastr.error('Error when saving customer visit.', 'Customer Visit');
                    }
                });
        }

        if(this.saveStatus.notes){
            this._service
                .saveNotes(
                    sessionId,
                    this.customer.id,
                    this.customer.status,
                    this.customer.notes
                ).then(function(data){
                    _this.saveStatus.notes = false;
                    if(data.code === 0){
                        _this._toastr.success('Save with successful!', 'Customer Notes');
                    }
                    else{
                        _this._toastr.error('Error when saving customer notes.', 'Customer Notes');
                    }
                });
        }
    }

}

DetailController.$inject = ['$location', '$rootScope', 'localStorageService', 'customerDetailsService', 'toastr'];

app
    .controller('detailController', DetailController)
    .service('customerDetailsService', CustomerDetailsService);

export { DetailController };