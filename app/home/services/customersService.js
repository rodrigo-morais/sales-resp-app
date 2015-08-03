import config from '../../config';

class CustomersService {

    constructor($q, $resource){
        this.service = $resource(config.url + 'customer/list',
                        {sessionId: '@sessionId'},
                        {post: {
                                    method: 'POST',
                                    headers: {
                                                'Content-Type': 'application/json'
                                    }
                                }
                        });
        this.q = $q;
    }

    post(sessionId){
        var deferred = this.q.defer();

        this.service.post(
            {
                "sessionId" : sessionId
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

CustomersService.$inject = ['$q', '$resource'];

export { CustomersService };