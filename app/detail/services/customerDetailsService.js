import config from '../../config';

class CustomerDetailsService {

    constructor($q, $resource){
        this.service = $resource(config.url + 'customer/details',
                        {sessionId: '@sessionId', customerid: '@customerid'},
                        {post: {
                                    method: 'POST',
                                    headers: {
                                                'Content-Type': 'application/json'
                                    }
                                }
                        });
        this.noteService = $resource(config.url + 'customer/savenotes',
                        {
                            sessionId: '@sessionId',
                            customerid: '@customerid',
                            status: '@status',
                            notes: '@notes'
                        },
                        {post: {
                                    method: 'POST',
                                    headers: {
                                                'Content-Type': 'application/json'
                                    }
                                }
                        });

        this.visitService = $resource(config.url + 'customer/savevisit',
                        {
                            sessionId: '@sessionId',
                            customerid: '@customerid',
                            date: '@date',
                            time: '@time',
                            action: '@action',
                            notes: '@notes'
                        },
                        {post: {
                                    method: 'POST',
                                    headers: {
                                                'Content-Type': 'application/json'
                                    }
                                }
                        });

        this.q = $q;
    }

    post(sessionId, custometId){
        var deferred = this.q.defer();

        this.service.post(
            {
                "sessionId" : sessionId,
                "customerid" : custometId
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    saveNotes(sessionId, custometId, status, notes){
        var deferred = this.q.defer();

        this.noteService.post(
            {
                "sessionId" : sessionId,
                "customerid" : custometId,
                "status" : status,
                "notes" : notes
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    saveVisit(sessionId, custometId, date, time, action, notes){
        var deferred = this.q.defer();

        this.visitService.post(
            {
                "sessionId" : sessionId,
                "customerid" : custometId,
                "visit": {
                    "date" : date,
                    "time" : time,
                    "action" : action,
                    "notes" : notes
                }
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

CustomerDetailsService.$inject = ['$q', '$resource'];

export { CustomerDetailsService };